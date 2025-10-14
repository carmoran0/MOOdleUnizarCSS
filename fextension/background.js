// ============================================================================
// IMPORTANTE: NO EDITAR MANUALMENTE PREDEFINED_THEMES EN ESTE ARCHIVO
// ============================================================================
// Esta definición es una copia de options.js necesaria para que el auto-tema
// funcione correctamente. Para añadir o modificar temas, SOLO edita options.js
// y luego ejecuta: node sync-themes.js
// 
// La duplicación es inevitable debido a la arquitectura de extensiones Chrome/Firefox
// donde background.js no puede importar directamente desde options.js
// ============================================================================

// Temas predeterminados (GENERADO AUTOMÁTICAMENTE - ver options.js)
const PREDEFINED_THEMES = {
    default: {
        name: 'Family guy claro (default)',
        images: {
            background: chrome.runtime.getURL("assets/default/peterIRL.png"),
            navbarBg: chrome.runtime.getURL("assets/default/giggity.png"),
            calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
            tarjeta: 'https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/fextension/assets/default/peter.jpg?raw=true',
            iconoPDF: chrome.runtime.getURL("assets/default/PETERRRRR.png"),
            logo: chrome.runtime.getURL("assets/mooodle.png"),
            userProfile: 'https://www.thispersondoesnotexist.com/',
            screamer1:'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
        },
        fontFamily: 'Comic Sans MS',
        navbarColor: '#213C70',
            features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
        dark: {
        name: 'Family guy oscuro',
        images: {
            background: chrome.runtime.getURL("assets/dark/background.png"),
            navbarBg: chrome.runtime.getURL("assets/dark/clevnavb.jpeg"),
            calendarBg: chrome.runtime.getURL("assets/dark/calendar.png"),
            tarjeta: 'https://github.com/carmoran0/MOOdleUnizarCSS/blob/main/fextension/assets/dark/cocje.png?raw=true', //ESTA SON LAS TARJETAS
            iconoPDF: chrome.runtime.getURL("assets/dark/pdf.png"), // ESTE ES EL PDF
            logo: chrome.runtime.getURL("assets/mooodle.png"),
            userProfile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            screamer1: ''
        },
        fontFamily: 'Comic Sans MS',
        navbarColor: '#2c3e50',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: false
        }
    },
    moodle: {
        name: 'Moodle Base',
        images: {
            background: '',
            navbarBg: '',
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: '',
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#213C70',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: true,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'bar-atrio': {
        name: 'bar atrio',
        images: {
            background: chrome.runtime.getURL("assets/atrio/cocteles.png"),
            navbarBg: '',
            calendarBg: '',
            tarjeta: '',
            iconoPDF: chrome.runtime.getURL("assets/atrio/chupitos.png"),
            logo: chrome.runtime.getURL("assets/atrio/logo.png"),
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#702121',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: false,
            enableOneko: true
        }
    },
    'vaca': {
        name: 'vaca',
        images: {
            background: chrome.runtime.getURL("assets/vaca/vacapatin.jpeg"),
            navbarBg: chrome.runtime.getURL("assets/vaca/navbar.jpeg"),
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/vaca/logo.JPG"),
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#213C70',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'psoe': {
        name: 'psoe',
        images: {
            background: chrome.runtime.getURL("assets/pesoe/background.png"),
            navbarBg: '',
            calendarBg: '',
            tarjeta: chrome.runtime.getURL("assets/pesoe/fondo.jpeg"),
            iconoPDF: 'https://s1.qwant.com/thumbr/474x474/3/3/1a5ac4a6d12c5508b4d3b67e84487120de463b4ab4c1e5dd307a887c3556f6/OIP.k0deVH9kL4UdzKpGOPX3qwHaHa.jpg?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.k0deVH9kL4UdzKpGOPX3qwHaHa%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0',
            logo: chrome.runtime.getURL("assets/pesoe/aragon_horizontal-linea-blanco.png"),
            userProfile: 'https://s1.qwant.com/thumbr/474x474/3/3/1a5ac4a6d12c5508b4d3b67e84487120de463b4ab4c1e5dd307a887c3556f6/OIP.k0deVH9kL4UdzKpGOPX3qwHaHa.jpg?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.k0deVH9kL4UdzKpGOPX3qwHaHa%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#E20025',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'boykisser': {
        name: 'boykisser',
        images: {
            background: chrome.runtime.getURL("assets/boykisser/navbar.gif"),
            navbarBg: chrome.runtime.getURL("assets/boykisser/navbar.jpeg"),
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/boykisser/logo.jpeg"),
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }   
    },
    'hatsune-miku': {
        name: 'hatsune miku',
        images: {
            background: chrome.runtime.getURL("assets/miku/background.jpeg"),
            navbarBg: '',
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/miku/logo.svg"),
            userProfile: chrome.runtime.getURL("assets/miku/pfp.jpeg"),
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#86CECB',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'doctor-house': {
        name: 'doctor house',
        images: {
            background: chrome.runtime.getURL("assets/house/background.png"),
            navbarBg: chrome.runtime.getURL("assets/house/navbar.jpeg"),
            calendarBg: chrome.runtime.getURL("assets/house/calendar.jpeg"),
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/house/logo.jpeg"),
            userProfile: chrome.runtime.getURL("assets/house/pfp.jpeg"),
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#213C70',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'breaking-bad': {
        name: 'breaking bad',
        images: {
            background: chrome.runtime.getURL("assets/breakingbad/fondo.png"),
            navbarBg: chrome.runtime.getURL("assets/breakingbad/navbar.png"),
            calendarBg: '',
            tarjeta: chrome.runtime.getURL("assets/breakingbad/tarjeta.png"),
            iconoPDF: chrome.runtime.getURL("assets/breakingbad/pdf.png"),
            logo: chrome.runtime.getURL("assets/breakingbad/logo.svg"),
            userProfile: chrome.runtime.getURL("assets/breakingbad/pfp.png"),
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#213C70',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'smiling-friends': {
        name: 'smiling friends',
        images: {
            background: chrome.runtime.getURL("assets/smiling/fondo.gif"),
            navbarBg: chrome.runtime.getURL("assets/smiling/navbar.png"),
            calendarBg: '',
            tarjeta: chrome.runtime.getURL("assets/smiling/tarjeta.png"),
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/smiling/logo.png"),
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'rick-morty-irl': {
        name: 'rick y morty irl',
        images: {
            background: chrome.runtime.getURL("assets/rym/fondo.png"),
            navbarBg: chrome.runtime.getURL("assets/rym/navbar.png"),
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/rym/logo.png"),
            userProfile: chrome.runtime.getURL("assets/rym/rickkkk.png"),
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'pipotam': {
        name: 'pipotam',
        images: {
            background: chrome.runtime.getURL("assets/pipotam/fondo.gif"),
            navbarBg: chrome.runtime.getURL("assets/pipotam/navbar.png"),
            calendarBg: chrome.runtime.getURL("assets/pipotam/fondo.gif"),
            tarjeta: chrome.runtime.getURL("assets/pipotam/fondo.gif"),
            iconoPDF: chrome.runtime.getURL("assets/pipotam/fondo.gif"),
            logo: chrome.runtime.getURL("assets/pipotam/logo.gif"),
            userProfile:chrome.runtime.getURL("assets/pipotam/fondo.gif"),
            screamer1: chrome.runtime.getURL("assets/pipotam/fondo.gif")
        },
        fontFamily: '',
        navbarColor: '',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
    'whatsapp': {
        name: 'whatsapp',
        images: {
            background: '',
            navbarBg: '',
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/whatsapp/Digital_Inline_White.svg"),
            userProfile: '',
            screamer1: ''
        },
        fontFamily: '',
        navbarColor: '#25D366',
        features: {
            enableBackgroundImages: true,
            enableImageReplacements: true,
            enableHideElements: true,
            enableCustomParagraph: true,
            enableCustomFont: true,
            enableOneko: true
        }
    },
};

// Listen for tab updates and show/hide the page action when URL matches
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  try {
    if (changeInfo.status === 'complete' || changeInfo.url) {
      const url = changeInfo.url || tab.url || '';
      if (typeof url === 'string' && url.startsWith('https://moodle.unizar.es/')) {
        // Show the page action (address bar button)
        if (chrome.pageAction && chrome.pageAction.show) {
          chrome.pageAction.show(tabId);
        } else if (chrome.action && chrome.action.enable) {
          // Fallback: enable the global action for this tab
          chrome.action.enable(tabId);
        }
      } else {
        // Hide page action if available
        if (chrome.pageAction && chrome.pageAction.hide) {
          chrome.pageAction.hide(tabId);
        } else if (chrome.action && chrome.action.disable) {
          chrome.action.disable(tabId);
        }
      }
    }
  } catch (e) {
    console.error('background worker error', e);
  }
});

// Also handle when a tab is activated (user switches tabs)
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (!tab || !tab.url) return;
    try {
      if (tab.url.startsWith('https://moodle.unizar.es/')) {
        if (chrome.pageAction && chrome.pageAction.show) chrome.pageAction.show(tab.id);
        else if (chrome.action && chrome.action.enable) chrome.action.enable(tab.id);
      } else {
        if (chrome.pageAction && chrome.pageAction.hide) chrome.pageAction.hide(tab.id);
        else if (chrome.action && chrome.action.disable) chrome.action.disable(tab.id);
      }
    } catch (e) {
      console.error('onActivated error', e);
    }
  });
});

// When extension is installed or updated, process all tabs to set correct visibility
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
      try {
        if (tab.url && tab.id != null) {
          if (tab.url.startsWith('https://moodle.unizar.es/')) {
            if (chrome.pageAction && chrome.pageAction.show) chrome.pageAction.show(tab.id);
            else if (chrome.action && chrome.action.enable) chrome.action.enable(tab.id);
          } else {
            if (chrome.pageAction && chrome.pageAction.hide) chrome.pageAction.hide(tab.id);
            else if (chrome.action && chrome.action.disable) chrome.action.disable(tab.id);
          }
        }
      } catch (e) {
        console.error('onInstalled processing tab error', e);
      }
    }
  });
});

// Listener para manejar la aplicación de tema aleatorio
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'applyRandomTheme') {
    // Cargar configuración actual y aplicar tema completo
    chrome.storage.sync.get('moodleConfig', (result) => {
      const config = result.moodleConfig || {};
      const theme = PREDEFINED_THEMES[message.theme];
      
      if (theme) {
        // Aplicar TODAS las propiedades del tema seleccionado
        config.selectedTheme = message.theme;
        config.images = { ...theme.images };
        config.fontFamily = theme.fontFamily;
        config.navbarColor = theme.navbarColor;
        config.features = { ...theme.features };
        // Mantener las configuraciones de usuario que no son parte del tema
        // (textsToHide, urlsToHide, enableAutoTheme se mantienen)
        
        chrome.storage.sync.set({ moodleConfig: config }, () => {
          console.log('Tema aleatorio COMPLETO aplicado:', message.theme, config);
          sendResponse({ success: true });
        });
      } else {
        console.error('Tema no encontrado:', message.theme);
        sendResponse({ success: false, error: 'Tema no encontrado' });
      }
    });
    return true; // Mantener el canal abierto para respuesta asíncrona
  }
});
