class TodoList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  render() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    this.tasks.sort((a, b) => a.index - b.index);
    this.tasks.forEach((task) => {
      const listDiv = document.createElement('ul');
      listDiv.classList.add('list__div');
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item__div');
      const listItem = document.createElement('li');
      listItem.className = 'list__iem';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'checkbox';

      const ellipses = document.createElement('span');
      ellipses.innerHTML = '<i id="edit" class="fa-solid fa-ellipsis-vertical"></i>';
      const todoText = document.createElement('span');
      todoText.innerText = task.description;
      if (task.completed) {
        todoText.classList.add('completed');
      }

      list.appendChild(listDiv);
      listDiv.appendChild(itemDiv);
      itemDiv.appendChild(checkbox);
      itemDiv.appendChild(listItem);

      listItem.appendChild(todoText);
      listDiv.appendChild(ellipses);
    });
  }
}

export default TodoList;