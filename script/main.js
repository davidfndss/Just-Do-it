/*-------- Atributions -------*/
let input = document.getElementById("maininput")
let form = document.getElementById("addtaskform")
let todoArea = document.getElementById("to-do-area")


let btnArea

/*--------- Functions ---------*/
function createButtons(divToDo){

    

    //done button
    let doneBtn = document.createElement("button")
    
    let doneSpan = document.createElement("span")
    doneSpan.classList.add("material-symbols-outlined")
    doneSpan.innerText = "done"
    doneBtn.appendChild(doneSpan)
    divToDo.appendChild(doneBtn)

    //delete button
    let deleteBtn = document.createElement("button")

    let deleteSpan = document.createElement("span")
    deleteSpan.classList.add("material-symbols-outlined")
    deleteSpan.innerText = "delete"
    deleteBtn.appendChild(deleteSpan)
    divToDo.appendChild(deleteBtn)
    deleteBtn.classList.add("hide")
    

    doneBtn.addEventListener("click", function(){
        divToDo.classList.add("done")
        doneBtn.classList.add("hide")
        deleteBtn.classList.remove("hide")

        todoArea.appendChild(divToDo)

    })

    deleteBtn.addEventListener("click", function(){
        divToDo.remove()
    })

}

function create(){


    let p = document.getElementById("message")
    if(p){p.remove()}

    let toDoText = input.value

    if(!toDoText){
        input.focus()
        return alert("Dê um nome para sua tarefa")
    }

    let divToDo = document.createElement("div")
    divToDo.classList.add("todo")

    let h2 = document.createElement("h2")
    h2.textContent = input.value
    divToDo.appendChild(h2)

    createButtons(divToDo)


    todoArea.appendChild(divToDo)

    input.focus()
    input.value = ""
}

/*----------- Events ----------*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

