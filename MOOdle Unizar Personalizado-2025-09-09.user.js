// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-15
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

    // Configuración centralizada
    const CONFIG = {
        images: {
            background: "https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peterIRL.png",
            navbarBg: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/giggity.png',
            calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
            peter: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peter.jpg',
            peterPng: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/PETERRRRR.png',
            logo: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/mooodle.png',
            userProfile: 'https://www.thispersondoesnotexist.com/'
        },
        selectors: {
            navbar: '.navbar .nav-link, .navbar .dropdown-toggle, .navbar a',
            dropdowns: '.dropdown-menu .dropdown-item, .nav-item',
            backgroundElements: ['.rounded.list-image.mw-100', '.summary-image.rounded.mw-100', '.card-img-top'],
            pdfIcons: 'img[src*="theme/image.php/boost_union/core"][src*="/f/pdf"]',
            userPictures: 'img.userpicture',
            logo: 'img.logo',
            banner: '#themeboostunioninfobanner1'
        },
        textsToHide: ['Recursos y manuales', 'ADD', 'Política de privacidad'],
        urlsToHide: ['add.unizar.es', 'privacidad', 'recursos', 'manuales']
    };

    // Función utilitaria para esperar elementos
    function waitForElement(selector, callback, timeout = 5000) {
        const startTime = Date.now();
        function check() {
            const element = document.querySelector(selector);
            if (element) {
                callback(element);
            } else if (Date.now() - startTime < timeout) {
                setTimeout(check, 100);
            }
        }
        check();
    }

    // Aplicar estilos CSS personalizados
    function applyCustomStyles() {
        if (document.querySelector('#moodle-custom-styles')) return;

        const style = document.createElement('style');
        style.id = 'moodle-custom-styles';
        style.textContent = `
            body {
                font-family: Comic Sans MS;
                background-image: url("${CONFIG.images.background}");
                background-repeat: repeat;
            }
            .bg-primary {
                background-color: #c1c1c1 !important;
                background-image: url('${CONFIG.images.navbarBg}') !important;
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
                background-image: url("${CONFIG.images.calendarBg}");
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
            }
        `;
        document.head.appendChild(style);
    }

    // Función unificada para ocultar elementos de navegación
    function hideNavbarElements() {
        const allElements = document.querySelectorAll(`${CONFIG.selectors.navbar}, ${CONFIG.selectors.dropdowns}`);

        allElements.forEach(element => {
            const text = element.textContent.trim();
            const href = element.getAttribute('href') || '';

            // Verificar texto
            const shouldHideByText = CONFIG.textsToHide.some(hideText => text.includes(hideText));

            // Verificar URL
            const shouldHideByUrl = CONFIG.urlsToHide.some(hideUrl => href.includes(hideUrl));

            if (shouldHideByText || shouldHideByUrl) {
                element.style.display = 'none';
                console.log(`Elemento oculto: ${text || href}`);
            }
        });
    }

    // Función unificada para reemplazar imágenes
    function replaceImages() {
        const replacements = [
            {
                selector: CONFIG.selectors.pdfIcons,
                newSrc: CONFIG.images.peterPng,
                attribute: 'data-pdf-replaced',
                logMessage: 'Icono PDF reemplazado'
            },
            {
                selector: CONFIG.selectors.userPictures,
                newSrc: CONFIG.images.userProfile,
                attribute: 'data-user-replaced',
                logMessage: 'Imagen de usuario reemplazada',
                condition: (img) => img.src.includes('moodle.unizar.es/add/pluginfile.php')
            },
            {
                selector: CONFIG.selectors.logo,
                newSrc: CONFIG.images.logo,
                attribute: 'data-logo-replaced',
                logMessage: 'Logo reemplazado'
            }
        ];

        replacements.forEach(({ selector, newSrc, attribute, logMessage, condition }) => {
            const images = document.querySelectorAll(selector);
            images.forEach(img => {
                if (!img.hasAttribute(attribute) && (!condition || condition(img))) {
                    img.src = newSrc;
                    img.setAttribute(attribute, 'true');
                    console.log(logMessage);
                }
            });
        });
    }

    // Función para aplicar fondos personalizados
    function applyCustomBackgrounds() {
        CONFIG.selectors.backgroundElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.hasAttribute('data-custom-bg-applied')) {
                    Object.assign(element.style, {
                        backgroundImage: `url("${CONFIG.images.peter}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    });
                    element.setAttribute('data-custom-bg-applied', 'true');
                    console.log(`Fondo personalizado aplicado: ${selector}`);
                }
            });
        });
    }

    // Función para añadir párrafo personalizado
    function addCustomParagraph() {
        waitForElement(CONFIG.selectors.banner, (bannerElement) => {
            if (!bannerElement.querySelector('.custom-info-paragraph')) {
                const customParagraph = document.createElement('div');
                customParagraph.className = 'custom-info-paragraph';

                const titleText = document.createElement('div');
                titleText.textContent = '"MOODLE 2: Premium edition" HECHO POR Carlos Moreno';

                const suggestionsLink = document.createElement('a');
                suggestionsLink.href = 'https://github.com/carmoran0/MOOdleUnizarCSS/issues';
                suggestionsLink.target = '_blank';
                suggestionsLink.className = 'custom-suggestions-link';
                suggestionsLink.textContent = 'Sugerencias y reportes';

                customParagraph.appendChild(titleText);
                customParagraph.appendChild(document.createElement('br'));
                customParagraph.appendChild(suggestionsLink);

                bannerElement.insertBefore(customParagraph, bannerElement.firstChild);
                console.log('Párrafo personalizado con enlace de sugerencias añadido');
            }
        });
    }

    // Función para aplicar todas las modificaciones
    function applyAllModifications() {
        replaceImages();
        applyCustomBackgrounds();
        hideNavbarElements();
        addCustomParagraph();
    }

    // Observer optimizado
    function setupDOMObserver() {
        let timeoutId;
        const observer = new MutationObserver(() => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(applyAllModifications, 100);
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return observer;
    }

    // Función principal
    function init() {
        applyCustomStyles();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyAllModifications);
        } else {
            applyAllModifications();
        }

        setupDOMObserver();
    }

    // Inicializar
    init();
})();