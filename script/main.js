/*-------- Atributions -------*/
let input = document.getElementById("maininput")
let form = document.getElementById("addtaskform")
let todoArea = document.getElementById("to-do-area")
let todo = document.querySelector(".todo")
let btnArea

/*--------- Functions ---------*/
function create(){

    let toDoText = input.value

    if(!toDoText){
        return alert("Dê um nome para sua tarefa")
    }

    let divToDo = document.createElement("div")
    divToDo.classList.add("todo")

    let h2 = document.createElement("h2")
    h2.textContent = input.value
    divToDo.appendChild(h2)

    btnArea = document.createElement("div")
    btnArea.id = "btnArea"

    //done button
    doneBtn = document.createElement("button")
    
    let doneSpan = document.createElement("span")
    doneSpan.classList.add("material-symbols-outlined")
    doneSpan.innerText = "done"
    doneBtn.appendChild(doneSpan)
    btnArea.appendChild(doneBtn)

    //edit button
    editBtn = document.createElement("button")

    let editSpan = document.createElement("span")
    editSpan.classList.add("material-symbols-outlined")
    editSpan.innerText = "edit"
    editBtn.appendChild(editSpan)
    btnArea.appendChild(editBtn)

    //delete button
    deleteBtn = document.createElement("button")

    let deleteSpan = document.createElement("span")
    deleteSpan.classList.add("material-symbols-outlined")
    deleteSpan.innerText = "delete"
    deleteBtn.appendChild(deleteSpan)
    btnArea.appendChild(deleteBtn)

    
    divToDo.appendChild(btnArea)
    todoArea.appendChild(divToDo)

    input.focus()
    input.value = ""
}



/*----------- Events ----------*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
})