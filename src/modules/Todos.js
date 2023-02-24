class Todos {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const newTask = {
      description,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  get allTodos() {
    return this.tasks;
  }

  set allTodos(tasks) {
    this.tasks = tasks;
    this.saveTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index - 1, 1);
    this.reindexTasks();
    this.saveTasks();
  }

  editTask(index, newDescription) {
    this.tasks[index - 1].description = newDescription;
    this.saveTasks();
  }

  reindexTasks() {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      this.tasks = savedTasks;
    }
  }

  clearAllTask() {
    this.tasks = [];
    this.saveTasks();
  }

  clearIncompleteTasks() {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.reindexTasks();
  }
}

export default Todos;
