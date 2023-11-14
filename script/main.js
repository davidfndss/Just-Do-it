import {   getStoredTasks, saveTasksToLs, createTaskOnLs, updateTaskStatus, deleteTsk } from "/script/localStorage.js"
/*-------- Atributions -------*/
const input = document.getElementById("maininput")
const form = document.getElementById("addtaskform")
const todoArea = document.getElementById("to-do-area")
const addBtn = document.getElementById("addBtn")

/*--------- Functions ---------*/

function createButton(className,clickHandler, divToDo){
    const button = document.createElement("button")
    const span = document.createElement("span")
    span.classList.add("material-symbols-outlined")
    //button.classList.add(className)
    span.classList.add(className+"Btn")
    span.textContent = className
    button.appendChild(span)
    divToDo.appendChild(button)

    button.addEventListener("click", clickHandler)
    return button
}

const markAsDone = (divToDo, doneBtn, deleteBtn) => {
    divToDo.classList.add("done")
    doneBtn.remove()
    divToDo.appendChild(deleteBtn)
    deleteBtn.classList.remove("hide")

    todoArea.appendChild(divToDo)
    divToDo.classList.remove("todo")
}

const deleteTask = (divToDo) => {
    //fade-out animation when delete task
    divToDo.classList.add("fadeOut")
    setTimeout(() => {
        divToDo.remove()
    }, 500)
}

function createButtons(divToDo){
    const doneBtn = createButton("done", () => markAsDone(divToDo, doneBtn, deleteBtn),divToDo)
    const deleteBtn = createButton("delete", () => deleteTask(divToDo),divToDo)
    deleteBtn.classList.add("hide")
}

function createTaskElement(toDoText){ 
    //remove the message "Nenhuma tarefa adicionada ainda :("

    let divToDo = document.createElement("div")
    divToDo.classList.add("todo")

    let li = document.createElement("li")
    li.innerHTML = `<input type="text" class="taskName" value=" ${toDoText} " readonly>`
    divToDo.appendChild(li)

    createButtons(divToDo)
    todoArea.appendChild(divToDo)
    addTaskAnimation(divToDo)
}

function createTask(){
    let p = document.getElementById("message")
    if(p){p.remove()}

    let toDoText = input.value

    if(!toDoText){
        input.focus()
        return alert("Dê um nome para sua tarefa")
    }

    createTaskElement(toDoText)

    input.focus()
    input.value = ""
}

const addTaskAnimation = (divToDo) => {
    setTimeout(() => {
        divToDo.classList.add("taskAddAnm")
    }, 300)
}


/*----------- Events ----------*/
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

addBtn.addEventListener("click", function () {
    createTask()
})

window.addEventListener("load", getStoredTasks())