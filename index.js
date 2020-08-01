//Name: Vandit Parekh
//Student No.: 200412374

//Variable to store the user inputed value from the text box
let addItem = document.getElementById('inputText');
//Variable to access the submit button and call a onclick method
let submitButton = document.getElementById('submitButton');
//Variable to access the division to add ToDo's
let idforToDo = document.getElementById('idforToDo');
//Variable to access the division of the ToDo's marked: checked
let completedItem = document.getElementById('completedItem');

//Submit Button and onclick
submitButton.onclick = getToDoItem;

//Sort of a main method, where all the operations for this specific application occurs
function getToDoItem(){
    //Getting the value of the user inputed text, from the textbox
    let todo = addItem.value;
    //Creating 4 elements to present the user the ToDo's in a formatted manner
    let todoItem = document.createElement('input');
    let todoItemLabel = document.createElement('label');
    let delButton = document.createElement('button');
    let newline = document.createElement('br');

    //Setting the value of the textbox to null
    addItem.value = null;
    //Setting the input type as check box
    todoItem.type = "checkbox";
    //Setting up the input field
    todoItem.id = "todoListItem";
    //Relating and appending the label element to the input element
    todoItemLabel.htmlFor = todoItem;
    todoItemLabel.appendChild(document.createTextNode(todo));
    //Setting up the Delete button
    delButton.innerHTML = "Delete";
    delButton.setAttribute('id', 'delButton');

    //Goes to this function to add the elements to the page
    appendChildFunction("idforToDo");

    //Setting an onclick listener on the delete button
    delButton.onclick = function(){
        //If button is clicked, it goes to this function to delete the elements
        removeChildFunction("idforToDo");
    }
    //If the checkbox is clicked this method is called which in turn runs a function
    todoItem.onchange = function (e){
        //This sends the completed ToDo to the completed ToDO division and adds some style to it
        appendChildFunction("completedItem");
        todoItemLabel.style.textDecoration = "line-through";
        //Specifying actions that should take place if delete button is clicked
        delButton.onclick = function(){
            removeChildFunction("completedItem");           
        }
        //If the checkbox is clicked again, it sends the elements back up above and removes the style added to it
        todoItem.onchange = function(e){
            appendChildFunction("idforToDo");
            todoItemLabel.style.textDecoration = "none";

            delButton.onclick = function(){
                removeChildFunction("idforToDo");
            }
        }
    }

    //This function depending on where it was called from adds element to the screen
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
    //This function depending on where it was called from removes/deletes element from the screen
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
//End of Javascript file
