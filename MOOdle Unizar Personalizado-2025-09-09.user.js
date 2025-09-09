// ==UserScript==
// @name         MOOdle Unizar Personalizado
// @namespace    http://tampermonkey.net/
// @version      2025-09-09
// @description  Personaliza el aspecto de Moodle Unizar
// @author       Calo
// @match        https://moodle.unizar.es/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unizar.es
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
            .bg-primary {
                background-color: #c1c1c1 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Reemplazar el logo
    function replaceLogo() {
        waitForElement('img.logo', function(logoElement) {
            // Opción 1: Usar una URL de imagen online
            logoElement.src = 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/mooodle.png';

            // Opción 2: Usar base64 (necesitarás convertir tu imagen)
            // Para convertir tu imagen a base64, puedes usar: https://www.base64-image.de/
            // logoElement.src = 'data:image/png;base64,TU_IMAGEN_EN_BASE64_AQUI';

            // Opción 3: Usar una imagen de ejemplo (reemplaza con tu imagen convertida a base64)
            console.log('Logo encontrado, listo para reemplazar');
            console.log('Agrega tu imagen en base64 o URL en la línea correspondiente');
        });
    }

    // Función principal
    function init() {
        // Aplicar estilos cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyCustomStyles);
        } else {
            applyCustomStyles();
        }

        // Reemplazar el logo
        replaceLogo();

        // También observar cambios dinámicos en el DOM
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    replaceLogo();
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