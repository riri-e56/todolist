var input = document.getElementById('input');
var addBtn = document.getElementById('addbtn');

var list = document.getElementById('list');

addBtn.addEventListener('click', function() {

    if (input.value == "") {
        alert("input must not be empty");
        return;
    }

    // Create an element
    var li = document.createElement('li');
    li.innerText = input.value;

    // Create button
    var button = document.createElement('button');
    button.innerText = "remove";
    button.className = "delete";

    button.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(button);

    // Append the element
    list.appendChild(li);

    input.value = "";

});

