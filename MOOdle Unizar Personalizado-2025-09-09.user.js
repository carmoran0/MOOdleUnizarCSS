// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-29
// @description  Personaliza el aspecto de Moodle (Versión Optimizada)
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
            background: "https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/assets/default/peterIRL.png",
            navbarBg: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/assets/default/giggity.png',
            calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
            peter: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/assets/default/peter.jpg',
            iconoPDF: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension/assets/default/PETERRRRR.png',
            logo: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/mooodle.png',
            userProfile: 'https://www.thispersondoesnotexist.com/',
            screamer1:'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
        },
        fontFamily: 'Comic Sans MS',
        customFont: '',
        textsToHide: ['Recursos y manuales', 'ADD', 'Política de privacidad'],
        urlsToHide: ['add.unizar.es', 'privacidad', 'recursos', 'manuales'],
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true
        },
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

    // Aplicar estilos CSS personalizados
    function applyCustomStyles(config) {
        // Remover estilos anteriores si existen
        if (styleElement) {
            styleElement.remove();
        }

        const style = document.createElement('style');
        style.id = 'moodle-custom-styles';
        
        // Usar la fuente configurada
        const fontFamily = config.fontFamily || DEFAULT_CONFIG.fontFamily;
        
        style.textContent = `
            body {
                font-family: ${fontFamily};
                background-image: url("${config.images.background}");
                background-repeat: repeat;
            }
            .bg-primary {
                background-color: #c1c1c1 !important;
                background-image: url('${config.images.navbarBg}') !important;
                background-repeat: repeat !important;
                background-size: 10% !important;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
            }
            .nav-link {
                color: #000 !important;
                border-radius: 4px !important;
                padding: 8px 12px !important;
                margin: 0 2px !important;
                transition: all 0.3s ease !important;
            }
            #themeboostunioninfobanner2 {
                display: none !important;
            }
            .navbar.fixed-top {
                height: 71px;
            }
            .nav-link:hover {
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                background-color: rgba(255, 255, 255, 0.2) !important;
            }
            .nav-link.active, .nav-link[aria-current="page"] {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05)) !important;
                backdrop-filter: blur(15px) !important;
                -webkit-backdrop-filter: blur(15px) !important;
                border-radius: 50px !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                padding: 0.8rem 1.5rem !important;
                overflow: hidden !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
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
                background-image: url("${config.images.calendarBg}");
                background-blend-mode: color-burn;
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
                background-image: url("${config.images.screamer1}");
                background-blend-mode: color-burn;
            }
        `;
        
        document.head.appendChild(style);
        styleElement = style;
    }

    // Función optimizada para ocultar elementos
    function hideNavbarElements(config) {
        if (!config.features.enableHideElements) return;

        const allElements = document.querySelectorAll(`${config.selectors.navbar}, ${config.selectors.dropdowns}`);

        allElements.forEach(element => {
            if (processedElements.has(element)) return;

            const text = element.textContent.trim();
            const href = element.getAttribute('href') || '';

            const shouldHide = config.textsToHide.some(hideText => text.includes(hideText)) ||
                             config.urlsToHide.some(hideUrl => href.includes(hideUrl));

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
                elements: document.querySelectorAll(config.selectors.pdfIcons),
                newSrc: config.images.iconoPDF,
                condition: null
            },
            {
                elements: document.querySelectorAll(config.selectors.userPictures),
                newSrc: config.images.userProfile,
                condition: (img) => img.src.includes('moodle.unizar.es/add/pluginfile.php')
            },
            {
                elements: document.querySelectorAll(config.selectors.logo),
                newSrc: config.images.logo,
                condition: null
            }
        ];

        replacements.forEach(({ elements, newSrc, condition }) => {
            elements.forEach(img => {
                if (processedElements.has(img)) return;

                if (!condition || condition(img)) {
                    img.src = newSrc;
                    processedElements.add(img);
                }
            });
        });
    }

    // Función optimizada para aplicar fondos
    function applyCustomBackgrounds(config) {
        if (!config.features.enableBackgroundImages) return;

        config.selectors.backgroundElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (processedElements.has(element)) return;

                Object.assign(element.style, {
                    backgroundImage: `url("${config.images.peter}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                });
                processedElements.add(element);
            });
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

    // Función para aplicar todas las modificaciones de una vez
    function applyAllModifications(config = currentConfig) {
        requestAnimationFrame(() => {
            replaceImages(config);
            applyCustomBackgrounds(config);
            hideNavbarElements(config);
            addCustomParagraph(config);
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

        const observer = new MutationObserver((mutations) => {
            if (isObserving) return;
            isObserving = true;

            const hasRelevantChanges = mutations.some(mutation =>
                mutation.type === 'childList' &&
                mutation.addedNodes.length > 0 &&
                Array.from(mutation.addedNodes).some(node =>
                    node.nodeType === Node.ELEMENT_NODE &&
                    (node.matches?.('img, .nav-link, .navbar, .card-img-top') ||
                     node.querySelector?.('img, .nav-link, .navbar, .card-img-top'))
                )
            );

            if (hasRelevantChanges) {
                requestAnimationFrame(() => {
                    applyAllModifications();
                    isObserving = false;
                });
            } else {
                isObserving = false;
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
            const savedConfig = await loadConfig();
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