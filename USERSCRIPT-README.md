# MOOdle Unizar Personalizado - Userscript para Tampermonkey

Este userscript adapta toda la funcionalidad de la extensión de navegador `fextension` para que pueda usarse con **Tampermonkey** en cualquier navegador.

## 📦 Instalación

### 1. Instalar Tampermonkey

Primero, instala Tampermonkey en tu navegador:
- **Chrome/Edge**: [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/es/firefox/addon/tampermonkey/)
- **Safari**: [Mac App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089)
- **Opera**: [Opera Add-ons](https://addons.opera.com/es/extensions/details/tampermonkey-beta/)

### 2. Instalar el Userscript

1. Haz clic en este enlace: [MOOdle-Unizar-Personalizado.user.js](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/MOOdle-Unizar-Personalizado.user.js)
2. Tampermonkey detectará automáticamente el script y mostrará la página de instalación
3. Haz clic en **Instalar**

## ✨ Características

El userscript incluye todos los temas de la extensión:


### Funcionalidades

- ✅ Personalización de fondos e imágenes
- ✅ Cambio de fuentes tipográficas
- ✅ Colores personalizados de navbar
- ✅ Ocultación de elementos de la interfaz
- ✅ Reemplazo de iconos PDF y logos
- ✅ Tema aleatorio en cada recarga
- ✅ Gato Oneko animado
- ✅ Todos los temas predefinidos de la extensión

## 🎮 Uso

### Menú de Configuración

Una vez instalado, puedes acceder a las opciones desde el menú de Tampermonkey:

1. Haz clic en el **icono de Tampermonkey** en tu navegador
2. Selecciona **MOOdle Unizar Personalizado**
3. Verás las siguientes opciones:

#### ⚙️ Seleccionar Tema
Abre un diálogo para elegir uno de los temas predefinidos. Introduce el nombre del tema (por ejemplo: `dark`, `breaking-bad`, etc.)

#### 🎲 Activar/Desactivar Tema Aleatorio
Activa o desactiva el modo de tema aleatorio. Cuando está activado, se aplicará un tema diferente en cada recarga de la página.

#### 🐱 Activar/Desactivar Oneko
Activa o desactiva el gato Oneko que sigue el cursor por la pantalla.

#### 🔄 Restaurar Configuración
Restaura todos los ajustes a los valores por defecto.

## 🔧 Configuración Avanzada

La configuración se guarda automáticamente usando `GM_setValue` y `GM_getValue`, por lo que persiste entre sesiones.

### Estructura de Configuración

```javascript
{
  selectedTheme: 'default',          // Tema seleccionado
  enableAutoTheme: false,            // Tema aleatorio activado/desactivado
  images: {                          // URLs de las imágenes personalizadas
    background: '',
    navbarBg: '',
    calendarBg: '',
    tarjeta: '',
    iconoPDF: '',
    logo: '',
    userProfile: '',
    screamer1: ''
  },
  fontFamily: 'Comic Sans MS',       // Fuente tipográfica
  navbarColor: '#213C70',            // Color de la navbar
  textsToHide: [...],                // Textos a ocultar
  urlsToHide: [...],                 // URLs a ocultar
  features: {                         // Funcionalidades activadas
    enableBackgroundImages: true,
    enableImageReplacements: true,
    enableHideElements: true,
    enableCustomParagraph: true,
    enableCustomFont: true,
    enableOneko: true
  }
}
```

## 🆚 Diferencias con la Extensión

### Ventajas del Userscript

- ✅ Funciona en **cualquier navegador** compatible con Tampermonkey
- ✅ **No requiere instalación** de extensión nativa
- ✅ Fácil de actualizar (actualización automática desde GitHub)
- ✅ Más portable y ligero

### Limitaciones

- ❌ **No tiene interfaz gráfica de configuración** (solo menús de Tampermonkey)
- ❌ No puede acceder a archivos locales (todas las imágenes deben ser URLs)
- ❌ Configuración más básica (menos opciones personalizables que la extensión)

## 📝 Actualización

El script se actualizará automáticamente desde GitHub. Puedes verificar actualizaciones manualmente:

1. Abre Tampermonkey
2. Ve a la pestaña **Utilidades**
3. Haz clic en **Comprobar actualizaciones**

## 🐛 Solución de Problemas

### El script no se activa

1. Verifica que Tampermonkey esté activado
2. Comprueba que estás en `https://moodle.unizar.es/*`
3. Revisa la consola del navegador (F12) en busca de errores

### Los cambios no se aplican

1. Recarga la página (Ctrl+F5)
2. Limpia la caché del navegador
3. Verifica que el tema seleccionado tiene las imágenes configuradas

### Oneko no aparece

1. Verifica que la opción está activada en el menú
2. Comprueba que no haya bloqueadores de scripts
3. Recarga la página

## 📚 Más Información

- **Repositorio**: https://github.com/carmoran0/MOOdleUnizarCSS
- **Reportar problemas**: https://github.com/carmoran0/MOOdleUnizarCSS/issues

## 📄 Licencia

Este proyecto mantiene la misma licencia que el proyecto principal. Consulta el archivo [LICENSE](../LICENSE) para más detalles.

---
  
**Versión**: 2025-10-16
