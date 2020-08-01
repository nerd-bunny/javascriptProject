let addItem = document.getElementById('inputText');
let submitButton = document.getElementById('submitButton');
let idforToDo = document.getElementById('idforToDo');
let completedItem = document.getElementById('completedItem');

submitButton.onclick = getToDoItem;

function getToDoItem(){
    let todo = addItem.value;
    let todoItem = document.createElement('input');
    let todoItemLabel = document.createElement('label');
    let delButton = document.createElement('button');
    let newline = document.createElement('br');

    addItem.value = null;

    todoItem.type = "checkbox";
    todoItem.id = "todoListItem";
    todoItemLabel.htmlFor = todoItem;
    todoItemLabel.appendChild(document.createTextNode(todo));

    appendChildFunction("idforToDo");

    delButton.innerHTML = "Delete";
    delButton.setAttribute('id', 'delButton');

    delButton.onclick = function(){
        removeChildFunction("idforToDo");
    }

    todoItem.onchange = function (e){

        appendChildFunction("completedItem");
        todoItemLabel.style.textDecoration = "line-through";

        delButton.onclick = function(){
            removeChildFunction("completedItem");           
        }

        todoItem.onchange = function(e){
            appendChildFunction("idforToDo");
            todoItemLabel.style.textDecoration = "none";

            delButton.onclick = function(){
                removeChildFunction("idforToDo");
            }
        }
    }

    function appendChildFunction(appendParentID) {
        if(appendParentID === "idforToDo"){
            idforToDo.appendChild(todoItem);
            idforToDo.appendChild(todoItemLabel);
            idforToDo.appendChild(delButton);
            idforToDo.appendChild(newline);
        }
        else if(appendParentID === "completedItem"){
            completedItem.appendChild(todoItem);
            completedItem.appendChild(todoItemLabel);
            completedItem.appendChild(delButton);
            completedItem.appendChild(newline);
        }
    }

    function removeChildFunction(removeParentID) {
        if(removeParentID === "idforToDo"){
            idforToDo.removeChild(todoItemLabel);
            idforToDo.removeChild(delButton);
            idforToDo.removeChild(newline);
            idforToDo.removeChild(todoItem);
        }
        else if(removeParentID === "completedItem"){
            completedItem.removeChild(todoItemLabel);
            completedItem.removeChild(delButton);
            completedItem.removeChild(newline);
            completedItem.removeChild(todoItem);
        }
    }
}
