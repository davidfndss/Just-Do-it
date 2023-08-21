 let mainEditBtn = document.getElementById("editbtn")

 let editBtn = document.createElement("button")
        
        let editSpan = document.createElement("span")
        editSpan.classList.add("material-symbols-outlined")
        editSpan.innerText = "edit"
        editBtn.appendChild(editSpan)

function receiveButtons(){

    let todos = document.querySelectorAll(".todo")
    todos.appendChild(editBtn)
    
}


// Events-----------

mainEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

