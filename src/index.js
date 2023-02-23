import './style.css';
import TodoList from './modules/TodoList.js';

const tasks = [
    { description: 'Go to the gym', completed: true, index: 1 },
    { description: 'Go to canteen for food', completed: true, index: 2 },
    { description: 'Do laundry', completed: false, index: 3 },
    { description: 'Cook for family dinner', completed: false, index: 4 },
];

const todoList = new TodoList(tasks);
todoList.render();
