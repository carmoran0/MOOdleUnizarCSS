# Guia para temas y sincronización entre archivos

## El Problema de la Duplicación

Debido a la arquitectura de extensiones de Chrome/Firefox:
- `options.js` define los temas para la interfaz de usuario
- `background.js` **necesita** una copia de los temas para aplicar el auto-tema
- No pueden compartir módulos directamente (limitación de Manifest V3)

## Solución: Script de Sincronización

Hemos creado `sync-themes.js` que copia automáticamente `PREDEFINED_THEMES` de `options.js` a `background.js`.

## Flujo de Trabajo para Añadir/Modificar Temas

### 1. Editar Temas en `options.js`

Abre `fextension/options.js` y modifica el objeto `PREDEFINED_THEMES`:

```javascript
const PREDEFINED_THEMES = {
    'mi-nuevo-tema': {
        name: 'Mi Nuevo Tema',
        images: {
            background: chrome.runtime.getURL("assets/mi-tema/fondo.png"),
            navbarBg: chrome.runtime.getURL("assets/mi-tema/navbar.png"),
            // ... más imágenes
        },
        fontFamily: 'Arial',
        navbarColor: '#FF5733',
        features: {
            enableBackgroundImages: true,
            // ... más features
        }
    },
    // ... otros temas
};
```

### 2. Sincronizar a `background.js`

Ejecuta el script de sincronización desde la raíz del proyecto:

```bash
node sync-themes.js
```

Verás:
```
Sincronizando temas desde options.js a background.js...
PREDEFINED_THEMES extraído de options.js
PREDEFINED_THEMES actualizado en background.js
Sincronización completada exitosamente!
```

### 3. Actualizar Lista de Temas en `content.js`

Si añadiste un **nuevo tema**, actualiza el array `AVAILABLE_THEMES` en `fextension/content.js`:

```javascript
const AVAILABLE_THEMES = [
    'default',
    'dark',
    'bar-atrio',
    // ... otros temas
    'mi-nuevo-tema',  // ← Añade aquí
];
```

### 4. Probar la Extensión

1. Recarga la extensión en Chrome/Firefox
2. Abre la página de opciones
3. Verifica que el nuevo tema aparezca en el selector
4. Prueba el auto-tema para confirmar que funciona

## Reglas Importantes

1. **NUNCA edites manualmente `PREDEFINED_THEMES` en `background.js`**
   - Será sobrescrito por el script de sincronización
   
2. **SIEMPRE ejecuta `node sync-themes.js` después de editar temas**
   - De lo contrario, el auto-tema no funcionará correctamente
   
3. **Mantén sincronizados los 3 archivos:**
   - `options.js` → Definición completa del tema
   - `background.js` → Copia automática (via script)
   - `content.js` → Lista de nombres de temas disponibles

## Troubleshooting

### El auto-tema no aplica las imágenes correctas

→ Probablemente olvidaste ejecutar `sync-themes.js`  
→ Solución: Ejecuta `node sync-themes.js` y recarga la extensión

### El nuevo tema no aparece en el selector

→ Olvidaste añadirlo a `AVAILABLE_THEMES` en `content.js`  
→ Solución: Añádelo y recarga la extensión

### Script de sincronización falla

→ Verifica que Node.js esté instalado  
→ Verifica que estés en la raíz del proyecto  
→ Verifica que `options.js` y `background.js` existan

## Estructura de un Tema

```javascript
'nombre-del-tema': {
    name: 'Nombre Legible',           // Nombre mostrado en UI (opcional)
    images: {
        background: 'URL',             // Imagen de fondo principal
        navbarBg: 'URL',              // Fondo de la navbar
        calendarBg: 'URL',            // Fondo del calendario
        tarjeta: 'URL',               // Imagen de tarjetas
        iconoPDF: 'URL',              // Icono para PDFs
        logo: 'URL',                  // Logo personalizado
        userProfile: 'URL',           // Imagen de perfil de usuario
        screamer1: 'URL'              // Easter egg
    },
    fontFamily: 'Nombre de fuente',   // '' = usar default de Moodle
    navbarColor: '#HEXCOLOR',         // Color de la navbar
    features: {
        enableBackgroundImages: true,
        enableImageReplacements: true,
        enableHideElements: true,
        enableCustomParagraph: true,
        enableCustomFont: true,
        enableOneko: true
    }
}
```

## Mejores Prácticas

- Usa `chrome.runtime.getURL()` para assets locales
- Usa URLs directas para recursos externos
- Strings vacíos (`''`) significan "no usar esta funcionalidad"
- Mantén nombres de temas en kebab-case: `mi-nuevo-tema`
- Documenta temas complejos con comentarios
