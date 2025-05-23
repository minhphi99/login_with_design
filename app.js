const addBtn = document.getElementById('addBtn');
const inputBox = document.getElementById('input');
const taskList = document.getElementById('taskList');

let list = [];

// Add Task
function addTask(name) {
    const newTask = {
        text: name,
        status: false
    };
    list.push(newTask);
}

// Toggle Task Status
function toggleStatus(name) {
    const task = list.find(t => t.text === name);
    if (task) {
        task.status = !task.status;
    }
}

// Delete Task
function deleteTask(name) {
    list = list.filter(t => t.text !== name);
}

// Render Tasks to DOM
function renderTasks() {
    taskList.innerHTML = ''; // Clear current list

    // Sort: incomplete first, complete last
    const sortedList = [...list].sort((a, b) => a.status - b.status);

    sortedList.forEach((task) => {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.innerHTML = task.text;
        taskSpan.classList.add('task');
        if (task.status) {
            taskSpan.classList.add('checked');
        }

        // Toggle completion on click
        taskSpan.onclick = () => {
            toggleStatus(task.text);
            renderTasks(); // Re-render after toggle
        };

        const closeIcon = document.createElement('span');
        closeIcon.innerHTML = "\u00d7";
        closeIcon.classList.add('close');

        closeIcon.onclick = () => {
            deleteTask(task.text);
            renderTasks(); // Re-render after delete
        };

        li.appendChild(taskSpan);
        li.appendChild(closeIcon);
        taskList.appendChild(li);
    });
}

// Add button logic
addBtn.addEventListener('click', function () {
    const inputValue = inputBox.value.trim();

    if (inputValue === '') {
        alert('You must add a task');
    } else {
        addTask(inputValue);
        inputBox.value = '';
        renderTasks();
    }
});
