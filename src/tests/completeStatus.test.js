import Todos from '../modules/Todos.js';

describe('complete status', () => {
  it('should update the complete status of the task at the given index', () => {
    const todos = new Todos();
    todos.addTask('Eat launch at noon');
    todos.addTask('Do the dishes');
    todos.addTask('Hit the gym');

    const index = 2;
    const newCompleteStatus = true;
    todos.updateTaskCompletion(index, newCompleteStatus);

    expect(todos.allTodos[index - 1].completed).toBe(newCompleteStatus);
  });
});