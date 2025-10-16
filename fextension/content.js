// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-10-01
// @description  Personaliza el aspecto de Moodle
// @author       Calo
// @match        https://moodle.unizar.es/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unizar.es
// @updateURL    https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/content.js
// @downloadURL    https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/content.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Configuración por defecto (fallback si no hay configuración guardada)
    const DEFAULT_CONFIG = {
        images: {
            background: chrome.runtime.getURL("assets/default/peterIRL.png"),
            navbarBg: chrome.runtime.getURL("assets/default/giggity.png"),
            calendarBg: 'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif',
            tarjeta: 'https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/fextension/assets/default/peter.jpg?raw=true',
            iconoPDF: chrome.runtime.getURL("assets/default/PETERRRRR.png"),
            logo: chrome.runtime.getURL("assets/mooodle.png"),
            userProfile: 'https://www.thispersondoesnotexist.com/',
            screamer1:'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
        },
        fontFamily: 'Comic Sans MS',
        customFont: '',
        navbarColor: '#213C70',
        textsToHide: ['Recursos y manuales', 'ADD', 'Política de privacidad'],
        urlsToHide: ['add.unizar.es', 'privacidad', 'recursos', 'manuales'],
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        },
        enableAutoTheme: false,
        selectors: {
            navbar: '.navbar .nav-link, .navbar .dropdown-toggle, .navbar a',
            dropdowns: '.dropdown-menu .dropdown-item, .nav-item',
            backgroundElements: ['.rounded.list-image.mw-100', '.summary-image.rounded.mw-100', '.card-img-top'],
            pdfIcons: 'img[src*="theme/image.php/boost_union/core"][src*="/f/pdf"]',
            userPictures: 'img.userpicture',
            logo: 'img.logo',
            banner: '#themeboostunioninfobanner1'
        }
    };

    // Configuración actual (será cargada desde storage)
    let currentConfig = { ...DEFAULT_CONFIG };

    // Cache para elementos ya procesados
    const processedElements = new WeakSet();

    // Flag para evitar ejecuciones múltiples
    let isInitialized = false;
    let styleElement = null;

    // Cargar configuración desde el almacenamiento
    async function loadConfig() {
        try {
            // Para extensiones del navegador
            if (typeof browser !== 'undefined' && browser.storage) {
                const result = await browser.storage.sync.get('moodleConfig');
                return result.moodleConfig || DEFAULT_CONFIG;
            }
            // Para Chrome extensions API
            else if (typeof chrome !== 'undefined' && chrome.storage) {
                return new Promise((resolve) => {
                    chrome.storage.sync.get('moodleConfig', (result) => {
                        resolve(result.moodleConfig || DEFAULT_CONFIG);
                    });
                });
            }
            // Fallback a configuración por defecto
            else {
                return DEFAULT_CONFIG;
            }
        } catch (error) {
            console.error('Error loading config:', error);
            return DEFAULT_CONFIG;
        }
    }

    // Lista de temas disponibles para auto-tema (excluyendo 'custom' y 'moodle')
    const AVAILABLE_THEMES = [
        'default',
        'dark',
        'bar-atrio',
        'vaca',
        'psoe',
        'boykisser',
        'hatsune-miku',
        'doctor-house',
        'breaking-bad',
        'smiling-friends',
        'rick-morty-irl',
        'pipotam',
        'whatsapp'
    ];

    // Función para obtener un tema aleatorio
    function getRandomTheme() {
        if (AVAILABLE_THEMES.length === 0) {
            return 'default';
        }
        
        const randomIndex = Math.floor(Math.random() * AVAILABLE_THEMES.length);
        return AVAILABLE_THEMES[randomIndex];
    }


    // Aplicar estilos CSS personalizados
    function applyCustomStyles(config) {
        // Remover estilos anteriores si existen
        if (styleElement) {
            styleElement.remove();
        }

        const style = document.createElement('style');
        style.id = 'moodle-custom-styles';
        
        // Usar la fuente configurada solo si está habilitada y no está vacía
        let fontStyles = '';
        if (config.features.enableCustomFont && config.fontFamily && config.fontFamily.trim()) {
            fontStyles = `font-family: ${config.fontFamily};`;
        }
        
        // Usar imagen de fondo solo si no está vacía
        let backgroundStyles = '';
        if (config.images.background && config.images.background.trim()) {
            backgroundStyles = `
                background-image: url("${config.images.background}");
                background-repeat: repeat;`;
        }
        
        // Usar color personalizado de navbar si está configurado
        let navbarColorStyles = '';
        if (config.navbarColor && config.navbarColor.trim()) {
            navbarColorStyles = `background-color: ${config.navbarColor} !important;`;
        }
        
        // Estilos básicos (sin la opción 'liquid glass')
        let advancedNavbarStyles = (() => {
            function parseColor(str) {
                if (!str) return null;
                str = str.trim();
                // rgb/rgba
                const rgbMatch = str.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/i);
                if (rgbMatch) return { r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3] };
                // hex #rrggbb or #rgb
                const hexMatch = str.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
                if (hexMatch) {
                    let hex = hexMatch[1];
                    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
                    return {
                        r: parseInt(hex.slice(0, 2), 16),
                        g: parseInt(hex.slice(2, 4), 16),
                        b: parseInt(hex.slice(4, 6), 16)
                    };
                }
                return null;
            }

            function getNavbarBaseColor() {
                // Prefer explicit config.navbarColor, si no existe intentar leer el estilo computado
                if (config.navbarColor && config.navbarColor.trim()) return config.navbarColor.trim();
                const el = document.querySelector('.bg-primary') || document.querySelector('.navbar') || document.querySelector('.navbar.navbar-dark');
                if (!el) return null;
                return window.getComputedStyle(el).backgroundColor;
            }

            const base = getNavbarBaseColor();
            const rgb = parseColor(base);
            // contraste por luminancia: si luminancia alta -> texto oscuro, si baja -> texto claro
            let textColor = '#fff';
            if (rgb) {
                const L = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
                textColor = L > 0.6 ? '#111' : '#fff';
            } else {
                // fallback si no se puede determinar
                textColor = '#fff';
            }

            const shadow = textColor === '#fff' ? '0 1px 2px rgba(0,0,0,0.65)' : '0 1px 0 rgba(255,255,255,0.6)';
            const hoverBg = textColor === '#fff' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
            const activeBg = textColor === '#fff' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';

            // Scopear las reglas a .navbar para no romper otros elementos que compartan la clase .nav-link
            return `
                .navbar .nav-link {
                    color: ${textColor} !important;
                    text-shadow: ${shadow} !important;
                    border-radius: 6px !important;
                    padding: 8px 12px !important;
                    margin: 0 2px !important;
                    transition: background-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease !important;
                    /* Fondo semitransparente para asegurar contraste sobre imágenes */
                    background-color: rgba(255,255,255,0.03) !important;
                    backdrop-filter: blur(6px) saturate(120%) !important;
                    -webkit-backdrop-filter: blur(6px) saturate(120%) !important;
                }
                .navbar .nav-link:hover {
                    background-color: ${hoverBg} !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
                    color: ${textColor} !important;
                }
                .navbar .nav-link.active, .navbar .nav-link[aria-current="page"] {
                    background-color: ${activeBg} !important;
                    backdrop-filter: blur(8px) !important;
                    -webkit-backdrop-filter: blur(8px) !important;
                    border: 1px solid rgba(0,0,0,0.06) !important;
                    padding: 0.8rem 1.5rem !important;
                }`;
        })();
        
        style.textContent = `
            body {
                ${fontStyles}
                ${backgroundStyles}
            }
            .bg-primary {
                ${navbarColorStyles}
                ${config.images.navbarBg && config.images.navbarBg.trim() ? `
                background-image: url('${config.images.navbarBg}') !important;
                background-repeat: repeat !important;
                background-size: 10% !important;` : ''}
            }
            ${advancedNavbarStyles}
            #themeboostunioninfobanner2 {
                display: none !important;
            }
            .navbar.fixed-top {
                height: 71px;
            }
            .pagelayout-standard #page.drawers .main-inner, body.limitedwidth #page.drawers .main-inner {
                max-width: 1000px !important;
            }
            .navbar.navbar-dark.bg-dark .editmode-switch-form, .navbar.navbar-dark.bg-dark .editmode-switch-form label, .navbar.navbar-dark.bg-primary .editmode-switch-form, .navbar.navbar-dark.bg-primary .editmode-switch-form label {
                color: #000 !important;
            }
            .navbar.navbar-dark.bg-primary .nav-link .icon, .navbar.navbar-dark.bg-primary .nav-link a .icon, .navbar.navbar-dark.bg-primary .usermenu .dropdown-toggle {
                color: #3e3e3e !important;
            }
            .activityiconcontainer.content:not(.isbranded) .activityicon:not(.nofilter), .activityiconcontainer.content:not(.isbranded) .icon:not(.nofilter) {
                filter: hue-rotate(1.5turn);
            }
            .btn-footer-popover {
                display: none !important;
            }
            .maincalendar .calendarmonth {
                background-color: rgba(255, 255, 255, 0.75);
                ${config.images.calendarBg && config.images.calendarBg.trim() ? `
                background-image: url("${config.images.calendarBg}");
                background-blend-mode: color-burn;` : ''}
            }
            .custom-info-paragraph {
                font-weight: bold !important;
                color: #2c3e50 !important;
                font-size: 32px !important;
                margin: 10px 0 !important;
                padding: 8px !important;
                background-color: rgba(255, 255, 255, 0.8) !important;
                border-radius: 5px !important;
                text-align: center !important;
                background-size: contain;
                background-color: rgba(255, 255, 255, 0.75);
                ${config.images.screamer1 && config.images.screamer1.trim() ? `
                background-image: url("${config.images.screamer1}");
                background-blend-mode: color-burn;` : ''}
            }
        `;
        
        document.head.appendChild(style);
        styleElement = style;
    }

    // Función optimizada para ocultar elementos
    function hideNavbarElements(config) {
        if (!config.features.enableHideElements) return;

        const allElements = document.querySelectorAll(`${config.selectors.navbar}, ${config.selectors.dropdowns}`);
        const textsToHide = config.textsToHide;
        const urlsToHide = config.urlsToHide;

        allElements.forEach(element => {
            if (processedElements.has(element)) return;

            const text = element.textContent.trim();
            const href = element.getAttribute('href') || '';

            // Cache-friendly comparison - avoid recalculating .some() each iteration
            let shouldHide = false;
            for (let i = 0; i < textsToHide.length && !shouldHide; i++) {
                if (text.includes(textsToHide[i])) shouldHide = true;
            }
            if (!shouldHide) {
                for (let i = 0; i < urlsToHide.length && !shouldHide; i++) {
                    if (href.includes(urlsToHide[i])) shouldHide = true;
                }
            }

            if (shouldHide) {
                element.style.display = 'none';
                processedElements.add(element);
            }
        });
    }

    // Función optimizada para reemplazar imágenes
    function replaceImages(config) {
        if (!config.features.enableImageReplacements) return;

        const replacements = [
            {
                selector: config.selectors.pdfIcons,
                newSrc: config.images.iconoPDF,
                condition: null
            },
            {
                selector: config.selectors.userPictures,
                newSrc: config.images.userProfile,
                condition: (img) => img.src.includes('moodle.unizar.es/add/pluginfile.php')
            },
            {
                selector: config.selectors.logo,
                newSrc: config.images.logo,
                condition: null
            }
        ];

        replacements.forEach(({ selector, newSrc, condition }) => {
            // Solo aplicar reemplazo si la URL no está vacía
            if (!newSrc || !newSrc.trim()) return;
            
            const elements = document.querySelectorAll(selector);
            for (const img of elements) {
                if (processedElements.has(img)) continue;

                if (!condition || condition(img)) {
                    img.src = newSrc;
                    processedElements.add(img);
                }
            }
        });
    }

    // Función optimizada para aplicar fondos
    function applyCustomBackgrounds(config) {
        if (!config.features.enableBackgroundImages) return;
        
        // Solo aplicar fondos si la imagen no está vacía
        if (!config.images.tarjeta || !config.images.tarjeta.trim()) return;

        // Concatenar todos los selectores en una sola consulta
        const combinedSelector = config.selectors.backgroundElements.join(', ');
        const elements = document.querySelectorAll(combinedSelector);
        
        // Pre-crear el string de CSS para reutilizar
        const bgImage = `url("${config.images.tarjeta}")`;
        
        elements.forEach(element => {
            if (processedElements.has(element)) return;

            const style = element.style;
            style.backgroundImage = bgImage;
            style.backgroundSize = 'cover';
            style.backgroundPosition = 'center';
            style.backgroundRepeat = 'no-repeat';
            
            processedElements.add(element);
        });
    }

    // Función optimizada para añadir párrafo personalizado
    function addCustomParagraph(config) {
        if (!config.features.enableCustomParagraph) return;

        const bannerElement = document.querySelector(config.selectors.banner);
        if (!bannerElement || bannerElement.querySelector('.custom-info-paragraph')) return;

        const customParagraph = document.createElement('div');
        customParagraph.className = 'custom-info-paragraph';
        customParagraph.innerHTML = `
            <div>"MOODLE 2: Premium edition" HECHO POR Carlos Moreno</div>
            <br>
            <a href="https://github.com/carmoran0/MOOdleUnizarCSS/issues" target="_blank" class="custom-suggestions-link">
                Sugerencias y reportes
            </a>
        `;

        bannerElement.insertBefore(customParagraph, bannerElement.firstChild);
    }

    // Función para cargar el script de oneko
    function loadOnekoScript(config) {
        const existingOneko = document.getElementById('oneko');
        const existingScript = document.getElementById('oneko-script');

        // Si se ha deshabilitado, eliminar tanto el elemento como el script si existen
        if (!config.features.enableOneko) {
            if (existingOneko) existingOneko.remove();
            if (existingScript) existingScript.remove();
            return;
        }

        // Si el script ya existe
        if (existingScript) {
            // Si el div #oneko ya está presente, no hacemos nada
            if (existingOneko) return;

            // Si el script está pero el div falta (posible race), reinyectar el script para re-ejecutarlo
            existingScript.remove();
            // continuamos para inyectar uno nuevo
        }

        // Inyectar script nuevo
        const script = document.createElement('script');
        script.id = 'oneko-script';

        // Resolver la función getURL de runtime apropiada (chrome o browser)
        let getURL = null;
        if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.getURL === 'function') {
            getURL = chrome.runtime.getURL.bind(chrome.runtime);
        } else if (typeof browser !== 'undefined' && browser.runtime && typeof browser.runtime.getURL === 'function') {
            getURL = browser.runtime.getURL.bind(browser.runtime);
        }

        // Pasar la URL del GIF mediante dataset.cat cuando sea posible
        if (getURL) {
            try {
                script.dataset.cat = getURL('oneko.gif');
            } catch (e) {
                // ignore
            }
        }

        // Establecer la src del script usando la URL del runtime si existe, en caso contrario usar la ruta genérica
        script.src = getURL ? getURL('oneko.js') : 'oneko.js';
        document.head.appendChild(script);
    }

    // Función para aplicar todas las modificaciones de una vez
    function applyAllModifications(config = currentConfig) {
        requestAnimationFrame(() => {
            replaceImages(config);
            applyCustomBackgrounds(config);
            hideNavbarElements(config);
            addCustomParagraph(config);
            loadOnekoScript(config);
        });
    }

    // Función para actualizar toda la configuración
    function updateConfiguration(newConfig) {
        currentConfig = { ...DEFAULT_CONFIG, ...newConfig };
        
        // Limpiar elementos procesados para que se vuelvan a aplicar
        processedElements.clear = () => {};
        
        // Aplicar nuevos estilos
        applyCustomStyles(currentConfig);
        
        // Aplicar todas las modificaciones con la nueva configuración
        applyAllModifications(currentConfig);
        
        console.log('Configuración actualizada:', currentConfig);
    }

    // Observer más eficiente con debounce incorporado
    function setupDOMObserver() {
        let isObserving = false;
        let pendingChanges = false;

        const observer = new MutationObserver((mutations) => {
            if (isObserving) {
                pendingChanges = true;
                return;
            }

            const hasRelevantChanges = mutations.some(mutation => {
                if (mutation.type !== 'childList' || mutation.addedNodes.length === 0) return false;
                
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== Node.ELEMENT_NODE) continue;
                    if (node.matches?.('img, .nav-link, .navbar, .card-img-top')) return true;
                    if (node.querySelector?.('img, .nav-link, .navbar, .card-img-top')) return true;
                }
                return false;
            });

            if (hasRelevantChanges) {
                isObserving = true;
                pendingChanges = false;
                
                requestAnimationFrame(() => {
                    applyAllModifications();
                    isObserving = false;
                    
                    // Check if new changes arrived during processing
                    if (pendingChanges) {
                        pendingChanges = false;
                        requestAnimationFrame(() => applyAllModifications());
                    }
                });
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return observer;
    }

    // Escuchar mensajes de actualización de configuración
    function setupMessageListener() {
        // Para extensiones del navegador
        if (typeof browser !== 'undefined' && browser.runtime) {
            browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.action === 'updateConfig') {
                    updateConfiguration(message.config);
                    sendResponse({ success: true });
                    return true;
                }
            });
        }
        // Para Chrome extensions API
        else if (typeof chrome !== 'undefined' && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.action === 'updateConfig') {
                    updateConfiguration(message.config);
                    sendResponse({ success: true });
                    return true;
                }
            });
        }
    }

    // Función principal optimizada
    async function init() {
        if (isInitialized) return;
        isInitialized = true;

        console.log('Inicializando MOOdle Personalizado...');

        // Cargar configuración desde storage
        try {
            let savedConfig = await loadConfig();
            
            // Si el auto-tema está activado y el tema actual no coincide con el seleccionado
            // (esto puede pasar después de un refresh), forzar la aplicación del tema
            if (savedConfig.enableAutoTheme) {
                const randomThemeKey = getRandomTheme();
                console.log('Auto-tema activado. Solicitando cambio a tema aleatorio:', randomThemeKey);
                
                // Enviar mensaje a background script para cambiar el tema
                try {
                    if (typeof browser !== 'undefined' && browser.runtime) {
                        await browser.runtime.sendMessage({
                            action: 'applyRandomTheme',
                            theme: randomThemeKey
                        });
                    } else if (typeof chrome !== 'undefined' && chrome.runtime) {
                        await new Promise((resolve) => {
                            chrome.runtime.sendMessage({
                                action: 'applyRandomTheme',
                                theme: randomThemeKey
                            }, resolve);
                        });
                    }
                    
                    // Recargar la configuración después de cambiar el tema
                    savedConfig = await loadConfig();
                } catch (e) {
                    console.log('No se pudo cambiar el tema:', e);
                }
            }
            
            currentConfig = { ...DEFAULT_CONFIG, ...savedConfig };
            console.log('Configuración cargada:', currentConfig);
        } catch (error) {
            console.error('Error al cargar configuración, usando por defecto:', error);
            currentConfig = DEFAULT_CONFIG;
        }

        // Aplicar estilos CSS inmediatamente
        applyCustomStyles(currentConfig);

        // Configurar listener para mensajes de actualización
        setupMessageListener();

        // Aplicar modificaciones iniciales
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => applyAllModifications(currentConfig), { once: true });
        } else {
            applyAllModifications(currentConfig);
        }

        // Configurar observer solo después de la carga inicial
        setTimeout(() => {
            setupDOMObserver();
        }, 500);

        console.log('MOOdle Personalizado inicializado correctamente');
    }

    // Inicializar inmediatamente
    init();
})();