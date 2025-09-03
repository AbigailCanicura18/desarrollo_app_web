// Usamos el modo estricto para evitar errores comunes y escribir un código más seguro.
"use strict";

// ====================================================================== //
// ============ LÓGICA PARA EL EJERCICIO 1: REGISTRO DE ESTUDIANTE ======== //
// ====================================================================== //

// --- Almacenamiento y Selección de Elementos (Ejercicio 1) ---

// Arreglo para almacenar los registros de estudiantes como objetos.
const registros = [];

// Seleccionamos todos los elementos del DOM que necesitamos para el primer ejercicio.
const studentForm = document.getElementById('studentForm');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const cursoSelect = document.getElementById('curso');
const aceptaCheck = document.getElementById('aceptaReglamento');
const limpiarBtnEj1 = document.getElementById('limpiarBtnEj1');
const resultadoP_Ej1 = document.getElementById('resultadoEj1');
const errorP_Ej1 = document.getElementById('errorEj1');

// --- Funciones de Ayuda (Ejercicio 1) ---

/**
 * Normaliza un string capitalizando la primera letra de cada palabra.
 * @param {string} str - El texto de entrada (ej. "juan perez").
 * @returns {string} El texto formateado (ej. "Juan Perez").
 */
const capitalizarNombre = (str) => {
    if (!str) return ''; // Si el string está vacío, devuelve un string vacío.
    return str.toLowerCase() // Pasa todo a minúsculas primero.
        .split(' ') // Separa el string en un arreglo de palabras.
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra.
        .join(' '); // Une las palabras de nuevo en un solo string.
};

/**
 * Calcula y muestra un resumen de cuántos estudiantes hay por jornada.
 * @returns {string} Un texto con el resumen (ej. "Registrados: 3 en Mañana, 2 en Tarde").
 */
const actualizarResumenJornada = () => {
    // Usamos el método 'reduce' para contar eficientemente las ocurrencias de cada jornada.
    const conteoJornadas = registros.reduce((acc, estudiante) => {
        acc[estudiante.jornada] = (acc[estudiante.jornada] || 0) + 1;
        return acc;
    }, {}); // El objeto inicial es {}

    const resumenManana = conteoJornadas['Mañana'] || 0;
    const resumenTarde = conteoJornadas['Tarde'] || 0;

    return `<b>Resumen de registros:</b> ${resumenManana} en jornada de Mañana, ${resumenTarde} en jornada de Tarde.`;
};


// --- Manejadores de Eventos (Ejercicio 1) ---

// Evento que se dispara al intentar enviar el formulario.
studentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenimos que la página se recargue.

    // Limpiamos los mensajes de resultado y error anteriores.
    errorP_Ej1.textContent = '';
    resultadoP_Ej1.textContent = '';

    // 1. Capturamos los valores de los inputs.
    const nombre = nombreInput.value.trim(); // .trim() elimina espacios en blanco al inicio y final.
    const edad = parseInt(edadInput.value, 10);
    const curso = cursoSelect.value;
    const jornadaRadio = document.querySelector('input[name="jornada"]:checked');
    const jornada = jornadaRadio ? jornadaRadio.value : null; // Operador ternario para obtener el valor si está seleccionado.
    const aceptaReglamento = aceptaCheck.checked;

    // 2. Realizamos todas las validaciones.
    if (nombre.length < 2) {
        errorP_Ej1.textContent = 'El nombre debe tener al menos 2 caracteres.';
        return; // Detiene la ejecución de la función si hay un error.
    }
    if (isNaN(edad) || edad < 14 || edad > 100) {
        errorP_Ej1.textContent = 'La edad debe ser un número válido entre 14 y 100.';
        return;
    }
    if (!curso) { // Un string vacío se evalúa como 'false'.
        errorP_Ej1.textContent = 'Por favor, seleccione un curso.';
        return;
    }
    if (!jornada) {
        errorP_Ej1.textContent = 'Debe seleccionar una jornada.';
        return;
    }
    if (!aceptaReglamento) {
        errorP_Ej1.textContent = 'Debe aceptar el reglamento para registrarse.';
        return;
    }

    // 3. Si todas las validaciones pasan, creamos el objeto del estudiante.
    const nuevoEstudiante = {
        nombre: capitalizarNombre(nombre),
        edad,
        curso,
        jornada
    };

    // 4. Agregamos el nuevo estudiante al arreglo 'registros'.
    registros.push(nuevoEstudiante);

    // 5. Mostramos el mensaje de éxito y el resumen actualizado.
    const saludo = `¡Hola, <strong>${nuevoEstudiante.nombre}</strong>! Tu registro ha sido exitoso para la jornada de <strong>${nuevoEstudiante.jornada}</strong>.`;
    const resumen = actualizarResumenJornada();
    
    // Usamos innerHTML para que el navegador interprete las etiquetas <strong> y <br>.
    resultadoP_Ej1.innerHTML = `${saludo}<br><br>${resumen}`;

    // Limpiamos el formulario para un nuevo registro.
    studentForm.reset();
});

