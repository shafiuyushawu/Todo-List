import Todos from '../modules/Todos.js';

describe('Todos', () => {
  describe('addTask', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should add a new task to the tasks array and save to local storage', () => {
      const todos = new Todos();

      todos.addTask('Buy milk');

      expect(todos.tasks.length).toBe(1);
      expect(todos.tasks[0].description).toBe('Buy milk');
      expect(todos.tasks[0].completed).toBe(false);
      expect(todos.tasks[0].index).toBe(1);

      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(savedTasks.length).toBe(1);
      expect(savedTasks[0].description).toBe('Buy milk');
      expect(savedTasks[0].completed).toBe(false);
      expect(savedTasks[0].index).toBe(1);
    });

    it('should not add a task if the description is empty', () => {
      const todos = new Todos();

      todos.addTask('');

      expect(todos.tasks.length).toBe(0);
      expect(localStorage.getItem('tasks')).toBeNull();
    });
  });
});
