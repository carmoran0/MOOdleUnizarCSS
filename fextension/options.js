// Configuración por defecto
const DEFAULT_CONFIG = {
    images: {
        background: "https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peterIRL.png",
        navbarBg: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/giggity.png',
        calendarBg: "https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/gatos.gif",
        peter: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/peter.jpg',
        peterPng: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/PETERRRRR.png',
        logo: 'https://raw.githubusercontent.com/carmoran0/MOOdleUnizarCSS/refs/heads/main/assets/mooodle.png',
        userProfile: 'https://www.thispersondoesnotexist.com/',
        screamer1: 'https://raw.githubusercontent.com/carmoran0/carmoran0.github.io/refs/heads/main/images/screamer1.jpeg'
    },
    fontFamily: 'Comic Sans MS',
    customFont: '',
    textsToHide: ['Recursos y manuales', 'ADD', 'Política de privacidad'],
    urlsToHide: ['add.unizar.es', 'privacidad', 'recursos', 'manuales'],
    features: {
        enableBackgroundImages: true,
        enableImageReplacements: true,
        enableHideElements: true,
        enableCustomParagraph: true
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
    // Imágenes
    Object.keys(config.images).forEach(key => {
        const input = document.getElementById(key);
        if (input) input.value = config.images[key];
    });
    
    // Fuente
    const fontSelect = document.getElementById('fontFamily');
    const customFontInput = document.getElementById('customFont');
    
    if (Object.values(fontSelect.options).some(opt => opt.value === config.fontFamily)) {
        fontSelect.value = config.fontFamily;
        customFontInput.style.display = 'none';
    } else {
        fontSelect.value = 'custom';
        customFontInput.value = config.fontFamily;
        customFontInput.style.display = 'block';
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
    
    // Imágenes
    Object.keys(DEFAULT_CONFIG.images).forEach(key => {
        const input = document.getElementById(key);
        if (input) config.images[key] = input.value || DEFAULT_CONFIG.images[key];
    });
    
    // Fuente
    const fontSelect = document.getElementById('fontFamily');
    const customFontInput = document.getElementById('customFont');
    
    if (fontSelect.value === 'custom') {
        config.fontFamily = customFontInput.value || DEFAULT_CONFIG.fontFamily;
    } else {
        config.fontFamily = fontSelect.value;
    }
    config.customFont = customFontInput.value;
    
    // Textos y URLs a ocultar
    config.textsToHide = document.getElementById('textsToHide').value
        .split(',')
        .map(text => text.trim())
        .filter(text => text);
        
    config.urlsToHide = document.getElementById('urlsToHide').value
        .split(',')
        .map(url => url.trim())
        .filter(url => url);
    
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
    
    showStatus('⚙️ Configuración cargada', 'info', 2000);
});