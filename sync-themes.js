#!/usr/bin/env node
/**
 * Script de sincronización de temas
 * Copia PREDEFINED_THEMES de options.js a background.js
 * 
 * Uso: node sync-themes.js
 */

const fs = require('fs');
const path = require('path');

const FEXTENSION_DIR = path.join(__dirname, 'fextension');
const OPTIONS_JS = path.join(FEXTENSION_DIR, 'options.js');
const BACKGROUND_JS = path.join(FEXTENSION_DIR, 'background.js');

console.log('Sincronizando temas desde options.js a background.js...\n');

try {
    // Leer options.js
    const optionsContent = fs.readFileSync(OPTIONS_JS, 'utf8');
    
    // Extraer PREDEFINED_THEMES de options.js
    const themesMatch = optionsContent.match(/const PREDEFINED_THEMES = \{[\s\S]*?\n\};/);
    
    if (!themesMatch) {
        console.error('Error: No se pudo encontrar PREDEFINED_THEMES en options.js');
        process.exit(1);
    }
    
    const themesDefinition = themesMatch[0];
    console.log('PREDEFINED_THEMES extraído de options.js');
    
    // Leer background.js
    let backgroundContent = fs.readFileSync(BACKGROUND_JS, 'utf8');
    
    // Reemplazar PREDEFINED_THEMES en background.js
    const backgroundMatch = backgroundContent.match(
        /const PREDEFINED_THEMES = \{[\s\S]*?\n\};/
    );
    
    if (!backgroundMatch) {
        console.error('Error: No se pudo encontrar PREDEFINED_THEMES en background.js');
        process.exit(1);
    }
    
    backgroundContent = backgroundContent.replace(
        /const PREDEFINED_THEMES = \{[\s\S]*?\n\};/,
        themesDefinition
    );
    
    // Guardar background.js
    fs.writeFileSync(BACKGROUND_JS, backgroundContent, 'utf8');
    
    console.log('PREDEFINED_THEMES actualizado en background.js');
    console.log('\nSincronización completada exitosamente!');
    console.log('\nRecuerda: Siempre edita los temas en options.js y ejecuta este script.');
    
} catch (error) {
    console.error('Error durante la sincronización:', error.message);
    process.exit(1);
}
