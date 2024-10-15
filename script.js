document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
});
