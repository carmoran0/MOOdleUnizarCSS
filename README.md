# ***MOOdle 2: Premium edition***:cool::cool:

![GitHub release (latest by date)](https://img.shields.io/github/v/release/carmoran0/MOOdleUnizarCSS)
![GitHub last commit](https://img.shields.io/github/last-commit/carmoran0/MOOdleUnizarCSS)
![GitHub issues](https://img.shields.io/github/issues/carmoran0/MOOdleUnizarCSS)

**Una extensión estética para personalizar la interfaz de Moodle Unizar con estilo.** Esta extensión es únicamente visual y no afecta a la funcionalidad de Moodle. Al menos debería.

**Diseñada siguiendo el [Acorn Design System](https://acorn.firefox.com) de Mozilla Firefox** para garantizar una experiencia profesional, accesible y consistente.

![](https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/assets/preview.png?raw=true)
<p align="center"><em>Vista previa de la extensión en acción, hay otros temas disponibles</em></p>

## Cómo instalar en firefox (fácil) :shipit:
1. Ve a [releases](https://github.com/carmoran0/MOOdleUnizarCSS/releases) a la derecha de esta página\
   ![releases](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof1.png)
2. Descarga el archivo xpi (solamente descargando ya debería abrir la ventana de instalación)\
   ![](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof2.png)
3. Termina la instalación y ya. Además, también debería actualizarse automáticamente.\
   ![](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof3.png)

## Cómo instalar en Chrome (díficil)
1. Necesitas alguna extensión para inyectar userscript. Yo uso tampermonkey. Usa tampermonkey.
   Tienes que buscar y **descargar la extensión Tampermonkey**
   (En Chrome es un poco más díficil de aplicar)
   - [Descargar tampermonkey Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Descargar tampermonkey Firefox](https://addons.mozilla.org/es-ES/firefox/addon/tampermonkey/)
3. Una vez descargado tampermonkey, simplementa haciendo clic en el [enlace](https://github.com/carmoran0/MOOdleUnizarCSS/raw/refs/heads/main/MOOdle%20Unizar%20Personalizado-2025-09-09.user.js) con el código, ya te debería dar la opción de instalar.
4. Puedes activar y desactivar la extensión o simplemente el script desde el menú de la extensión
   ![cómo desactivar](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/howto.png)

## Lista de funciones 
- Todos los usuarios tienen la misma foto de una persona que no existe
- Barra de navegación mejorada
- Fuente más guay (Inter, siguiendo las guías de Acorn Design System)
- Ahora la interfaz no es una mierda y no se te limita solo al centro de la pantalla
- TODO ESTO AHORA ES OPCIONAL Y CUSTOMIZABLE **CON TEMAS PERSONALIZADOS PREDETERMINADOS Y LA OPCIÓN DE EXPORTARLOS**
- **Diseño basado en Acorn Design System de Mozilla Firefox** para una experiencia profesional y accesible

## **Estructura del Proyecto**
```
├── fextension/                      # Extensión de Firefox
│   ├── manifest.json                # Manifest de la extensión
│   ├── content.js                   # Script principal
│   ├── background.js                # Service worker (auto-tema)
│   ├── options.html                 # Panel de configuración (HTML)
│   ├── options.css                  # Estilos del panel de configuración (Acorn Design System)
│   ├── acorn-tokens.css             # Design tokens de Acorn (NUEVO)
│   ├── options.js                   # Lógica del panel de configuración
│   ├── oneko.js / oneko.gif         # Script y recurso extra
│   ├── icon-16.png                  # Iconos de la extensión
│   ├── icon-32.png
│   ├── icon-48.png
│   ├── icon-128.png
│   └── assets/                      # Imágenes y recursos de los temas
├── sync-themes.js                   # Script para sincronizar temas (desarrollo)
├── MOOdle Unizar Personalizado-2025-09-09.user.js   # Userscript para Tampermonkey (versión legacy)
├── assets/                          # Recursos generales (imágenes, previews)
├── updates.json                     # Indicador de versiones para actualizaciones automáticas
└── README.md                        # Este archivo
```

---

## Contribuir
Sientete libre de pedir cualquier cosa o añadir cualquier cosa con algun pull request: [Issues](https://github.com/carmoran0/MOOdleUnizarCSS/issues)


### Añadir o Modificar Temas

Los temas están definidos en `fextension/options.js` en el objeto `PREDEFINED_THEMES`. 

**IMPORTANTE**: Debido a la arquitectura de extensiones, `background.js` también necesita una copia de los temas para que la función de auto-tema funcione correctamente.

**Proceso para añadir/modificar temas:**

1. Edita **SOLO** `fextension/options.js` → Objeto `PREDEFINED_THEMES`
2. Ejecuta el script de sincronización:
   ```bash
   node sync-themes.js
   ```
3. Si añades un nuevo tema, actualiza también `fextension/content.js` → Array `AVAILABLE_THEMES`

**No edites manualmente `background.js`** - El script de sincronización lo hace por ti.


## Licencia y activos de terceros

Este repositorio contiene código y recursos visuales. El código está cubierto por la licencia que aparece en `LICENSE` (actualmente Mozilla Public License 2.0).

Algunos recursos (logos, iconos y otras imágenes) pueden ser propiedad de terceros y no están licenciados por el autor del repositorio. Consulta `NOTICE` y `assets/THIRD-PARTY-NOTICE.txt` para detalles y recomendaciones.

