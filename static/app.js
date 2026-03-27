document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function createTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = text;
        span.style.flex = '1';
        span.onclick = function() {
            span.classList.toggle('completed');
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            todoList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        return li;
    }

    addBtn.addEventListener('click', function() {
        const value = todoInput.value.trim();
        if (value) {
            const todoItem = createTodoItem(value);
            todoList.appendChild(todoItem);
            todoInput.value = '';
            todoInput.focus();
        }
    });

    todoInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});
