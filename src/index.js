import './style.css'

class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    render() {
        const list = document.getElementById("todoList");
        list.innerHTML = "";
        this.tasks.sort((a, b) => a.index - b.index);
        this.tasks.forEach((task) => {
            const listItem = document.createElement("li");
            listItem.innerText = task.description;
            if (task.completed) {
                listItem.classList.add("completed");
            }
            list.appendChild(listItem);
        });
    }
}

const tasks = [
    { description: "Go to the gym", completed: true, index: 1 },
    { description: "Go to canteen for food", completed: true, index: 2 },
    { description: "Do laundry", completed: false, index: 3 },
    { description: "Cook for family dinner", completed: false, index: 4 },
];

const todoList = new TodoList(tasks);
todoList.render();
