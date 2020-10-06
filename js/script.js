//
// Lista de tareas
//

// Modelo.

// Lista de tareas (Array).
let tareas = [];
const datosLocalStorage = localStorage.getItem('tareas');
if (datosLocalStorage) {
  tareas = JSON.parse(datosLocalStorage);
}

console.log(tareas);

// Contador de tareas (para asignar un id único a cada tarea).
let contadorTareas = 0;

function addTask(nombreTarea, fechaTarea, completoTarea) {
  // Crea un objeto que representa la nueva tarea.
  const miTarea = {
    id: contadorTareas,
    nombre: nombreTarea,
    completo: completoTarea,
    fecha: fechaTarea,
  };

  // Agrega el objeto en el array.
  tareas.push(miTarea);
  
  // Incrementa el contador de tareas.
  contadorTareas++;

  appendTaskDOM(miTarea);

  localStorage.setItem('tareas', JSON.stringify(tareas));

  console.log(tareas);
}

// Vista.

// Lista de tareas (DOM).
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // Creación de la nueva tarea en el DOM.

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

for (let i = 0; i < tareas.length; i++) {
  appendTaskDOM(tareas[i]);
}

// Contralador.

// Formulario para añadir tareas.
const formulario = document.getElementById('new-task-form');

// Event handler para el evento 'submit' del formulario.
// Crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();

  addTask(formulario.elements[0].value, formulario.elements[1].value, false);

  // Reseteamos el form.
  formulario.elements[0].value = '';
  formulario.elements[1].value = '';
})
