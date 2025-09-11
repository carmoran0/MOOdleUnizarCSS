// ==UserScript==
// @name         MOOdle Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-11
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
                background-image: url("https://s1.qwant.com/thumbr/474x474/0/d/afef2c0aa4d40ded4f56f7055cf255addff9ed837a94408471461f7c77961b/OIP.ixcKrGLJCCuVROv8nthNvgHaHa.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.ixcKrGLJCCuVROv8nthNvgHaHa%3Fpid%3DApi&q=0&b=1&p=0&a=0");
                background-repeat: repeat;
            }
            .bg-primary {
                background-color: #c1c1c1 !important;
                background-image: url('https://s1.qwant.com/thumbr/474x265/9/1/e52e6b2330f6536c9375616bb7da1e718fa55b02ac61a0657387988063aa52/OIP.bGWSYd6GLFp-L5SWV_VL3gHaEJ.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.bGWSYd6GLFp-L5SWV_VL3gHaEJ%3Fr%3D0%26pid%3DApi&q=0&b=1&p=0&a=0') !important;
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
                max-width: 1000px !important;
            }
            .navbar.navbar-dark.bg-dark .editmode-switch-form, .navbar.navbar-dark.bg-dark .editmode-switch-form label, .navbar.navbar-dark.bg-primary .editmode-switch-form, .navbar.navbar-dark.bg-primary .editmode-switch-form label {
                color: #000 !important;
            }
            .navbar.navbar-dark.bg-primary .nav-link .icon, .navbar.navbar-dark.bg-primary .nav-link a .icon, .navbar.navbar-dark.bg-primary .usermenu .dropdown-toggle {
                color: #3e3e3e !important;
            }
            
            /* Ocultar elementos específicos de la navbar */
            .nav-link[href*="recursos"],
            .nav-link[href*="manuales"],
            .dropdown-toggle:has-text("Recursos y manuales"),
            a.dropdown-toggle:contains("Recursos y manuales"),
            .nav-link:contains("ADD"),
            .nav-link:contains("Política de privacidad"),
            a[href*="add.unizar.es"],
            a[href*="privacidad"] {
                display: none !important;
            }
            
            /* Ocultar por texto contenido */
            .navbar .nav-link {
                &:has-text("Recursos y manuales"),
                &:has-text("ADD"),
                &:has-text("Política de privacidad") {
                    display: none !important;
                }
            }

            /* Ocultar el botón del footer */
            .btn-footer-popover {
                display: none !important;
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
            /* Estilo personalizado para elementos con clase rounded list-image mw-100 */
            .rounded.list-image.mw-100 {
                background-image: url('https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/peter.jpg') !important;
                background-size: cover !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Función para ocultar elementos específicos de la navbar
    function hideNavbarElements() {
        // Lista de textos a buscar para ocultar
        const textsToHide = [
            'Recursos y manuales',
            'ADD',
            'Política de privacidad'
        ];

        // Buscar todos los enlaces de navegación
        const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-toggle, .navbar a');
        
        navLinks.forEach(function(link) {
            const linkText = link.textContent.trim();
            const linkHref = link.getAttribute('href') || '';
            
            // Verificar si el texto coincide con alguno de los que queremos ocultar
            if (textsToHide.some(text => linkText.includes(text))) {
                link.style.display = 'none';
                console.log(`Elemento oculto: ${linkText}`);
            }
            
            // También ocultar por URL si contiene ciertas palabras clave
            if (linkHref.includes('add.unizar.es') || 
                linkHref.includes('privacidad') ||
                linkHref.includes('recursos') ||
                linkHref.includes('manuales')) {
                link.style.display = 'none';
                console.log(`Elemento oculto por URL: ${linkHref}`);
            }
        });

        // También buscar en elementos padre que puedan contener estos enlaces
        const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item, .nav-item');
        dropdownItems.forEach(function(item) {
            const itemText = item.textContent.trim();
            if (textsToHide.some(text => itemText.includes(text))) {
                item.style.display = 'none';
                console.log(`Dropdown item oculto: ${itemText}`);
            }
        });
    }

        // Función para aplicar imagen de fondo a elementos específicos
        function applyBackgroundToElements() {
            // Seleccionar todos los elementos con las clases especificadas
            const selectors = [
                '.rounded.list-image.mw-100',
                '.summary-image.rounded.mw-100',
                '.card-img-top'
            ];

            selectors.forEach(function(selector) {
                const elements = document.querySelectorAll(selector);
                elements.forEach(function(element) {
                    // Verificar si ya se aplicó el estilo para evitar duplicados
                    if (!element.hasAttribute('data-custom-bg-applied')) {
                        element.style.backgroundImage = 'url("https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/peter.jpg")';
                        element.style.backgroundSize = 'cover';
                        element.style.backgroundPosition = 'center';
                        element.style.backgroundRepeat = 'no-repeat';
                        element.setAttribute('data-custom-bg-applied', 'true');
                        console.log(`Imagen de fondo aplicada a elemento con selector: ${selector}`);
                    }
                });
            });
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

        // Reemplazar imagen de perfil de usuario
        function replaceUserPicture() {
            // Buscar imagen de perfil específica por la clase userpicture
            const userPictures = document.querySelectorAll('img.userpicture');
            userPictures.forEach(function(imgElement) {
                // Verificar si el src contiene la URL específica de Moodle
                if (imgElement.src && imgElement.src.includes('moodle.unizar.es/add/pluginfile.php')) {
                    imgElement.src = 'https://www.thispersondoesnotexist.com/';
                    console.log('Imagen de perfil de usuario reemplazada');
                }
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
                    replaceUserPicture();
                    applyBackgroundToElements();
                    hideNavbarElements();
                });
            } else {
                applyCustomStyles();
                addCustomParagraph();
                replaceUserPicture();
                applyBackgroundToElements();
                hideNavbarElements();
            }

            // Reemplazar el logo
            replaceLogo();

            // También observar cambios dinámicos en el DOM
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.addedNodes.length > 0) {
                        replaceLogo();
                        addCustomParagraph();
                        replaceUserPicture();
                        applyBackgroundToElements();
                        hideNavbarElements();
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