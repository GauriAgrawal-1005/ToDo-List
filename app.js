//Selectors
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);

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

    //Add ToDo to Local Storage
    saveLocalTodos(todoinput.value);

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

function deleteCheck(e){
    const item = e.target;
    //Delete ToDo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check Mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// function filterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }
//                 else{
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if(!todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }
//                 else{
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }


function saveLocalTodos(todo){
    //CHECK---HEY Do I already have things in there?
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}