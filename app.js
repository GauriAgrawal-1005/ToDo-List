//Selectors
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);


//Functions

function addTodo(event){
    event.preventDefault(); //Prevent form from submitting automatically
    //ToDO Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo=document.createElement('li');
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark
    const completedButon = document.createElement('button');
    completedButon.innerHTML = '<i class="fas fa-check"></i>'
    completedButon.classList.add("complete-btn");
    todoDiv.appendChild(completedButon);
    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //CLear todoinput value
    todoinput.value="";
}