// Evento para el botón de limpiar del primer ejercicio.
limpiarBtnEj1.addEventListener('click', () => {
    studentForm.reset();
    resultadoP_Ej1.textContent = '';
    errorP_Ej1.textContent = '';
});


// ====================================================================== //
// ============ LÓGICA PARA EL EJERCICIO 2: CALCULADORA DE PROMEDIO ======= //
// ====================================================================== //

// --- Almacenamiento y Selección de Elementos (Ejercicio 2) ---

// Arreglo para almacenar las notas ingresadas.
const notas = [];

// Seleccionamos los elementos del DOM para el segundo ejercicio.
const notaInput = document.getElementById('nota');
const addNoteBtn = document.getElementById('addNoteBtn');
const calculateBtn = document.getElementById('calculateBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const resultadoP_Ej2 = document.getElementById('resultadoEj2');
const errorP_Ej2 = document.getElementById('errorEj2');


// --- Funciones de Ayuda (Ejercicio 2) ---

/**
 * Actualiza el párrafo de resultado para mostrar las notas actualmente en el arreglo.
 */
const renderizarNotas = () => {
    if (notas.length > 0) {
        // Muestra las notas unidas por comas dentro de corchetes.
        resultadoP_Ej2.innerHTML = `Notas ingresadas: <strong>[ ${notas.join(', ')} ]</strong>`;
    } else {
        resultadoP_Ej2.textContent = 'Aún no has ingresado notas.';
    }
};


// --- Manejadores de Eventos (Ejercicio 2) ---

// Evento para el botón "Agregar Nota".
addNoteBtn.addEventListener('click', () => {
    errorP_Ej2.textContent = ''; // Limpiar error previo.
    
    // 1. Capturamos y convertimos la nota a un número flotante.
    const nuevaNota = parseFloat(notaInput.value);

    // 2. Validamos que la nota esté en el rango correcto.
    if (isNaN(nuevaNota) || nuevaNota < 1.0 || nuevaNota > 7.0) {
        errorP_Ej2.textContent = 'Error: Debes ingresar una nota válida entre 1.0 y 7.0.';
        return; // Detiene la ejecución.
    }
    
    // 3. Si es válida, la agregamos al arreglo 'notas'.
    notas.push(nuevaNota);
    
    // 4. Actualizamos la vista, limpiamos el input y le devolvemos el foco.
    renderizarNotas();
    notaInput.value = '';
    notaInput.focus();
});

// Evento para el botón "Calcular Promedio".
calculateBtn.addEventListener('click', () => {
    errorP_Ej2.textContent = '';

    // 1. Verificamos si hay notas para calcular.
    if (notas.length === 0) {
        errorP_Ej2.textContent = 'No hay notas para calcular. Por favor, agrega al menos una.';
        resultadoP_Ej2.textContent = ''; // Limpiamos el resultado también.
        return;
    }
    
    // 2. Usamos 'reduce' para sumar todas las notas del arreglo.
    const sumaTotal = notas.reduce((total, nota) => total + nota, 0);
    const promedio = sumaTotal / notas.length;
    
    // 3. Usamos un operador ternario para determinar si está aprobado o reprobado.
    const estado = promedio >= 4.0 
        ? '<span style="color: green; font-weight: bold;">Aprobado</span>'
        : '<span style="color: red; font-weight: bold;">Reprobado</span>';

    // 4. Construimos el mensaje final con todos los detalles.
    resultadoP_Ej2.innerHTML = `
        <strong>Detalle del Cálculo:</strong><br>
        Total de notas: ${notas.length}<br>
        Listado de notas: [ ${notas.join(', ')} ]<br>
        <strong>Promedio Final: ${promedio.toFixed(2)}</strong><br>
        Resultado: ${estado}
    `;
});

// Evento para el botón "Eliminar Última".
removeLastBtn.addEventListener('click', () => {
if (notas.length > 0) {
       notas.pop(); // .pop() elimina el último elemento del arreglo.
       renderizarNotas(); // Actualizamos la vista de notas.
    errorP_Ej2.textContent = '';
} else {
    errorP_Ej2.textContent = 'No hay notas para eliminar.';
}
});

// Evento para el botón "Limpiar Todo".
clearAllBtn.addEventListener('click', () => {
    notas.length = 0; // Esta es una forma eficiente de vaciar un arreglo.
    resultadoP_Ej2.textContent = '';
    errorP_Ej2.textContent = '';
    notaInput.value = '';
});