import {    getStoredTasks, saveTasksToLocalStorage, createTask, updateTaskStatus, deleteTask } from "spript/localStorage.js"
/*-------- Atributions -------*/
let input = document.getElementById("maininput");
let form = document.getElementById("addtaskform");
let todoArea = document.getElementById("to-do-area");
let addBtn = document.getElementById("addBtn");

/*--------- Functions ---------*/
function createButtons(divToDo){

    

    //done button create and append
    let doneBtn = document.createElement("button");
    let doneSpan = document.createElement("span");
    doneSpan.classList.add("material-symbols-outlined");
    doneBtn.classList.add("doneBtn");
    doneSpan.innerText = "done";
    doneBtn.appendChild(doneSpan);
    divToDo.appendChild(doneBtn);

    //delete button create and append
    let deleteBtn = document.createElement("button");
    let deleteSpan = document.createElement("span");
    deleteSpan.classList.add("material-symbols-outlined");
    deleteSpan.innerText = "delete";
    deleteBtn.appendChild(deleteSpan);
    // (ignorar) append child delete btn estava aqui ---
    deleteBtn.classList.add("hide");
    deleteBtn.classList.add("deleteBtn")
    

    doneBtn.addEventListener("click", function(){
        divToDo.classList.add("done");
        doneBtn.remove();
        divToDo.appendChild(deleteBtn);
        deleteBtn.classList.remove("hide");


        todoArea.appendChild(divToDo);
        divToDo.classList.remove("todo");

    });

    deleteBtn.addEventListener("click", function(){
       
        //fade-out animation when delete task
        divToDo.classList.add("fadeOut")
        setTimeout(() => {
            divToDo.remove();
        }, 500)
        
    });

};

function createTasks(){

    

    //saveTasksToLocalStorage();


    //remove the message "Nenhuma tarefa adicionada ainda :("
    let p = document.getElementById("message");
    if(p){p.remove()};

    let toDoText = input.value;

    if(!toDoText){
        input.focus();
        return alert("Dê um nome para sua tarefa");
    }

    let divToDo = document.createElement("div");
    divToDo.classList.add("todo");

    let li = document.createElement("li");
    li.innerHTML = `<input type="text" class="taskName" value=" ${toDoText} " readonly>`;
    divToDo.appendChild(li);

    createButtons(divToDo);

    // add task animation
   setTimeout(() => {
        divToDo.classList.add("taskAddAnm")
    }, 300);

    todoArea.appendChild(divToDo);

    input.focus();
    input.value = "";
}



/*----------- Events ----------*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

addBtn.addEventListener("click", function () {
    createTasks();
})

window.addEventListener("load", getStoredTasks())