// ==UserScript==
// @name         MOOdle Unizar Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-10-16
// @description  Personaliza el aspecto de Moodle Unizar con temas y opciones personalizables
// @author       Calo
// @match        https://moodle.unizar.es/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unizar.es
// @updateURL    https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/MOOdle-Unizar-Personalizado.user.js
// @downloadURL  https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/MOOdle-Unizar-Personalizado.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Base URL para los assets de GitHub
    const GITHUB_BASE = 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/fextension';
    const GITHUB_ASSETS = 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets';

    // Temas predefinidos (adaptados de la extensión)
    const PREDEFINED_THEMES = {
        default: {
            name: 'Family guy claro (default)',
            images: {
                background: `${GITHUB_BASE}/assets/default/peterIRL.png`,
                navbarBg: `${GITHUB_BASE}/assets/default/giggity.png`,
                calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
                tarjeta: 'https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/fextension/assets/default/peter.jpg?raw=true',
                iconoPDF: `${GITHUB_BASE}/assets/default/PETERRRRR.png`,
                logo: `${GITHUB_ASSETS}/mooodle.png`,
                userProfile: 'https://www.thispersondoesnotexist.com/',
                screamer1:'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
            },
            fontFamily: 'Comic Sans MS',
            navbarColor: '#213C70',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        dark: {
            name: 'Family guy oscuro',
            images: {
                background: `${GITHUB_BASE}/assets/dark/background.png`,
                navbarBg: `${GITHUB_BASE}/assets/dark/clevnavb.jpeg`,
                calendarBg: `${GITHUB_BASE}/assets/dark/calendar.png`,
                tarjeta: 'https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/fextension/assets/dark/cocje.png?raw=true',
                iconoPDF: `${GITHUB_BASE}/assets/dark/pdf.png`,
                logo: `${GITHUB_ASSETS}/mooodle.png`,
                userProfile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                screamer1: ''
            },
            fontFamily: 'Comic Sans MS',
            navbarColor: '#2c3e50',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: false
            }
        },
        moodle: {
            name: 'Moodle Base',
            images: {
                background: '',
                navbarBg: '',
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: '',
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#213C70',
            features: {
                enableBackgroundImages: false,
                enableImageReplacements: false,
                enableHideElements: false,
                enableCustomParagraph: true,
                enableCustomFont: false,
                enableOneko: false
            }
        },
        'bar-atrio': {
            name: 'bar atrio',
            images: {
                background: `${GITHUB_BASE}/assets/atrio/cocteles.png`,
                navbarBg: '',
                calendarBg: '',
                tarjeta: '',
                iconoPDF: `${GITHUB_BASE}/assets/atrio/chupitos.png`,
                logo: `${GITHUB_BASE}/assets/atrio/logo.png`,
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#702121',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: false,
                enableOneko: true
            }
        },
        'vaca': {
            name: 'vaca',
            images: {
                background: `${GITHUB_BASE}/assets/vaca/vacapatin.jpeg`,
                navbarBg: `${GITHUB_BASE}/assets/vaca/navbar.jpeg`,
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/vaca/logo.JPG`,
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#213C70',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'psoe': {
            name: 'psoe',
            images: {
                background: `${GITHUB_BASE}/assets/pesoe/background.png`,
                navbarBg: '',
                calendarBg: '',
                tarjeta: `${GITHUB_BASE}/assets/pesoe/fondo.jpeg`,
                iconoPDF: 'https://s1.qwant.com/thumbr/474x474/3/3/1a5ac4a6d12c5508b4d3b67e84487120de463b4ab4c1e5dd307a887c3556f6/OIP.k0deVH9kL4UdzKpGOPX3qwHaHa.jpg?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.k0deVH9kL4UdzKpGOPX3qwHaHa%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0',
                logo: `${GITHUB_BASE}/assets/pesoe/aragon_horizontal-linea-blanco.png`,
                userProfile: 'https://s1.qwant.com/thumbr/474x474/3/3/1a5ac4a6d12c5508b4d3b67e84487120de463b4ab4c1e5dd307a887c3556f6/OIP.k0deVH9kL4UdzKpGOPX3qwHaHa.jpg?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.k0deVH9kL4UdzKpGOPX3qwHaHa%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#E20025',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'boykisser': {
            name: 'boykisser',
            images: {
                background: `${GITHUB_BASE}/assets/boykisser/navbar.gif`,
                navbarBg: `${GITHUB_BASE}/assets/boykisser/navbar.jpeg`,
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/boykisser/logo.jpeg`,
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }   
        },
        'hatsune-miku': {
            name: 'hatsune miku',
            images: {
                background: `${GITHUB_BASE}/assets/miku/background.jpeg`,
                navbarBg: '',
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/miku/logo.svg`,
                userProfile: `${GITHUB_BASE}/assets/miku/pfp.jpeg`,
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#86CECB',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'doctor-house': {
            name: 'doctor house',
            images: {
                background: `${GITHUB_BASE}/assets/house/background.png`,
                navbarBg: `${GITHUB_BASE}/assets/house/navbar.jpeg`,
                calendarBg: `${GITHUB_BASE}/assets/house/calendar.jpeg`,
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/house/logo.jpeg`,
                userProfile: `${GITHUB_BASE}/assets/house/pfp.jpeg`,
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#213C70',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'breaking-bad': {
            name: 'breaking bad',
            images: {
                background: `${GITHUB_BASE}/assets/breakingbad/fondo.png`,
                navbarBg: `${GITHUB_BASE}/assets/breakingbad/navbar.png`,
                calendarBg: '',
                tarjeta: `${GITHUB_BASE}/assets/breakingbad/tarjeta.png`,
                iconoPDF: `${GITHUB_BASE}/assets/breakingbad/pdf.png`,
                logo: `${GITHUB_BASE}/assets/breakingbad/logo.svg`,
                userProfile: `${GITHUB_BASE}/assets/breakingbad/pfp.png`,
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#213C70',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'smiling-friends': {
            name: 'smiling friends',
            images: {
                background: `${GITHUB_BASE}/assets/smiling/fondo.gif`,
                navbarBg: `${GITHUB_BASE}/assets/smiling/navbar.png`,
                calendarBg: '',
                tarjeta: `${GITHUB_BASE}/assets/smiling/tarjeta.png`,
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/smiling/logo.png`,
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'rick-morty-irl': {
            name: 'rick y morty irl',
            images: {
                background: `${GITHUB_BASE}/assets/rym/fondo.png`,
                navbarBg: `${GITHUB_BASE}/assets/rym/navbar.png`,
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/rym/logo.png`,
                userProfile: `${GITHUB_BASE}/assets/rym/rickkkk.png`,
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'pipotam': {
            name: 'pipotam',
            images: {
                background: `${GITHUB_BASE}/assets/pipotam/fondo.gif`,
                navbarBg: `${GITHUB_BASE}/assets/pipotam/navbar.png`,
                calendarBg: `${GITHUB_BASE}/assets/pipotam/fondo.gif`,
                tarjeta: `${GITHUB_BASE}/assets/pipotam/fondo.gif`,
                iconoPDF: `${GITHUB_BASE}/assets/pipotam/fondo.gif`,
                logo: `${GITHUB_BASE}/assets/pipotam/logo.gif`,
                userProfile:`${GITHUB_BASE}/assets/pipotam/fondo.gif`,
                screamer1: `${GITHUB_BASE}/assets/pipotam/fondo.gif`
            },
            fontFamily: '',
            navbarColor: '',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        },
        'whatsapp': {
            name: 'whatsapp',
            images: {
                background: '',
                navbarBg: '',
                calendarBg: '',
                tarjeta: '',
                iconoPDF: '',
                logo: `${GITHUB_BASE}/assets/whatsapp/Digital_Inline_White.svg`,
                userProfile: '',
                screamer1: ''
            },
            fontFamily: '',
            navbarColor: '#25D366',
            features: {
                enableBackgroundImages: true,
                enableImageReplacements: true,
                enableHideElements: true,
                enableCustomParagraph: true,
                enableCustomFont: true,
                enableOneko: true
            }
        }
    };

    // Configuración por defecto
    const DEFAULT_CONFIG = {
        selectedTheme: 'default',
        images: PREDEFINED_THEMES.default.images,
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

    // Configuración actual
    let currentConfig = { ...DEFAULT_CONFIG };

    // Cache para elementos ya procesados
    const processedElements = new WeakSet();

    // Flag para evitar ejecuciones múltiples
    let isInitialized = false;
    let styleElement = null;

    // Cargar configuración desde GM_getValue
    async function loadConfig() {
        try {
            const savedConfigStr = GM_getValue('moodleConfig', null);
            if (savedConfigStr) {
                const savedConfig = JSON.parse(savedConfigStr);
                return { ...DEFAULT_CONFIG, ...savedConfig };
            }
            return DEFAULT_CONFIG;
        } catch (error) {
            console.error('Error loading config:', error);
            return DEFAULT_CONFIG;
        }
    }

    // Guardar configuración
    function saveConfig(config) {
        try {
            GM_setValue('moodleConfig', JSON.stringify(config));
            return true;
        } catch (error) {
            console.error('Error saving config:', error);
            return false;
        }
    }

    // Lista de temas disponibles para auto-tema
    const AVAILABLE_THEMES = Object.keys(PREDEFINED_THEMES).filter(
        key => key !== 'moodle' && key !== 'custom'
    );

    // Función para obtener un tema aleatorio
    function getRandomTheme() {
        if (AVAILABLE_THEMES.length === 0) return 'default';
        const randomIndex = Math.floor(Math.random() * AVAILABLE_THEMES.length);
        return AVAILABLE_THEMES[randomIndex];
    }

    // Aplicar estilos CSS personalizados
    function applyCustomStyles(config) {
        if (styleElement) {
            styleElement.remove();
        }

        const style = document.createElement('style');
        style.id = 'moodle-custom-styles';
        
        let fontStyles = '';
        if (config.features.enableCustomFont && config.fontFamily && config.fontFamily.trim()) {
            fontStyles = `font-family: ${config.fontFamily};`;
        }
        
        let backgroundStyles = '';
        if (config.images.background && config.images.background.trim()) {
            backgroundStyles = `
                background-image: url("${config.images.background}");
                background-repeat: repeat;`;
        }
        
        let navbarColorStyles = '';
        if (config.navbarColor && config.navbarColor.trim()) {
            navbarColorStyles = `background-color: ${config.navbarColor} !important;`;
        }
        
        let advancedNavbarStyles = (() => {
            function parseColor(str) {
                if (!str) return null;
                str = str.trim();
                const rgbMatch = str.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/i);
                if (rgbMatch) return { r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3] };
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
                if (config.navbarColor && config.navbarColor.trim()) return config.navbarColor.trim();
                const el = document.querySelector('.bg-primary') || document.querySelector('.navbar');
                if (!el) return null;
                return window.getComputedStyle(el).backgroundColor;
            }

            const base = getNavbarBaseColor();
            const rgb = parseColor(base);
            let textColor = '#fff';
            if (rgb) {
                const L = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
                textColor = L > 0.6 ? '#111' : '#fff';
            }

            const shadow = textColor === '#fff' ? '0 1px 2px rgba(0,0,0,0.65)' : '0 1px 0 rgba(255,255,255,0.6)';
            const hoverBg = textColor === '#fff' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
            const activeBg = textColor === '#fff' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';

            return `
                .navbar .nav-link {
                    color: ${textColor} !important;
                    text-shadow: ${shadow} !important;
                    border-radius: 6px !important;
                    padding: 8px 12px !important;
                    margin: 0 2px !important;
                    transition: background-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease !important;
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

    // Función para ocultar elementos
    function hideNavbarElements(config) {
        if (!config.features.enableHideElements) return;

        const allElements = document.querySelectorAll(`${config.selectors.navbar}, ${config.selectors.dropdowns}`);
        const textsToHide = config.textsToHide;
        const urlsToHide = config.urlsToHide;

        allElements.forEach(element => {
            if (processedElements.has(element)) return;

            const text = element.textContent.trim();
            const href = element.getAttribute('href') || '';

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

    // Función para reemplazar imágenes
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

    // Función para aplicar fondos personalizados
    function applyCustomBackgrounds(config) {
        if (!config.features.enableBackgroundImages) return;
        
        if (!config.images.tarjeta || !config.images.tarjeta.trim()) return;

        const combinedSelector = config.selectors.backgroundElements.join(', ');
        const elements = document.querySelectorAll(combinedSelector);
        
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

    // Función para añadir párrafo personalizado
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

        if (!config.features.enableOneko) {
            if (existingOneko) existingOneko.remove();
            if (existingScript) existingScript.remove();
            return;
        }

        if (existingScript) {
            if (existingOneko) return;
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'oneko-script';
        script.src = `${GITHUB_BASE}/oneko.js`;
        script.dataset.cat = `${GITHUB_BASE}/oneko.gif`;
        document.head.appendChild(script);
    }

    // Función para aplicar todas las modificaciones
    function applyAllModifications(config = currentConfig) {
        requestAnimationFrame(() => {
            replaceImages(config);
            applyCustomBackgrounds(config);
            hideNavbarElements(config);
            addCustomParagraph(config);
            loadOnekoScript(config);
        });
    }

    // Observer para detectar cambios en el DOM
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

    // Menú de configuración de Tampermonkey
    function setupConfigMenu() {
        GM_registerMenuCommand('⚙️ Seleccionar Tema', () => {
            const themeName = prompt(
                'Temas disponibles:\n' +
                Object.entries(PREDEFINED_THEMES).map(([key, theme]) => `- ${key}: ${theme.name}`).join('\n') +
                '\n\nEscribe el nombre del tema:',
                currentConfig.selectedTheme
            );
            
            if (themeName && PREDEFINED_THEMES[themeName]) {
                const theme = PREDEFINED_THEMES[themeName];
                currentConfig = {
                    ...currentConfig,
                    selectedTheme: themeName,
                    images: { ...theme.images },
                    fontFamily: theme.fontFamily,
                    navbarColor: theme.navbarColor,
                    features: { ...theme.features }
                };
                saveConfig(currentConfig);
                location.reload();
            }
        });

        GM_registerMenuCommand('🎲 Activar/Desactivar Tema Aleatorio', () => {
            currentConfig.enableAutoTheme = !currentConfig.enableAutoTheme;
            saveConfig(currentConfig);
            alert(`Tema aleatorio ${currentConfig.enableAutoTheme ? 'activado' : 'desactivado'}. Recarga la página para aplicar cambios.`);
        });

        GM_registerMenuCommand('🔄 Restaurar Configuración', () => {
            if (confirm('¿Estás seguro de que quieres restaurar la configuración por defecto?')) {
                currentConfig = { ...DEFAULT_CONFIG };
                saveConfig(currentConfig);
                location.reload();
            }
        });

        GM_registerMenuCommand('🐱 Activar/Desactivar Oneko', () => {
            currentConfig.features.enableOneko = !currentConfig.features.enableOneko;
            saveConfig(currentConfig);
            alert(`Oneko ${currentConfig.features.enableOneko ? 'activado' : 'desactivado'}. Recarga la página para aplicar cambios.`);
        });
    }

    // Función principal
    async function init() {
        if (isInitialized) return;
        isInitialized = true;

        console.log('Inicializando MOOdle Unizar Personalizado...');

        try {
            let savedConfig = await loadConfig();
            
            // Si auto-tema está activado, seleccionar tema aleatorio
            if (savedConfig.enableAutoTheme) {
                const randomThemeKey = getRandomTheme();
                const theme = PREDEFINED_THEMES[randomThemeKey];
                
                console.log('Auto-tema activado. Aplicando tema:', randomThemeKey);
                
                savedConfig = {
                    ...savedConfig,
                    selectedTheme: randomThemeKey,
                    images: { ...theme.images },
                    fontFamily: theme.fontFamily,
                    navbarColor: theme.navbarColor,
                    features: { ...theme.features }
                };
            }
            
            currentConfig = { ...DEFAULT_CONFIG, ...savedConfig };
            console.log('Configuración cargada:', currentConfig);
        } catch (error) {
            console.error('Error al cargar configuración:', error);
            currentConfig = DEFAULT_CONFIG;
        }

        // Aplicar estilos CSS inmediatamente
        applyCustomStyles(currentConfig);

        // Setup menu de configuración
        setupConfigMenu();

        // Aplicar modificaciones iniciales
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => applyAllModifications(currentConfig), { once: true });
        } else {
            applyAllModifications(currentConfig);
        }

        // Configurar observer después de la carga inicial
        setTimeout(() => {
            setupDOMObserver();
        }, 500);

        console.log('MOOdle Unizar Personalizado inicializado correctamente');
    }

    // Inicializar
    init();
})();
