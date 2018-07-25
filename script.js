var body = document.getElementById('gradient');
// var randomColor = function() {
//   return '#' + Math.random().toString(16).substring(2, 8);
// }
// body.style.background = "linear-gradient(to right, " + randomColor() + ", " + randomColor() + ")"

var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
}

// color1.addEventListener('input', function() {
//   setGradient();
// });

// color2.addEventListener('input', function() {
//   setGradient();
// });

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
