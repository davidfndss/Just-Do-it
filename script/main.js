/* Atribuições */
let input = document.getElementById("maininput")
let form = document.getElementById("addtaskform")
let todoarea = document.getElementById("to-do-area")
let todo = document.querySelector(".todo")

/* Funções */
function create(){

    let toDoText = input.value

    let div = document.createElement("div")
    div.classList.add("todo")

    let h2 = document.createElement("h2")
    h2.textContent = input.value
    
    document.body.appendChild(div)

}



/* Eventos */
form.addEventListener("submit", (e) => {
    e.preventDefault();
})