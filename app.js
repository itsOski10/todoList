const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoItems = document.getElementById('todo-items');

addButton.addEventListener('click', function() {
  const todoText = todoInput.value;
  const todoItem = document.createElement('li');
  todoItem.innerText = todoText;
  todoItems.appendChild(todoItem);
  todoInput.value = '';
});

