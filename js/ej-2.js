function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
  
        if (taskInput.value.trim() === "") {
          alert('Por favor, ingresa una tarea válida.');
          return;
        }
  
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
          ${taskInput.value}
          <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Eliminar</button>
        `;
  
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Limpiar el input después de agregar la tarea
      }
  
      function removeTask(button) {
        const taskItem = button.parentNode;
        const taskList = document.getElementById('taskList');
        taskList.removeChild(taskItem);
      }