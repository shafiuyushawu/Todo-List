import Todos from './Todos.js';
import displayTodos from './displayTodos.js';
import editTodos from './editTodos.js';

const todoForm = document.getElementById('todoForm');
const todoDescription = document.getElementById('todoDescription');

const todos = new Todos();

const addTodos = () => {
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (todoDescription.value !== '') {
      todos.addTask(todoDescription.value);
      todoDescription.value = '';
      displayTodos();
      editTodos();
    }
  });
};

export default addTodos;