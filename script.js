var addInput = document.getElementById('todo-add-field');
var addButton = document.getElementById('todo-add-button');
var ul = document.getElementsByTagName('ul')[0];

function addItem() {
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(addInput.value));
  ul.appendChild(li);
  addInput.value = '';
}

var addItemByButtonClick = function() {
  if (addInput.value.length > 0) {
    addItem();
  }
}

addButton.addEventListener('click', addItemByButtonClick);

var addItemByEnter = function(e) {
  if (addInput.value.length > 0 && e.keyCode === 13) {
    addItem();
  }
}

addInput.addEventListener('keypress', addItemByEnter);
