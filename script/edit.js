

//Atributions---------------
let mainEditBtn = document.getElementById("mainEditBtn");
let goBackBtn = document.getElementById("goBackBtn");
let addTaskArea = document.getElementById("addTaskArea");
let searchBar = document.getElementById("searchBar");
let selectBar = document.querySelector("#filter");


//Functions---------------

function hideAllDoneBtns(editModeStatus = true){
    // hides all of the doneBtn's while in the "edit mode"
    let allDoneBtns = document.querySelectorAll(".doneBtn");
    allDoneBtns.forEach((doneBtn) => {
        if(editModeStatus = true){
            doneBtn.classList.add("hide");  
        }else{
            doneBtn.classList.remove("hide");
        }
    });
}

function createEditModeButtons(todo){
    // creates the editBtn's
    let editBtn = document.createElement("button");
    let editSpan = document.createElement("span");
    editSpan.classList.add("material-symbols-outlined");
    editBtn.classList.add("editBtn");
    editSpan.innerText = "edit";
    editBtn.appendChild(editSpan);
    todo.appendChild(editBtn)

    // creates the saveBtn's and hides it initially
    let saveBtn = document.createElement("button");
    let saveSpan = document.createElement("span");
    saveSpan.classList.add("material-symbols-outlined");
    saveBtn.classList.add("saveBtn");
    saveSpan.innerText = "save";
    saveBtn.appendChild(saveSpan);
    saveBtn.classList.add("hide");

    // adds the listener to the editBtn
    editBtn.addEventListener("click",(editBtn) => {
        console.log(editBtn)
        let taskName = selectTaskText(editBtn)
        taskName.removeAttribute("readonly");
        taskName.focus();

    })
}

function hideAllOthersEditBtns(){

    todos.forEach((otherTodo) => {
        let otherEditBtn = otherTodo.querySelector(".editBtn");
        otherEditBtn.classList.add("hide");
    });
}

function selectTaskText(btn){
    let parentDiv = btn.closest("div");
    let taskText = parentDiv.querySelector(".taskText");
    return taskText
}

function toggleClasses(){
    editBtn.classList.add("hide");
    saveBtn.classList.remove("hide");
    goBackBtn.classList.add("hide");
}

function editModeOn(){

    hideAllDoneBtns()

    mainEditBtn.classList.add("hide")
    goBackBtn.classList.remove("hide")

    let allTodoTasks = document.querySelectorAll(".todo");
    allTodoTasks.forEach((todo) => {
        createEditModeButtons(todo)
    });

}

// Events-----------
mainEditBtn.addEventListener("click", (e) => {
    editModeOn();
    addTaskArea.classList.add("hide");

    searchBar.classList.add("hide");
    selectBar.style.width = "80%";
    selectBar.style.borderRadius = "15px 0px 0px 15px";
})

goBackBtn.addEventListener("click", (e) => {
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

        searchBar.classList.remove("hide")
        selectBar.style.width = "30%";
        selectBar.style.borderRadius = "0px";
});
