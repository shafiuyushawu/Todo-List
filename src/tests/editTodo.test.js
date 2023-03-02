import Todos from '../modules/Todos.js';

describe('editTask', () => {
  it('shouldd update the description of the task at the given index', () => {
    const todos = new Todos();
    todos.addTask('Wash dishes');
    todos.addTask('Visit a friend');
    todos.addTask('Go to market');

    const index = 2;
    const newDescription = 'Go to gym';
    todos.editTask(index, newDescription);

    expect(todos.allTodos[index - 1].description).toBe(newDescription);
  });
});