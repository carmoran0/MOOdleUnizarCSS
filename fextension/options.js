// Temas predeterminados
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
        navbarColor: '',
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
    'psoe': {
        name: 'psoe',
        images: {
            background: chrome.runtime.getURL("assets/pesoe/background.png"),
            navbarBg: '',
            calendarBg: '',
            tarjeta: '',
            iconoPDF: '',
            logo: chrome.runtime.getURL("assets/pesoe/aragon_horizontal-linea-blanco.png"),
            userProfile: '',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'hatsune-miku': {
        name: 'hatsune miku',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'doctor-house': {
        name: 'doctor house',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'breaking-bad': {
        name: 'breaking bad',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'smiling-friends': {
        name: 'smiling friends',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'rick-morty-irl': {
        name: 'rick y morty irl',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
    'pipotam': {
        name: 'pipotam',
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
        navbarColor: '',
        features: {
            enableBackgroundImages: false,
            enableImageReplacements: false,
            enableHideElements: false,
            enableCustomParagraph: false,
            enableCustomFont: false,
            enableOneko: false
        }
    },
};

// Configuración por defecto
const DEFAULT_CONFIG = {
    selectedTheme: 'default',
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
    customFont: '',
    navbarColor: '#213C70',
    textsToHide: ['Recursos y manuales', 'ADD', 'Política de privacidad'],
    urlsToHide: ['add.unizar.es', 'privacidad', 'recursos', 'manuales'],
    features: {
        enableBackgroundImages: true,
        enableImageReplacements: true,
        enableHideElements: true,
        enableCustomParagraph: true,
        enableCustomFont: true,
        enableOneko: false
    }
};

// Cargar configuración guardada
async function loadConfig() {
    try {
        const result = await browser.storage.sync.get('moodleConfig');
        return result.moodleConfig || DEFAULT_CONFIG;
    } catch (error) { 
        console.error('Error loading config:', error);
        return DEFAULT_CONFIG;
    }
}

// Guardar configuración
async function saveConfig(config) {
    try {
        await browser.storage.sync.set({ moodleConfig: config });
        return true;
    } catch (error) {
        console.error('Error saving config:', error);
        return false;
    }
}

// Mostrar estado
function showStatus(message, type = 'info', duration = 3000) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    statusDiv.style.display = 'block';
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, duration);
}

// Llenar formulario con configuración
function fillForm(config) {
    // Tema predeterminado
    const themeSelect = document.getElementById('selectedTheme');
    if (themeSelect && config.selectedTheme) {
        themeSelect.value = config.selectedTheme;
    }
    
    // Imágenes
    Object.keys(config.images).forEach(key => {
        const input = document.getElementById(key);
        if (input) input.value = config.images[key] || '';
    });
    
    // Fuente personalizada habilitada/deshabilitada
    const enableCustomFontCheckbox = document.getElementById('enableCustomFont');
    const fontSection = document.getElementById('fontSection');
    if (enableCustomFontCheckbox) {
        enableCustomFontCheckbox.checked = config.features.enableCustomFont !== false;
        if (fontSection) {
            fontSection.style.opacity = enableCustomFontCheckbox.checked ? '1' : '0.5';
            fontSection.style.pointerEvents = enableCustomFontCheckbox.checked ? 'auto' : 'none';
        }
    }
    
    // Fuente
    const fontSelect = document.getElementById('fontFamily');
    const customFontInput = document.getElementById('customFont');
    
    if (config.features.enableCustomFont !== false) {
        if (Object.values(fontSelect.options).some(opt => opt.value === config.fontFamily)) {
            fontSelect.value = config.fontFamily;
            customFontInput.style.display = 'none';
        } else {
            fontSelect.value = 'custom';
            customFontInput.value = config.fontFamily;
            customFontInput.style.display = 'block';
        }
    }
    
    // Color de navbar
    const navbarColorInput = document.getElementById('navbarColor');
    const navbarColorPreview = document.getElementById('navbarColorPreview');
    if (navbarColorInput && config.navbarColor) {
        navbarColorInput.value = config.navbarColor;
        if (navbarColorPreview) {
            navbarColorPreview.style.backgroundColor = config.navbarColor;
        }
    }
    
    // Textos y URLs a ocultar
    document.getElementById('textsToHide').value = config.textsToHide.join(', ');
    document.getElementById('urlsToHide').value = config.urlsToHide.join(', ');
    
    // Features
    Object.keys(config.features).forEach(key => {
        const checkbox = document.getElementById(key);
        if (checkbox) checkbox.checked = config.features[key];
    });
}

// Obtener configuración del formulario
function getFormConfig() {
    const config = {
        images: {},
        features: {}
    };
    
    // Tema seleccionado
    const themeSelect = document.getElementById('selectedTheme');
    config.selectedTheme = themeSelect ? themeSelect.value : 'default';
    
    // Imágenes (campos vacíos = sin personalización)
    Object.keys(DEFAULT_CONFIG.images).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
            config.images[key] = input.value.trim(); // Permitir campos vacíos
        }
    });
    
    // Fuente
    const fontSelect = document.getElementById('fontFamily');
    const customFontInput = document.getElementById('customFont');
    const enableCustomFontCheckbox = document.getElementById('enableCustomFont');
    
    if (enableCustomFontCheckbox && !enableCustomFontCheckbox.checked) {
        // Si la fuente personalizada está deshabilitada, usar fuente por defecto de Moodle
        config.fontFamily = '';
    } else if (fontSelect.value === 'custom') {
        config.fontFamily = customFontInput.value.trim() || '';
    } else {
        config.fontFamily = fontSelect.value;
    }
    config.customFont = customFontInput.value;
    
    // Color de navbar
    const navbarColorInput = document.getElementById('navbarColor');
    let navbarColor = navbarColorInput ? navbarColorInput.value.trim() : '#213C70';
    // Validar que sea un color hexadecimal válido
    if (!/^#[0-9A-Fa-f]{6}$/.test(navbarColor)) {
        navbarColor = '#213C70'; // Color por defecto si no es válido
    }
    config.navbarColor = navbarColor;
    
    // Textos y URLs a ocultar
    const textsValue = document.getElementById('textsToHide').value.trim();
    config.textsToHide = textsValue ? textsValue.split(',').map(text => text.trim()).filter(text => text) : [];
        
    const urlsValue = document.getElementById('urlsToHide').value.trim();
    config.urlsToHide = urlsValue ? urlsValue.split(',').map(url => url.trim()).filter(url => url) : [];
    
    // Features
    Object.keys(DEFAULT_CONFIG.features).forEach(key => {
        const checkbox = document.getElementById(key);
        if (checkbox) config.features[key] = checkbox.checked;
    });
    
    return config;
}

// Vista previa de imagen
function showImagePreview(url) {
    const modal = document.getElementById('previewModal');
    const previewImg = document.getElementById('previewImage');
    const previewError = document.getElementById('previewError');
    
    previewError.style.display = 'none';
    previewImg.style.display = 'block';
    
    previewImg.onload = () => {
        modal.style.display = 'block';
    };
    
    previewImg.onerror = () => {
        previewImg.style.display = 'none';
        previewError.style.display = 'block';
        previewError.textContent = 'Error: No se pudo cargar la imagen. Verifica la URL.';
        modal.style.display = 'block';
    };
    
    previewImg.src = url;
}

// Exportar configuración
function exportConfig(config) {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'moodle-config.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
}

// Importar configuración
function importConfig(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const config = JSON.parse(e.target.result);
            
            // Validar estructura básica
            if (!config.images || !config.features) {
                throw new Error('Archivo de configuración inválido');
            }
            
            // Fusionar con configuración por defecto para campos faltantes
            const mergedConfig = {
                ...DEFAULT_CONFIG,
                ...config,
                images: { ...DEFAULT_CONFIG.images, ...config.images },
                features: { ...DEFAULT_CONFIG.features, ...config.features }
            };
            
            fillForm(mergedConfig);
            await saveConfig(mergedConfig);
            showStatus('✅ Configuración importada exitosamente', 'success');
            
        } catch (error) {
            showStatus('❌ Error al importar configuración: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar configuración actual
    const config = await loadConfig();
    fillForm(config);
    
    // Event listeners
    
    // Guardar configuración
    document.getElementById('saveConfig').addEventListener('click', async () => {
        const config = getFormConfig();
        const success = await saveConfig(config);
        
        if (success) {
            showStatus('✅ Configuración guardada correctamente', 'success');
            // Notificar a content script para actualizar
            try {
                const tabs = await browser.tabs.query({ url: "https://moodle.unizar.es/*" });
                if (tabs.length > 0) {
                    for (const tab of tabs) {
                        try {
                            await browser.tabs.sendMessage(tab.id, { action: 'updateConfig', config });
                        } catch (msgError) {
                            console.log(`No se pudo enviar mensaje a la pestaña ${tab.id}:`, msgError);
                            // Continuar con otras pestañas si hay error en una
                        }
                    }
                }
            } catch (error) {
                console.log('Error al buscar tabs de Moodle:', error);
                // No afecta a la funcionalidad principal, solo es una notificación
            }
        } else {
            showStatus('❌ Error al guardar la configuración', 'error');
        }
    });
    
    // Restaurar valores por defecto
    document.getElementById('resetConfig').addEventListener('click', async () => {
        if (confirm('¿Estás seguro de que quieres restaurar la configuración por defecto?')) {
            fillForm(DEFAULT_CONFIG);
            await saveConfig(DEFAULT_CONFIG);
            showStatus('🔄 Configuración restaurada a valores por defecto', 'info');
        }
    });
    
    // Exportar configuración
    document.getElementById('exportConfig').addEventListener('click', () => {
        const config = getFormConfig();
        exportConfig(config);
        showStatus('📤 Configuración exportada', 'success');
    });
    
    // Importar configuración
    document.getElementById('importConfig').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    
    document.getElementById('importFile').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            importConfig(file);
        }
    });
    
    // Manejar selector de temas predeterminados
    document.getElementById('selectedTheme').addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        if (selectedTheme !== 'custom' && PREDEFINED_THEMES[selectedTheme]) {
            const theme = PREDEFINED_THEMES[selectedTheme];
            
            // Aplicar imágenes del tema
            Object.keys(theme.images).forEach(key => {
                const input = document.getElementById(key);
                if (input) input.value = theme.images[key];
            });
            
            // Aplicar fuente del tema
            const fontSelect = document.getElementById('fontFamily');
            const customFontInput = document.getElementById('customFont');
            fontSelect.value = theme.fontFamily;
            customFontInput.style.display = 'none';
            
            // Aplicar color de navbar del tema
            const navbarColorInput = document.getElementById('navbarColor');
            const navbarColorPreview = document.getElementById('navbarColorPreview');
            if (navbarColorInput && theme.navbarColor) {
                navbarColorInput.value = theme.navbarColor;
                if (navbarColorPreview) {
                    navbarColorPreview.style.backgroundColor = theme.navbarColor;
                }
            }
            
            // Aplicar features del tema
            if (theme.features) {
                Object.keys(theme.features).forEach(featureKey => {
                    const checkbox = document.getElementById(featureKey);
                    if (checkbox) {
                        checkbox.checked = theme.features[featureKey];
                        
                        // Manejar casos especiales
                        if (featureKey === 'enableCustomFont') {
                            const fontSection = document.getElementById('fontSection');
                            if (fontSection) {
                                fontSection.style.opacity = checkbox.checked ? '1' : '0.5';
                                fontSection.style.pointerEvents = checkbox.checked ? 'auto' : 'none';
                            }
                        }
                    }
                });
            }
        }
    });

    // Manejar checkbox de fuente personalizada
    document.getElementById('enableCustomFont').addEventListener('change', (e) => {
        const fontSection = document.getElementById('fontSection');
        const isEnabled = e.target.checked;
        
        if (fontSection) {
            fontSection.style.opacity = isEnabled ? '1' : '0.5';
            fontSection.style.pointerEvents = isEnabled ? 'auto' : 'none';
        }
    });

    // Manejar fuente personalizada
    document.getElementById('fontFamily').addEventListener('change', (e) => {
        const customFontInput = document.getElementById('customFont');
        if (e.target.value === 'custom') {
            customFontInput.style.display = 'block';
            customFontInput.focus();
        } else {
            customFontInput.style.display = 'none';
        }
    });

    // Manejar menú colapsable de configuración avanzada
    document.getElementById('advancedConfigHeader').addEventListener('click', () => {
        const content = document.getElementById('advancedConfigContent');
        const toggleIcon = document.querySelector('#advancedConfigHeader .toggle-icon');
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            toggleIcon.textContent = '▲';
            toggleIcon.style.transform = 'rotate(180deg)';
        } else {
            content.style.display = 'none';
            toggleIcon.textContent = '▼';
            toggleIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Botones de vista previa
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            const input = document.getElementById(target);
            const url = input.value.trim();
            
            if (url) {
                showImagePreview(url);
            } else {
                showStatus('⚠️ Ingresa una URL válida primero', 'error', 2000);
            }
        });
    });
    
    // Modal de vista previa
    const modal = document.getElementById('previewModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Manejar vista previa del color de navbar
    const navbarColorInput = document.getElementById('navbarColor');
    const navbarColorPreview = document.getElementById('navbarColorPreview');
    if (navbarColorInput && navbarColorPreview) {
        navbarColorInput.addEventListener('input', (e) => {
            const color = e.target.value.trim();
            if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
                navbarColorPreview.style.backgroundColor = color;
                e.target.style.borderColor = '#ccc';
            } else {
                e.target.style.borderColor = '#ff0000';
            }
        });
    }

    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            document.getElementById('saveConfig').click();
        }
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });

    // Inicializar menú de configuración avanzada como colapsado
    const advancedContent = document.getElementById('advancedConfigContent');
    const toggleIcon = document.querySelector('#advancedConfigHeader .toggle-icon');
    if (advancedContent && toggleIcon) {
        advancedContent.style.display = 'none';
        toggleIcon.textContent = '▼';
        toggleIcon.style.transform = 'rotate(0deg)';
    }
    
    showStatus('⚙️ Configuración cargada', 'info', 2000);
});