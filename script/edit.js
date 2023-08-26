//Atributions---------------
let mainEditBtn = document.getElementById("mainEditBtn");
let goBackBtn = document.getElementById("goBackBtn");
let addTaskArea = document.getElementById("addTaskArea");
let sBar = document.getElementById("searchBar");
let selectBar = document.querySelector("#filter");


//Functions---------------
function toggleTodoButtons(){

    let todos = document.querySelectorAll(".todo");
    todos.forEach(function(todo) {

        let done = document.querySelectorAll(".doneBtn");
        done.forEach(function(done) {
            done.classList.add("hide");
        });


        let editBtn = document.createElement("button");
        let editSpan = document.createElement("span");
        editSpan.classList.add("material-symbols-outlined");
        editBtn.classList.add("editBtn");
        editSpan.innerText = "edit";
        editBtn.appendChild(editSpan);

        let saveBtn = document.createElement("button");
        let saveSpan = document.createElement("span");
        saveSpan.classList.add("material-symbols-outlined");
        saveBtn.classList.add("saveBtn");
        saveSpan.innerText = "save";
        saveBtn.appendChild(saveSpan);
        saveBtn.classList.add("hide");


        // Edit feature
        editBtn.addEventListener("click", function () {

            todos.forEach(function (otherTodo) {
                let otherEditBtn = otherTodo.querySelector(".editBtn");
                let otherDoneBtn = otherTodo.querySelector(".doneBtn");
                otherEditBtn.classList.add("hide");
                otherDoneBtn.classList.add("hide");
            });


            let parentDiv = editBtn.closest("div");
            let taskName = parentDiv.querySelector(".taskName");

            taskName.removeAttribute("readonly");
            taskName.focus();

            editBtn.classList.add("hide");
            saveBtn.classList.remove("hide");
            goBackBtn.classList.add("hide");
        })

        saveBtn.addEventListener("click", function (){

            let parentDiv = saveBtn.closest("div");
            let taskName = parentDiv.querySelector(".taskName");
            taskName.setAttribute("readonly", true);

            todos.forEach(function (otherTodo) {
                let otherEditBtn = otherTodo.querySelector(".editBtn");
                let otherDoneBtn = otherTodo.querySelector(".doneBtn");
                otherEditBtn.classList.remove("hide");
            });

            editBtn.classList.remove("hide");
            saveBtn.classList.add("hide");
            goBackBtn.classList.remove("hide");
        })
    

        todo.appendChild(editBtn);
        todo.appendChild(saveBtn);

        
    });
    
    mainEditBtn.classList.add("hide");
    goBackBtn.classList.remove("hide");

}

// Events-----------
mainEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleTodoButtons();
    addTaskArea.classList.add("hide");

    sBar.classList.add("hide");
    selectBar.style.width = "80%";
    selectBar.style.borderRadius = "15px 0px 0px 15px";
})

goBackBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let todos = document.querySelectorAll(".todo");
    todos.forEach(function(todo) {

        let done = document.querySelectorAll(".doneBtn");
        done.forEach(function(done) {
            done.classList.remove("hide")});

    });
    
    let edits = document.querySelectorAll(".editBtn");
    edits.forEach(function(edit){
        edit.remove();
    })
   
        mainEditBtn.classList.remove("hide");
        goBackBtn.classList.add("hide");
        addTaskArea.classList.remove("hide");

        sBar.classList.remove("hide")
        selectBar.style.width = "30%";
        selectBar.style.borderRadius = "0px";
});
