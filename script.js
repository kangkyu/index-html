var addInput = document.getElementById('todo-add-field');
var addButton = document.getElementById('todo-add-button');
var ul = document.getElementsByTagName('ul')[0];

addButton.addEventListener('click', function() {
  if (addInput.value.length > 0) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(addInput.value));
    ul.appendChild(li);
  }
});

addInput.addEventListener('keypress', function(e) {
  if (addInput.value.length > 0 && e.keyCode === 13) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(addInput.value));
    ul.appendChild(li);
  }
});
