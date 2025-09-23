document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el Sistema de Pestañas (Tabs) ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentSections = document.querySelectorAll('.content-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            button.classList.add('active');
            const targetTab = button.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });


    // --- Código del Gestor de Tareas ---
    (() => {
        const form = document.getElementById('task-form');
        const descriptionInput = document.getElementById('task-description');
        const dateInput = document.getElementById('task-date');
        const priorityInput = document.getElementById('task-priority');
        const filterCheckbox = document.getElementById('filter-high-priority');
        const taskListUL = document.getElementById('task-list');
        let tasks = [];

        const renderTasks = () => {
            taskListUL.innerHTML = '';
            let tasksToRender = [...tasks].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

            if (filterCheckbox.checked) {
                tasksToRender = tasksToRender.filter(task => task.prioridad === 'Alta');
            }

            tasksToRender.forEach(task => {
                const li = document.createElement('li');
                if (task.completada) li.classList.add('completada');
                
                const taskDate = new Date(task.fecha + 'T00:00:00');
                const formattedDate = taskDate.toLocaleDateString('es-ES');

                li.innerHTML = `
                    <input type="checkbox" data-id="${task.id}" ${task.completada ? 'checked' : ''}>
                    <span class="descripcion">
                        <strong>${task.descripcion}</strong> - <small>${formattedDate}</small>
                    </span>
                    <span class="prioridad ${task.prioridad}">${task.prioridad}</span>
                `;
                taskListUL.appendChild(li);
            });
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTask = {
                id: Date.now(),
                descripcion: descriptionInput.value.trim(),
                fecha: dateInput.value,
                prioridad: priorityInput.value,
                completada: false
            };
            tasks.push(newTask);
            form.reset();
            renderTasks();
        });

        taskListUL.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') {
                const taskId = Number(e.target.dataset.id);
                const task = tasks.find(t => t.id === taskId);
                if (task) {
                    task.completada = e.target.checked;
                    renderTasks();
                }
            }
        });

        filterCheckbox.addEventListener('change', renderTasks);
    })();


    // --- Código de la Encuesta Tecnológica ---
    (() => {
        const form = document.getElementById('survey-form');
        const resultDiv = document.getElementById('survey-result');
        const commentsTextarea = document.getElementById('comments');
        const charCounter = document.getElementById('char-counter');

        commentsTextarea.addEventListener('input', () => {
            const remaining = commentsTextarea.maxLength - commentsTextarea.value.length;
            charCounter.textContent = `${remaining} caracteres restantes`;
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const favoriteLanguages = Array.from(document.querySelectorAll('input[name="lenguajes"]:checked')).map(cb => cb.value);
            const experienceLevel = document.querySelector('input[name="nivel"]:checked');

            if (favoriteLanguages.length === 0) {
                alert('Por favor, selecciona al menos un lenguaje.');
                return;
            }

            const learningChannels = Array.from(document.getElementById('learning-channels').selectedOptions).map(opt => opt.value);
            const comments = commentsTextarea.value.trim();

            let recommendation = favoriteLanguages.length >= 3 
                ? '¡Genial! Te recomendamos <strong>profundizar en fundamentos</strong>.'
                : '¡Excelente foco! Te recomendamos <strong>explorar proyectos guiados</strong>.';

            let reportHTML = `
                <h4>¡Gracias por tu respuesta!</h4>
                <p>Tu nivel es <strong>${experienceLevel.value}</strong> y tus lenguajes favoritos son <strong>${favoriteLanguages.join(', ')}</strong>.</p>
                <p>${recommendation}</p>
            `;
            if (learningChannels.length > 0) {
                reportHTML += `<p>Prefieres aprender con: <strong>${learningChannels.join(', ')}</strong>.</p>`;
            }
            if (comments) {
                reportHTML += `<p><strong>Comentario:</strong> <em>"${comments}"</em></p>`;
            }

            resultDiv.innerHTML = reportHTML;
            resultDiv.style.display = 'block';
        });
    })();
});