document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM ---
    const topNav = document.querySelector('.top-nav');
    const allPages = document.querySelectorAll('.app-page');
    const alarmsListContainer = document.getElementById('alarms-list-container');
    const modal = document.getElementById('alarm-modal');
    const modalTitle = document.getElementById('modal-title');
    const alarmForm = document.getElementById('alarm-form');
    
    // Formularios
    const loginForm = document.getElementById('login-form');
    const resetForm = document.getElementById('reset-form');
    const signupForm = document.getElementById('signup-form');
    
    // Enlaces y Botones
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const createAccountLink = document.getElementById('create-account-link');
    const backToLoginLinks = document.querySelectorAll('.back-to-login');
    const searchInput = document.getElementById('search-input');
    const cancelBtn = document.getElementById('cancel-btn');
    const addAlarmBtn = document.getElementById('add-alarm-btn');
    const addRemedyFromStatusBtn = document.getElementById('add-remedy-from-status-btn');
    const goToAlarmsBtn = document.getElementById('go-to-alarms-btn');
    const goToAccountBtn = document.getElementById('go-to-account-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // --- ESTADO DE LA APLICACIÓN (DATOS) ---
    let alarms = [
        { id: 1, name: 'Paracetamol 500mg', dosage: '1 pastilla', time: '09:00', active: true },
        { id: 2, name: 'Ibuprofeno 600mg', dosage: '1 pastilla después de comer', time: '21:00', active: true },
        { id: 3, name: 'Omeprazol', dosage: '1 en ayunas', time: '06:30', active: false },
    ];

    // --- FUNCIONES ---
    const showPage = (pageId) => {
        allPages.forEach(page => page.style.display = 'none');
        document.getElementById(pageId).style.display = 'block';

        const authPages = ['login-screen', 'reset-screen', 'signup-screen'];
        if (authPages.includes(pageId)) {
            topNav.style.display = 'none';
        } else {
            topNav.style.display = 'flex';
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.id === `nav-${pageId.split('-')[0]}`) {
                    link.classList.add('active');
                }
            });
        }
    };

    const renderAlarms = (alarmsToRender = alarms) => {
        alarmsListContainer.innerHTML = '';
        if (alarmsToRender.length === 0) {
            alarmsListContainer.innerHTML = `<p style="padding: 40px; text-align: center; color: #666;">No se encontraron alarmas.</p>`;
            return;
        }
        
        // Ordenar alarmas por hora
        alarmsToRender.sort((a, b) => a.time.localeCompare(b.time));

        alarmsToRender.forEach(alarm => {
            const alarmElement = document.createElement('div');
            alarmElement.className = `alarm-item ${!alarm.active ? 'inactive' : ''}`;
            alarmElement.dataset.id = alarm.id;
            // HTML con las nuevas clases para los botones de íconos
            alarmElement.innerHTML = `
                <div class="time-info">
                    <p class="time">${alarm.time}</p>
                </div>
                <div class="remedy-info">
                    <strong>${alarm.name}</strong>
                    <span>${alarm.dosage}</span>
                </div>
                <div class="alarm-actions">
                    <label class="switch">
                        <input type="checkbox" class="toggle-active" ${alarm.active ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <button class="btn-icon edit-btn" title="Editar"><i class="fas fa-pencil-alt"></i></button>
                    <button class="btn-icon delete-btn" title="Eliminar"><i class="fas fa-trash"></i></button>
                </div>
            `;
            alarmsListContainer.appendChild(alarmElement);
        });
    };

    const openModal = (alarm = null) => {
        alarmForm.reset();
        if (alarm) {
            modalTitle.textContent = 'Editar Alarma';
            document.getElementById('alarm-id').value = alarm.id;
            document.getElementById('remedy-name').value = alarm.name;
            document.getElementById('remedy-dosage').value = alarm.dosage;
            document.getElementById('remedy-time').value = alarm.time;
        } else {
            modalTitle.textContent = 'Agregar Nueva Alarma';
            document.getElementById('alarm-id').value = '';
        }
        modal.style.display = 'flex';
    };
    
    const closeModal = () => modal.style.display = 'none';
    
    // --- LÓGICA DE EVENTOS ---
    forgotPasswordLink.addEventListener('click', (e) => { e.preventDefault(); showPage('reset-screen'); });
    createAccountLink.addEventListener('click', (e) => { e.preventDefault(); showPage('signup-screen'); });
    backToLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); showPage('login-screen'); });
    });

    loginForm.addEventListener('submit', (e) => { e.preventDefault(); showPage('status-screen'); renderAlarms(); });
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Si tu correo está registrado, recibirás un enlace para restablecer tu contraseña.');
        showPage('login-screen');
    });
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
        showPage('login-screen');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.target.id.replace('nav-', '') + '-screen';
            showPage(pageId);
        });
    });
    
    goToAlarmsBtn.addEventListener('click', () => showPage('alarms-screen'));
    goToAccountBtn.addEventListener('click', () => showPage('account-screen'));
    addRemedyFromStatusBtn.addEventListener('click', () => { showPage('alarms-screen'); openModal(); });

    addAlarmBtn.addEventListener('click', () => openModal());
    cancelBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => e.target === modal && closeModal());

    alarmForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('alarm-id').value;
        const newAlarmData = {
            name: document.getElementById('remedy-name').value,
            dosage: document.getElementById('remedy-dosage').value,
            time: document.getElementById('remedy-time').value,
        };
        if (id) {
            alarms = alarms.map(alarm => alarm.id == id ? { ...alarm, ...newAlarmData } : alarm);
        } else {
            newAlarmData.id = Date.now();
            newAlarmData.active = true;
            alarms.push(newAlarmData);
        }
        renderAlarms();
        closeModal();
    });

    alarmsListContainer.addEventListener('click', (e) => {
        const targetElement = e.target;
        const alarmItem = targetElement.closest('.alarm-item');
        if (!alarmItem) return;
        
        const alarmId = parseInt(alarmItem.dataset.id);
        const alarmToActOn = alarms.find(alarm => alarm.id === alarmId);

        if (targetElement.closest('.delete-btn')) {
            if (confirm('¿Estás seguro de que quieres eliminar esta alarma?')) {
                alarms = alarms.filter(alarm => alarm.id !== alarmId);
                renderAlarms();
            }
        } else if (targetElement.closest('.edit-btn')) {
            openModal(alarmToActOn);
        } else if (targetElement.matches('.toggle-active')) {
            alarmToActOn.active = targetElement.checked;
            // No es necesario volver a renderizar todo, solo actualizar la clase
            alarmItem.classList.toggle('inactive', !alarmToActOn.active);
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredAlarms = alarms.filter(alarm => alarm.name.toLowerCase().includes(searchTerm));
        renderAlarms(filteredAlarms);
    });

    // --- INICIALIZACIÓN ---
    showPage('login-screen');
});