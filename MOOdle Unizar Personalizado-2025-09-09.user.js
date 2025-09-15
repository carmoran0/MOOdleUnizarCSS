// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-15-optimized
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

    // Configuración centralizada
    const CONFIG = {
        images: {
            background: "https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peterIRL.png",
            navbarBg: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/giggity.png',
            calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
            peter: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peter.jpg',
            peterPng: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/PETERRRRR.png',
            logo: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/mooodle.png',
            userProfile: 'https://www.thispersondoesnotexist.com/',
            screamer1:'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
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

    // Cache para elementos ya procesados
    const processedElements = new WeakSet();

    // Flag para evitar ejecuciones múltiples
    let isInitialized = false;

    // Aplicar estilos CSS personalizados (solo una vez)
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
            .custom-info-paragraph {
  background-size: contain;
                background-color: rgba(255, 255, 255, 0.75);
                background-image: url("${CONFIG.images.screamer1}");
                background-blend-mode: color-burn;
}
        `;
        document.head.appendChild(style);
    }

    // Función optimizada para ocultar elementos (usando delegación de eventos)
    function hideNavbarElements() {
        // Crear un único selector combinado
        const allElements = document.querySelectorAll(`${CONFIG.selectors.navbar}, ${CONFIG.selectors.dropdowns}`);

        // Usar DocumentFragment para operaciones batch
        allElements.forEach(element => {
            if (processedElements.has(element)) return;

            const text = element.textContent.trim();
            const href = element.getAttribute('href') || '';

            const shouldHide = CONFIG.textsToHide.some(hideText => text.includes(hideText)) ||
                             CONFIG.urlsToHide.some(hideUrl => href.includes(hideUrl));

            if (shouldHide) {
                element.style.display = 'none';
                processedElements.add(element);
            }
        });
    }

    // Función optimizada para reemplazar imágenes
    function replaceImages() {
        const replacements = [
            {
                elements: document.querySelectorAll(CONFIG.selectors.pdfIcons),
                newSrc: CONFIG.images.peterPng,
                condition: null
            },
            {
                elements: document.querySelectorAll(CONFIG.selectors.userPictures),
                newSrc: CONFIG.images.userProfile,
                condition: (img) => img.src.includes('moodle.unizar.es/add/pluginfile.php')
            },
            {
                elements: document.querySelectorAll(CONFIG.selectors.logo),
                newSrc: CONFIG.images.logo,
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
    function applyCustomBackgrounds() {
        CONFIG.selectors.backgroundElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (processedElements.has(element)) return;

                Object.assign(element.style, {
                    backgroundImage: `url("${CONFIG.images.peter}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                });
                processedElements.add(element);
            });
        });
    }

    // Función optimizada para añadir párrafo personalizado
    function addCustomParagraph() {
        const bannerElement = document.querySelector(CONFIG.selectors.banner);
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
    function applyAllModifications() {
        // Usar requestAnimationFrame para mejor rendimiento
        requestAnimationFrame(() => {
            replaceImages();
            applyCustomBackgrounds();
            hideNavbarElements();
            addCustomParagraph();
        });
    }

    // Observer más eficiente con debounce incorporado
    function setupDOMObserver() {
        let isObserving = false;

        const observer = new MutationObserver((mutations) => {
            if (isObserving) return;
            isObserving = true;

            // Solo procesar si hay cambios relevantes
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

    // Función principal optimizada
    function init() {
        if (isInitialized) return;
        isInitialized = true;

        // Aplicar estilos CSS inmediatamente
        applyCustomStyles();

        // Aplicar modificaciones iniciales
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyAllModifications, { once: true });
        } else {
            applyAllModifications();
        }

        // Configurar observer solo después de la carga inicial
        setTimeout(() => {
            setupDOMObserver();
        }, 500);
    }

    // Inicializar inmediatamente
    init();
})();