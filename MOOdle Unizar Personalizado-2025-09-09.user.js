// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-09
// @description  Personaliza el aspecto de Moodle
// @author       Calo
// @match        https://moodle.unizar.es/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unizar.es
// @updateURL    https://github.com/carmoran0/MOOdleUnizarCSS/raw/refs/heads/main/MOOdle%20Unizar%20Personalizado-2025-09-09.user.js
// @downloadURL    https://github.com/carmoran0/MOOdleUnizarCSS/raw/refs/heads/main/MOOdle%20Unizar%20Personalizado-2025-09-09.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para esperar a que el DOM esté listo
    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else {
            setTimeout(() => waitForElement(selector, callback), 100);
        }
    }

    // Aplicar estilos CSS personalizados
    function applyCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
            body {
                font-family: Comic Sans MS;
                background-color:#99ffaa;
                background-image:
                    radial-gradient(at 12% 87%, hsla(222,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 33% 40%, hsla(110,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 77% 77%, hsla(266,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 77% 70%, hsla(231,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 72% 86%, hsla(324,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 51% 29%, hsla(225,65%,83%,1) 0px, transparent 50%),
                    radial-gradient(at 19% 19%, hsla(354,65%,83%,1) 0px, transparent 50%);
            }
            .bg-primary {
                background-color: #c1c1c1 !important;
                background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/abstract-seamless-pattern-with-cow-spots-vector.jpg') !important;
                background-repeat: repeat-x !important;
                background-size: 50% !important;
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
            .navbar.fixed-top{
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
                max-width: none !important;
            }
            .navbar.navbar-dark.bg-dark .editmode-switch-form, .navbar.navbar-dark.bg-dark .editmode-switch-form label, .navbar.navbar-dark.bg-primary .editmode-switch-form, .navbar.navbar-dark.bg-primary .editmode-switch-form label {
            color: #000 !important;
            }
            .navbar.navbar-dark.bg-primary .nav-link .icon, .navbar.navbar-dark.bg-primary .nav-link a .icon, .navbar.navbar-dark.bg-primary .usermenu .dropdown-toggle {
            color: #3e3e3e !important;
            }
            /* Estilos para el párrafo personalizado */
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

        // Reemplazar el logo
        function replaceLogo() {
            waitForElement('img.logo', function(logoElement) {
                // Opción 1: Usar una URL de imagen online
                logoElement.src = 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/mooodle.png';
                console.log('Logo encontrado, listo para reemplazar');
                console.log('Agrega tu imagen en base64 o URL en la línea correspondiente');
            });
        }

        // Función para añadir párrafo personalizado al banner de información
        function addCustomParagraph() {
            waitForElement('#themeboostunioninfobanner1', function(bannerElement) {
                // Verificar si ya se añadió el párrafo para evitar duplicados
                if (!bannerElement.querySelector('.custom-info-paragraph')) {
                    const customParagraph = document.createElement('p');
                    customParagraph.className = 'custom-info-paragraph';
                    customParagraph.textContent = '"MOODLE 2: Premium edition" HECHO POR Carlos Moreno';

                    // Añadir el párrafo al principio del banner
                    bannerElement.insertBefore(customParagraph, bannerElement.firstChild);

                    console.log('Párrafo personalizado añadido al banner de información');
                }
            });
        }

        // Función principal
        function init() {
            // Aplicar estilos cuando el DOM esté listo
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    applyCustomStyles();
                    addCustomParagraph();
                });
            } else {
                applyCustomStyles();
                addCustomParagraph();
            }

            // Reemplazar el logo
            replaceLogo();

            // También observar cambios dinámicos en el DOM
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.addedNodes.length > 0) {
                        replaceLogo();
                        addCustomParagraph();
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        // Inicializar el script
        init();
    })();