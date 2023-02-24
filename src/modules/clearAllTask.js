import displayTodos from './displayTodos.js';

const clearAllTask = () => {
  const clearCompleted = document.querySelector('#clearCompleted');
  clearCompleted.addEventListener('click', () => {
    let todoList = JSON.parse(localStorage.getItem('tasks'));
    todoList = todoList.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(todoList));
    displayTodos();
  });
};

export default clearAllTask;
