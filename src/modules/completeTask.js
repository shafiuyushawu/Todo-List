import Todos from './Todos.js';

const completeTask = (index, completed) => {
  const todos = new Todos();
  todos.loadTasks();
  const tasks = todos.allTodos;

  const taskIndex = tasks.findIndex((task) => task.index === index);
  tasks[taskIndex].completed = completed;
  todos.allTodos = tasks;
  todos.saveTasks();
};

export default completeTask;
