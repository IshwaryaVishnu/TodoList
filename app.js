const textarea = document.querySelector('.textarea');
const addButton = document.querySelector('.buttoninput');
const todoList = document.querySelector('.todolist');

addButton.addEventListener('click', () => {
    // Create a new task/item element
    const task = document.createElement('div');
    task.classList.add('task');
    const taskText = document.createElement('span');
    taskText.innerText = textarea.value;
    task.appendChild(taskText);
    // Add edit and delete buttons to the task
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    task.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    task.appendChild(deleteButton);
    // Add the task to the to-do list
    todoList.appendChild(task);
    // Clear the input field
    textarea.value = '';
});
todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const task = target.parentElement;
        if (target.innerText === 'Edit') {
            // Replace the task text with an input field for editing
            const input = document.createElement('input');
            input.type = 'text';
            input.value = task.querySelector('span').innerText;
            task.replaceChild(input, task.querySelector('span'));
            target.innerText = 'Save';
        } else if (target.innerText === 'Save') {
            // Replace the input field with the edited task text
            const span = document.createElement('span');
            span.innerText = target.previousSibling.value;
            task.replaceChild(span, target.previousSibling);
            target.innerText = 'Edit';
        } else if (target.innerText === 'Delete') {
            // Remove the task from the to-do list
            todoList.removeChild(task);
        }
    }
});
