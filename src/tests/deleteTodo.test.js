import { Todos } from "../modules/Todos";

describe('Todos', () => {
    describe('deleteTask', () => {
        beforeEach(() => {
            localStorage.clear();
        });

        it('should update the index property of remaining tasks after a task is deleted', () => {
            const todos = new Todos();
            todos.addTask('Buy milk');
            todos.addTask('Do laundry');
            todos.addTask('Clean house');

            todos.deleteTask(2);

            expect(todos.tasks.length).toBe(2);
            expect(todos.tasks[0].description).toBe('Buy milk');
            expect(todos.tasks[0].completed).toBe(false);
            expect(todos.tasks[0].index).toBe(1);
            expect(todos.tasks[1].description).toBe('Clean house');
            expect(todos.tasks[1].completed).toBe(false);
            expect(todos.tasks[1].index).toBe(2);

            const savedTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(savedTasks.length).toBe(2);
            expect(savedTasks[0].description).toBe('Buy milk');
            expect(savedTasks[0].completed).toBe(false);
            expect(savedTasks[0].index).toBe(1);
            expect(savedTasks[1].description).toBe('Clean house');
            expect(savedTasks[1].completed).toBe(false);
            expect(savedTasks[1].index).toBe(2);
        });


        it('should not delete a task if the index is invalid', () => {
            const todos = new Todos();
            todos.addTask('Buy milk');

            todos.deleteTask(2);

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
    });
});
