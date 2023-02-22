
class Todos {
    constructor(description, completed, index) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }

    render() {
        const taskItem = document.createElement('li');
        const taskText = document.createTextNode(this.description);

        taskItem.appendChild(taskText);
        taskItem.classList.add('task-item');

        if (this.completed) {
            taskItem.classList.add('completed');
        }

        return taskItem;
    }
}

export default Todos; 