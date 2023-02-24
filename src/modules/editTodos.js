import Todos from './Todos.js';

const todos = new Todos();

const editTodos = () => {
  const todoText = document.querySelectorAll('.todoText');
  todoText.forEach((todoTxt) => {
    const eventClick = () => {
      todoTxt.readOnly = false;
      todoTxt.style.background = '#c2e9f0';
    };
    todoTxt.addEventListener('click', eventClick);
    const eventFocus = () => {
      todoTxt.style.background = 'none';
      todos.allTodos.forEach((task) => {
        if (task.index === parseInt(todoTxt.dataset.index, 10)) {
          task.description = todoTxt.value;
          todos.saveTasks();
        }
      });
    };
    todoTxt.addEventListener('focusout', eventFocus);
  });
};

export default editTodos;