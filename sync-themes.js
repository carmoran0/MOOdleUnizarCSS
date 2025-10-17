#!/usr/bin/env node
/**
 * Script de sincronización de temas
 * Copia PREDEFINED_THEMES de options.js a background.js y al userscript
 * 
 * Uso: node sync-themes.js
 */

const fs = require('fs');
const path = require('path');

const FEXTENSION_DIR = path.join(__dirname, 'fextension');
const OPTIONS_JS = path.join(FEXTENSION_DIR, 'options.js');
const BACKGROUND_JS = path.join(FEXTENSION_DIR, 'background.js');
const USERSCRIPT_JS = path.join(__dirname, 'MOOdle-Unizar-Personalizado.user.js');

console.log('Sincronizando temas desde options.js...\n');

try {
    // Leer todos los archivos
    const [optionsContent, backgroundContent, userscriptContent] = [
        fs.readFileSync(OPTIONS_JS, 'utf8'),
        fs.readFileSync(BACKGROUND_JS, 'utf8'),
        fs.readFileSync(USERSCRIPT_JS, 'utf8')
    ];
    
    // Extraer PREDEFINED_THEMES de options.js
    const themesMatch = optionsContent.match(/const PREDEFINED_THEMES = \{[\s\S]*?\n\};/);
    
    if (!themesMatch) {
        console.error('Error: No se pudo encontrar PREDEFINED_THEMES en options.js');
        process.exit(1);
    }
    
    console.log('✓ PREDEFINED_THEMES extraído de options.js');
    
    let hasChanges = false;
    
    // ============================================
    // 1. Sincronizar a background.js (sin cambios)
    // ============================================
    const backgroundMatch = backgroundContent.match(/const PREDEFINED_THEMES = \{[\s\S]*?\n\};/);
    
    if (!backgroundMatch) {
        console.error('Error: No se pudo encontrar PREDEFINED_THEMES en background.js');
        process.exit(1);
    }
    
    const updatedBackground = backgroundContent.replace(
        backgroundMatch[0],
        themesMatch[0]
    );
    
    if (updatedBackground !== backgroundContent) {
        fs.writeFileSync(BACKGROUND_JS, updatedBackground, 'utf8');
        console.log('✓ background.js actualizado');
        hasChanges = true;
    } else {
        console.log('○ background.js sin cambios');
    }
    
    // ============================================
    // 2. Sincronizar al userscript (transformando URLs)
    // ============================================
    const userscriptMatch = userscriptContent.match(/const PREDEFINED_THEMES = \{[\s\S]*?\n    \};/);
    
    if (!userscriptMatch) {
        console.error('Error: No se pudo encontrar PREDEFINED_THEMES en el userscript');
        process.exit(1);
    }
    
    // Transformar chrome.runtime.getURL() a URLs de GitHub
    let userscriptThemes = themesMatch[0]
        .replace(/chrome\.runtime\.getURL\("assets\//g, '`${GITHUB_BASE}/assets/')
        .replace(/chrome\.runtime\.getURL\("([^"]+)"\)/g, '`${GITHUB_ASSETS}/$1`')
        .replace(/"\)/g, '`');
    
    const updatedUserscript = userscriptContent.replace(
        userscriptMatch[0],
        userscriptThemes
    );
    
    if (updatedUserscript !== userscriptContent) {
        fs.writeFileSync(USERSCRIPT_JS, updatedUserscript, 'utf8');
        console.log('✓ userscript actualizado (URLs transformadas a GitHub)');
        hasChanges = true;
    } else {
        console.log('○ userscript sin cambios');
    }
    
    // ============================================
    // Resumen final
    // ============================================
    if (hasChanges) {
        console.log('\n✓ Sincronización completada exitosamente!');
        console.log('\nArchivos sincronizados:');
        console.log('  - options.js (fuente) → background.js');
        console.log('  - options.js (fuente) → userscript (con URLs transformadas)');
    } else {
        console.log('\n✓ Todos los temas ya están sincronizados (sin cambios).');
    }
    
    console.log('\nRecuerda: Siempre edita los temas en options.js y ejecuta este script.');
    
} catch (error) {
    console.error('Error durante la sincronización:', error.message);
    process.exit(1);
}
