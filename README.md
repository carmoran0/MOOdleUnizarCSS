# ***MOOdle 2: Premium edition***:cool::cool:

![GitHub release (latest by date)](https://img.shields.io/github/v/release/carmoran0/MOOdleUnizarCSS)
![GitHub last commit](https://img.shields.io/github/last-commit/carmoran0/MOOdleUnizarCSS)
![GitHub issues](https://img.shields.io/github/issues/carmoran0/MOOdleUnizarCSS)

**Una extensión para personalizar la interfaz de Moodle Unizar.** Esta extensión es únicamente visual y no afecta a la funcionalidad de Moodle. Al menos debería.

![](/assets/preview.png)
<p align="center"><em>Vista previa de la extensión en acción, hay otros temas disponibles</em></p>

## Cómo instalar en firefox (fácil) :shipit:
1. Ve a [releases](https://github.com/carmoran0/MOOdleUnizarCSS/releases) a la derecha de esta página\
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof1.png" alt="releases" style="width:33%;height:auto;" />
2. Descarga el archivo xpi (solamente descargando ya debería abrir la ventana de instalación)\
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof2.png" alt="instalacion" style="width:33%;height:auto;" />
3. Termina la instalación y ya. Además, también debería actualizarse automáticamente.\
   <img src="https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/comof3.png" alt="finalizar" style="width:50%;height:auto;" />

## Cómo instalar con Tampermonkey (Chrome, Edge, Safari, Opera) 🎭

**¡NUEVO!** Ahora disponible como userscript completo para Tampermonkey con todos los temas y funcionalidades.

### Instalación Rápida:

1. **Instala Tampermonkey** en tu navegador:
   - [Chrome/Edge](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/es-ES/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - [Opera](https://addons.opera.com/es/extensions/details/tampermonkey-beta/)

2. **Instala el userscript**: Haz clic en este enlace → [**MOOdle-Unizar-Personalizado.user.js**](https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/MOOdle-Unizar-Personalizado.user.js)

3. **¡Listo!** Recarga Moodle y disfruta 🎉

Para más información, consulta [**USERSCRIPT-README.md**](USERSCRIPT-README.md)

## Lista de funciones 

- Foto de perfil unificada
- Barra de navegación mejorada
- Fuente mejorada
- Interfaz mejorada
- Temas personalizables: 14 temas predefinidos, posibilidad de exportar/importar temas y activar un tema aleatorio en cada recarga.
- Componentes opcionales: elementos visuales y mejoras activables/desactivables desde la configuración (userscript/extension).
- Oneko
- Actualizaciones automáticas.
- Instalación flexible: disponible como extensión (xpi) y como userscript para Tampermonkey (Chrome, Edge, Safari, Opera, Firefox).

## **Estructura del Proyecto**
```
├── fextension/                        # Extensión de Firefox/Chrome
│   ├── manifest.json                  # Manifest de la extensión
│   ├── content.js                     # Script principal
│   ├── background.js                  # Service worker (auto-tema)
│   ├── options.html                   # Panel de configuración (HTML)
│   ├── options.css                    # Estilos del panel (Acorn Design System)
│   ├── acorn-tokens.css               # Design tokens de Acorn
│   ├── options.js                     # Lógica del panel de configuración
│   ├── oneko.js / oneko.gif           # Script y recurso extra
│   ├── icon-*.png                     # Iconos de la extensión
│   └── assets/                        # Imágenes y recursos de los temas
├── MOOdle-Unizar-Personalizado.user.js  # Userscript para Tampermonkey
├── USERSCRIPT-README.md               # Documentación del userscript
├── sync-themes.js                     # Script para sincronizar temas
├── assets/                            # Recursos generales (imágenes, previews)
├── updates.json                       # Indicador de versiones
└── README.md                          # Este archivo
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

