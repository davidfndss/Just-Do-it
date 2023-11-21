import {   getStoredTasks, createTaskOnLs, findTaskIndexOnLs, updateTaskStatus, deleteTaskOnLs } from "/script/localStorage.js"
/*-------- Atributions -------*/
const input = document.getElementById("maininput")
const form = document.getElementById("addtaskform")
const todoArea = document.getElementById("to-do-area")
const doneArea = document.getElementById("done-area")
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

    doneArea.appendChild(divToDo)
    divToDo.classList.remove("todo")

    updateTaskStatus(findTaskIndexOnLs(divToDo),true)
}

const deleteTask = (divToDo) => {
    // adds the fade-out animation when the task is being deleted
    divToDo.classList.add("fadeOut")

    deleteTaskOnLs(findTaskIndexOnLs(divToDo))

    //timeout for the divToDo lasts until the animation ends
    setTimeout(() => {
            divToDo.remove()
        }, 500)

}

function createButtons(divToDo, done){

    // creates the delete button for all tasks, but hidden
    const deleteBtn = createButton("delete","deleteBtn", () => deleteTask(divToDo),divToDo)
    deleteBtn.classList.add("hide")

    // if the task current status is "to-do", creates the doneBtn, but if the current status is "done", it unhides the deleteBtn
    if(done === false){
        const doneBtn = createButton("done","doneBtn", () => markAsDone(divToDo, doneBtn, deleteBtn),divToDo)
    }else{
        divToDo.appendChild(deleteBtn)
        deleteBtn.classList.remove("hide")
    }
    
}

// the done parameter receives the boolean false as default, because when the code load the tasks from LocalStorage we need to know if the task is already done or not, it defines the class that the div will receive.
function createTaskElement(toDoText, done = false){ 
    
    // creates the div
    let divToDo = document.createElement("div")
    
    if(done === false){
        divToDo.classList.add("todo")
    }else{
        divToDo.classList.add("done")
    }
    

    let li = document.createElement("li")
    li.innerHTML = `<input type="text" class="taskText" value=" ${toDoText} " readonly>`
    divToDo.appendChild(li)

    createButtons(divToDo, done)

    todoArea.appendChild(divToDo)

    if(done === false){
        todoArea.appendChild(divToDo)
    }else{
        doneArea.appendChild(divToDo)
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
// prevents the default behavior of all the form elements
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// create one task using the actual value in the input, and clear the input for the next
addBtn.addEventListener("click", function () {
    createTask()
})

// get all the tasks on the local strage and brings one by one to the screen
window.addEventListener("load", async () => {
    const storedTasksArray = getStoredTasks()
    storedTasksArray.forEach(e=>{

        //removes the message "Nenhuma tarefa adicionada ainda :(" if theres any task on the Local Storage
        const p = document.getElementById("message")
        if(p){p.remove()}

        const toDoText = e.text
        
        // ensure that the tasks with status "to-do" will be at todoArea, and the tastks with the status "done" will be at doneArea
        if(e.done == false){
            createTaskElement(toDoText)
        }else{
            createTaskElement(toDoText, true)
        }
    })
})

//localStorage.clear()