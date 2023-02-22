import Todos from "./modules/Todos.js";

const tasks = [
    new Todos('Buy groceries', false, 1),
    new Todos('Do laundry', true, 2),
    new Todos('Clean room', false, 3),
];

function renderTodos() {
    const todoList = document.getElementById('todo-list');

    tasks.sort((a, b) => a.index - b.index);

    tasks.forEach((task) => {
        todoList.appendChild(task.render());
    });
}

export default renderTodos;