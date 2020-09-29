//
// Lista de tareas
//

// Esto es un cambio.
console.log('Hola mundo!');

// Formulario para añadir tareas.
const formulario = document.getElementById('new-task-form');
// Lista de tareas (DOM).
const lista = document.getElementById('task-list');
// Contador de tareas (para asignar un id único a cada tarea).
let contadorTareas = 0;
// Lista de tareas (Array).
const tareas = [];

// Event handler para el evento 'submit' del formulario.
// Crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();

  // Creación de la nueva tarea en el DOM.

  // Item de la lista
  const item = document.createElement('li');
  item.className = 'task-list__item';
  // Checkbox.
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${contadorTareas}`);
  // Label.
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${contadorTareas}`);
  label.innerHTML = `${formulario.elements[0].value} - ${formulario.elements[1].value}`;
  // Se agregan elementos.
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);

  // Crea un objeto que representa la nueva tarea.
  const miTarea = {
    id: contadorTareas,
    nombre: formulario.elements[0].value,
    completo: false,
    fecha: formulario.elements[1].value,
  };

  // Agrega el objeto en el array.
  tareas.push(miTarea);

  // Incrementa el contador de tareas.
  contadorTareas++;
  // Reseteamos el form.
  formulario.elements[0].value = '';
})
