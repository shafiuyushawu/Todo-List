import Todos from '../modules/Todos.js'
describe('clear all completed task', () => {
  it('should remove all completed task  s from  the tasks array', () => {
    const todos = new Todos()
    todos.addTask('Eat launch at noon')
    todos.addTask('Do the dishes')
    todos.addTask('Hit the gym')
    todos.allTodos[0].completed = true
    todos.allTodos[1].completed = true
    todos.clearCompletedTasks()
    expect(todos.allTodos.length).toBe(1)
    expect(todos.allTodos[0].description).toBe('Hit the gym')
  })
})
