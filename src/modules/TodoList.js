class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    render() {
        const list = document.getElementById('todoList');
        list.innerHTML = '';
        this.tasks.sort((a, b) => a.index - b.index);
        this.tasks.forEach((task) => {
            const listItem = document.createElement('li');
            listItem.innerText = task.description;
            if (task.completed) {
                listItem.classList.add('completed');
            }
            list.appendChild(listItem);
        });
    }
}

export default TodoList