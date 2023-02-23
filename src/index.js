import './style.css';
import TodoList from './modules/TodoList.js';

const tasks = [
  { description: 'Go to the gym', completed: true, index: 1 },
  { description: 'Go to canteen for food', completed: false, index: 2 },

];

const todoList = new TodoList(tasks);
todoList.render();
