//
// Lista de tareas
//

//
// Modelo.
//

// Contador de tareas (para asignar un id único a cada tarea).
let contadorTareas = 0;
// Lista de tareas (Array).
let tareas = [];

// addTask(): Agrega una tarea en la lista.
function addTask(nombreTarea, fechaTarea, completoTarea) {
  // Crea un objeto que representa la nueva tarea.
  const nuevaTarea = {
    id: contadorTareas,
    nombre: nombreTarea,
    completo: completoTarea,
    fecha: fechaTarea,
  };

  // Agrega el objeto en el array.
  tareas.push(nuevaTarea);

  // Incrementa el contador de tareas.
  contadorTareas++;

  // Retorna la nueva tarea que se añadió a la lista.
  return nuevaTarea;
}

//
// Vista.
//

// Lista de tareas (DOM).
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // Item de la lista
  const item = document.createElement('li');
  item.className = 'task-list__item';
  // Checkbox.
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  // Label.
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
  // Se agregan elementos.
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);
}

//
// Controlador.
//

// Formulario para añadir tareas.
const formulario = document.getElementById('new-task-form');

// Event handler para el evento 'submit' del formulario.
// Crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();

  // Agrega el nuevo ítem (modelo).
  const tarea = addTask(formulario.elements[0].value, formulario.elements[1].value, false);
  // Se despliega la nueva tarea en el DOM.
  appendTaskDOM(tarea);

  // Reseteamos el form.
  formulario.elements[0].value = '';
})
