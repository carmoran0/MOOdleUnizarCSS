# ***MOOdle 2: Premium edition***:cool::cool:

![GitHub release (latest by date)](https://img.shields.io/github/v/release/carmoran0/MOOdleUnizarCSS)
![GitHub last commit](https://img.shields.io/github/last-commit/carmoran0/MOOdleUnizarCSS)
![GitHub issues](https://img.shields.io/github/issues/carmoran0/MOOdleUnizarCSS)

**Una extensión para personalizar la interfaz de Moodle Unizar.** Esta extensión es únicamente visual y no afecta a la funcionalidad de Moodle. Al menos debería.

> [!NOTE]  
> Esta extensión solo funciona para el moodle de Unizar, pero es bien de facil adaptarla co! Seguramente haya cosas que no funcionen, puedes hacerlo cambiando el @match en el manifest de /fextension/manifest.json 

![](/assets/preview.png)
<p align="center"><em>Vista previa de la extensión en acción - 14 temas disponibles</em></p>

---

## 📋 Tabla de Contenidos

- [Instalación](#-instalación)
  - [Firefox (Extensión)](#firefox-extensión-fácil-)
  - [Tampermonkey (Chrome, Edge, Safari, Opera)](#tampermonkey-chrome-edge-safari-opera-)
- [Características](#-características)
- [Uso](#-uso)
  - [Configuración Extensión](#configuración-extensión)
  - [Configuración Userscript](#configuración-userscript)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Desarrollo](#-desarrollo)
  - [Añadir o Modificar Temas](#añadir-o-modificar-temas)
  - [Flujo de Trabajo](#flujo-de-trabajo)
- [Contribuir](#-contribuir)
- [Solución de Problemas](#-solución-de-problemas)
- [Licencia](#-licencia)

---

## Instalación

### Firefox (fácil)

1. **Ve a [Releases](https://github.com/carmoran0/MOOdleUnizarCSS/releases)**  
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof1.png" alt="releases" style="width:33%;height:auto;" />

2. **Descarga el archivo `.xpi`**  
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof2.png" alt="instalacion" style="width:33%;height:auto;" />

3. **Instala y disfruta** (actualizaciones automáticas)  
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof3.png" alt="finalizar" style="width:50%;height:auto;" />

---

### Tampermonkey (Chrome, Edge, Safari, Opera)

**¡NUEVO!** Ahora disponible como userscript completo con todos los temas.

#### Instalación Rápida:

1. **Instala Tampermonkey:**
   - [Chrome/Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/es-ES/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - [Opera](https://addons.opera.com/es/extensions/details/tampermonkey-beta/)

2. **Instala el userscript:**  
   → [**MOOdle-Unizar-Personalizado.user.js**](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/MOOdle-Unizar-Personalizado.user.js)

3. **¡Listo!** Recarga Moodle y disfruta 🎉

---

## Características

- **14 temas predefinidos** (Dark, Breaking Bad, Miku, Vaca, Atrio, y más)
- **Tema aleatorio** en cada recarga
- **Fondos personalizados** para navbar, calendario y tarjetas
- **Fuentes personalizables**
- **Foto de perfil unificada**
- **Oneko** - Gato animado que sigue el cursor
- **Exportar/Importar** configuraciones
- **Actualizaciones automáticas**
- **Componentes opcionales** activables/desactivables
- **Multiplataforma**: Extensión (Firefox/Chrome) y Userscript (Tampermonkey)

---

## Uso

### Configuración Extensión

1. Haz clic en el **icono de la extensión** que saldrá en la barra de navegación cuando estés en Moodle
2. Selecciona tu tema favorito o activa **Tema Aleatorio**
3. Personaliza colores, fuentes e imágenes
4. Activa/desactiva componentes opcionales (Oneko, fondos, etc.)
5. **Exporta** tu configuración para compartirla o guardarla

### Configuración Userscript

1. Haz clic en el **icono de Tampermonkey**
2. Selecciona **MOOdle Unizar Personalizado**
3. Opciones disponibles:
   - **Seleccionar Tema**: Elige entre los 14 temas (`dark`, `miku`, `breaking-bad`, etc.)
   - **Tema Aleatorio**: Activa/desactiva
   - **Oneko**: Activa/desactiva el gato
   - **Restaurar**: Volver a valores por defecto

---

##  Estructura del Proyecto

```
├── fextension/                           # Extensión Firefox/Chrome
│   ├── manifest.json                     # Manifest V3
│   ├── content.js                        # Script principal
│   ├── background.js                     # Service worker (auto-tema)
│   ├── options.html/css/js               # Panel de configuración
│   ├── acorn-tokens.css                  # Design system Acorn
│   ├── oneko.js                          # Gato animado
│   └── assets/                           # Recursos de temas (imágenes)
├── MOOdle-Unizar-Personalizado.user.js   # Userscript Tampermonkey
├── sync-themes.js                        # Script de sincronización
├── assets/                               # Recursos generales
├── updates.json                          # Control de versiones
└── README.md                             # Este archivo
```

---

##  Desarrollo

### Añadir o Modificar Temas

Los temas se definen en `fextension/options.js` dentro del objeto `PREDEFINED_THEMES`.


> [!IMPORTANT]   
> Debido a la arquitectura de extensiones y userscripts:
>- `options.js` es la **fuente única de verdad**
>- `background.js` necesita una copia para el auto-tema
>- El userscript necesita una copia con URLs de GitHub
>- **NO edites manualmente** `background.js` ni el userscript

### Flujo de Trabajo

1. **Edita SOLO `fextension/options.js`**
   ```javascript
   const PREDEFINED_THEMES = {
       'mi-tema': {
           name: 'Mi Tema',
           images: {
               background: chrome.runtime.getURL("assets/mi-tema/fondo.png"),
               navbarBg: chrome.runtime.getURL("assets/mi-tema/navbar.png"),
               // ... más imágenes
           },
           fontFamily: 'Arial',
           navbarColor: '#FF5733',
           features: { enableBackgroundImages: true, /* ... */ }
       }
   };
   ```

2. **Ejecuta el script de sincronización**
   ```bash
   node sync-themes.js
   ```
   Este script sincroniza automáticamente:
   - `options.js` → `background.js` (copia exacta)
   - `options.js` → `userscript` (URLs transformadas a GitHub)

3. **Actualiza `content.js`** (si es tema nuevo)
   ```javascript
   const AVAILABLE_THEMES = [
       'default', 'dark', 'mi-tema', // ← Añade aquí
   ];
   ```

4. **Prueba la extensión**
   - Recarga la extensión en el navegador
   - Verifica el nuevo tema en opciones
   - Prueba el auto-tema

### Estructura de un Tema

```javascript
'nombre-tema': {
    name: 'Nombre Mostrado',       // Opcional
    images: {
        background: 'URL',          // Fondo principal
        navbarBg: 'URL',           // Fondo navbar
        calendarBg: 'URL',         // Fondo calendario
        tarjeta: 'URL',            // Imagen tarjetas
        iconoPDF: 'URL',           // Icono PDFs
        logo: 'URL',               // Logo personalizado
        userProfile: 'URL',        // Foto perfil
        screamer1: 'URL'           // Easter egg
    },
    fontFamily: 'Fuente',          // '' = default
    navbarColor: '#HEXCOLOR',
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

---

## Contribuir

¿Tienes ideas, bugs o mejoras? ¡Contribuye camarada!

1. **Reporta issues:** [GitHub Issues](https://github.com/carmoran0/MOOdleUnizarCSS/issues)
2. **Pull requests:** Siempre bienvenidos
3. **Nuevos temas:** Sigue el flujo de trabajo de desarrollo

---

## 🐛 Solución de Problemas

### Extensión

| Problema | Solución |
|----------|----------|
| El tema no se aplica | Recarga la extensión en `chrome://extensions` |
| Auto-tema no funciona | Ejecuta `node sync-themes.js` y recarga |
| Nuevo tema no aparece | Añádelo a `AVAILABLE_THEMES` en `content.js` |

### Userscript

| Problema | Solución |
|----------|----------|
| No se activa | Verifica que Tampermonkey esté habilitado |
| Cambios no se aplican | Recarga con Ctrl+F5 |
| Oneko no aparece | Actívalo desde el menú de Tampermonkey |
| Temas desactualizados | Ejecuta `node sync-themes.js` |

---

## Licencia

Este proyecto está bajo la licencia **Mozilla Public License 2.0** (ver [LICENSE](LICENSE)).

**Activos de terceros:** Algunos recursos visuales (logos, iconos) pueden ser propiedad de terceros. Consulta:
- [NOTICE](NOTICE)
- [assets/THIRD-PARTY-NOTICE.txt](assets/THIRD-PARTY-NOTICE.txt)

---

<p align="center">
  <strong>Hecho con amor desde la EUPLA</strong><br>
  <a href="https://github.com/carmoran0/MOOdleUnizarCSS/releases">Descargar última versión</a> • 
</p>

