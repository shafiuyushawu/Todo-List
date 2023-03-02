class Todos {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    if (description.trim() === '') {
      return;
    }
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
    if (index < 1 || index > this.tasks.length) {
      return;
    }
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

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.reindexTasks();
    this.saveTasks();
  }

  updateTaskCompletion(index, newCompletionStatus) {
    if (index < 1 || index > this.tasks.length) {
      return;
    }
    this.tasks[index - 1].completed = newCompletionStatus;
    this.saveTasks();
  }
}

module.exports = Todos;