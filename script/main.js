import {   getStoredTasks, saveTasksToLs, createTaskOnLs, findTaskIndexOnLs, updateTaskStatus, deleteTaskOnLs } from "/script/localStorage.js"
/*-------- Atributions -------*/
const input = document.getElementById("maininput")
const form = document.getElementById("addtaskform")
const todoArea = document.getElementById("to-do-area")
const addBtn = document.getElementById("addBtn")

/*--------- Functions ---------*/

function createButton(btnName,className,clickHandler, divToDo){
    const button = document.createElement("button")
    const span = document.createElement("span")
    span.classList.add("material-symbols-outlined")
    button.classList.add(className)
    span.textContent = btnName
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

    const getTextOfToDoTask = divToDo.children[0].children[0].value.trim()

    updateTaskStatus(findTaskIndexOnLs(divToDo),true)

}

const deleteTask = (divToDo) => {
    //fade-out animation when delete task
    divToDo.classList.add("fadeOut")

    deleteTaskOnLs(findTaskIndexOnLs(divToDo))

    //timeout for the divToDo lasts until the animation ends
    setTimeout(() => {
            divToDo.remove()
        }, 500)

}

function createButtons(divToDo){
    const doneBtn = createButton("done","doneBtn", () => markAsDone(divToDo, doneBtn, deleteBtn),divToDo)
    const deleteBtn = createButton("delete","deleteBtn", () => deleteTask(divToDo),divToDo)
    deleteBtn.classList.add("hide")
}

function createTaskElement(toDoText, done = false){ 
    //remove the message "Nenhuma tarefa adicionada ainda :("

    let divToDo = document.createElement("div")
    divToDo.classList.add("todo")

    let li = document.createElement("li")
    li.innerHTML = `<input type="text" class="taskName" value=" ${toDoText} " readonly>`
    divToDo.appendChild(li)

    createButtons(divToDo)
    todoArea.appendChild(divToDo)
    if(done == true){
        console.log("passou aqui")
        divToDo.classList.remove("todo")
        divToDo.classList.add("done")
    }
    addTaskAnimation(divToDo)
}

function createTask(){
    // removes the message "Nenhuma tarefa adicionada ainda" before creating the task
    const p = document.getElementById("message")
    if(p){p.remove()}

    const toDoText = input.value

    //if the imput is empty, alert the user
    if(!toDoText){
        input.focus()
        return alert("Dê um nome para sua tarefa")
    }

    createTaskElement(toDoText)
    createTaskOnLs(toDoText)

    //clear the input and focus for the next task
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

// pega todas as tasks armazenadas no local storage e cria elas ao carregar da página
window.addEventListener("load", async () => {
    const storedTasksArray = getStoredTasks()
    storedTasksArray.forEach(e=>{
        //remove a mensagem se tiver alguma task no local storage
        const p = document.getElementById("message")
        if(p){p.remove()}

        const toDoText = e.text
        
        if(e.done == false){
            createTaskElement(toDoText)
        }else{
            createTaskElement(toDoText, true)
        }
    })
})

//localStorage.clear()