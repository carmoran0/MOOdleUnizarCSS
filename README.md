# ***MOOdle 2: Premium edition***:cool::cool:

![GitHub release (latest by date)](https://img.shields.io/github/v/release/carmoran0/MOOdleUnizarCSS)
![GitHub last commit](https://img.shields.io/github/last-commit/carmoran0/MOOdleUnizarCSS)
![GitHub issues](https://img.shields.io/github/issues/carmoran0/MOOdleUnizarCSS)
![](assets\preview.png)
**Una extensión estética para personalizar la interfaz de Moodle Unizar con estilo.** Esta extensión es únicamente visual y no afecta a la funcionalidad de Moodle. Al menos debería.

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
- Fuente más guay
- Ahora la interfaz no es una mierda y no se te limita solo al centro de la pantalla
- TODO ESTO AHORA ES OPCIONAL Y CUSTOMIZABLE **CON TEMAS PERSONALIZADOS PREDETERMINADOS Y LA OPCIÓN DE EXPORTARLOS**

## **Estructura del Proyecto**
```
├── fextension/               # Extensión de Firefox
│   ├── manifest.json     
│   ├── content.js            # Contenido principal
│   ├── options.html/css/js   # Panel de configuración
│   └── assets/           
├── MOOdle Unizar...user.js   # Userscript para Tampermonkey (VERSIÓN VIEJA, SE ROMPE A PARTIR DE 1.5)
└── assets/               
```

---

## Contribuir
Sientete libre de pedir cualquier cosa o añadir cualquier cosa con algun pull request: [Issues](https://github.com/carmoran0/MOOdleUnizarCSS/issues)

