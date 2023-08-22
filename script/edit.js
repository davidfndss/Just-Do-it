let mainEditBtn = document.getElementById("editbtn")

let goBackBtn = document.getElementById("goBackBtn")


function receiveButtons(){

    let todos = document.querySelectorAll(".todo")
    todos.forEach(function(todo) {

        let done = document.querySelectorAll(".doneBtn")
        done.forEach(function(done) {
            done.classList.add("hide")})


        let editBtn = document.createElement("button")
        let editSpan = document.createElement("span")
        editSpan.classList.add("material-symbols-outlined")
        editBtn.classList.add("editBtn")
        editSpan.innerText = "edit"
        editBtn.appendChild(editSpan)

        todo.appendChild(editBtn)
    })
    
    mainEditBtn.classList.add("hide")
    goBackBtn.classList.remove("hide")

}


// Events-----------

mainEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    receiveButtons();
})

goBackBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let todos = document.querySelectorAll(".todo")
    todos.forEach(function(todo) {

        let done = document.querySelectorAll(".doneBtn")
        done.forEach(function(done) {
            done.classList.remove("hide")})

    })
    
    let edits = document.querySelectorAll(".editBtn")
    edits.forEach(function(edit){
        edit.remove()
    })
   
        mainEditBtn.classList.remove("hide")
        goBackBtn.classList.add("hide")

})

