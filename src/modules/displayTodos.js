import Todos from './Todos.js';
import completeTask from './completeTask.js';
import removeIcon from './assets/remove.png';

const displayTodos = () => {
  const todos = new Todos();
  todos.loadTasks();
  const tasks = todos.allTodos;

  const list = document.getElementById('todoList');
  list.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listDiv = document.createElement('ul');
    listDiv.classList.add('list__div');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item__div');
    const listItem = document.createElement('li');
    listItem.className = 'list__iem';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.id = 'checkBox';

    const ellipses = document.createElement('span');
    const moveIcon = document.createElement('i');
    moveIcon.className = 'fa-solid fa-ellipsis-vertical';
    const deletebtn = document.createElement('button');
    deletebtn.className = 'deletebtn';
    deletebtn.setAttribute('data-index', task.index);
    const deleteIcon = document.createElement('img');
    deleteIcon.src = removeIcon;
    deleteIcon.className = 'deleteIcon';
    const todoText = document.createElement('input');
    todoText.type = 'text';
    todoText.className = 'todoText ';
    todoText.readOnly = true;
    todoText.value = task.description;

    deletebtn.addEventListener('click', () => {
      const filteredTasks = tasks.filter((del) => del.index !== task.index);

      todos.allTodos = filteredTasks;
      todos.reindexTasks();
      listDiv.remove();
      todos.saveTasks();
    });

    checkbox.addEventListener('change', () => {
      completeTask(task.index, checkbox.checked);
      if (checkbox.checked) {
        todoText.classList.add('completed');
      } else {
        todoText.classList.remove('completed');
      }
    });

    list.appendChild(listDiv);
    listDiv.appendChild(itemDiv);
    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(listItem);

    listItem.appendChild(todoText);
    listDiv.appendChild(ellipses);
    ellipses.appendChild(deletebtn);
    deletebtn.appendChild(deleteIcon);
    ellipses.appendChild(moveIcon);
  });
};

export default displayTodos;
