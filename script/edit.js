

//Atributions---------------
let mainEditBtn = document.getElementById("mainEditBtn");
let goBackBtn = document.getElementById("goBackBtn");
let addTaskArea = document.getElementById("addTaskArea");
let searchBar = document.getElementById("searchBar");
let selectBar = document.querySelector("#filter");


//Functions---------------

function editModeOn(){

    // hide all doneBtn's while in the edit mode
    hideAllDoneBtns(true)

    // hides the main edit button and shows the "arrow back" button
    mainEditBtn.classList.add("hide")
    goBackBtn.classList.remove("hide")

    // all of the todo tasks receive the edit and save buttons
    let allTodoTasks = document.querySelectorAll(".todo");
    allTodoTasks.forEach((todo) => {
        createEditModeButtons(todo)
    });
}

// hides all of the doneBtn's while in the edit mode and unhides all of the doneBtn's after the edit mode
function hideAllDoneBtns(boolean){
    
    let allDoneBtns = document.querySelectorAll(".doneBtn");
    if(boolean === true){
        allDoneBtns.forEach((doneBtn) => {
            doneBtn.classList.add("hide");  
        });
    }else{
        
        allDoneBtns.forEach((doneBtn) => {
        doneBtn.classList.remove("hide");  
        });
    }
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

    defineListenersToEditModeButtons(todo, editBtn, saveBtn)
}

function defineListenersToEditModeButtons(todo, editBtn, saveBtn){

    let taskName = selectTaskText(editBtn)
    // taskName is an input field with the read-only attribute. The editBtn disables the read-only attribute to allow editing to the input value.
        editBtn.addEventListener("click", () => {
            hideAllEditBtns()
            taskName.removeAttribute("readonly");
            taskName.value = taskName.value.trim()
            taskName.focus();
            todo.appendChild(saveBtn)
            editBtn.classList.add("hide")
        })

    // the saveBtn enables the read-only again
        saveBtn.addEventListener("click", () => {
            hideAllEditBtns(false)
            taskName.value = ` ${taskName.value} ` // I prefer to le this spaces before and after the task text just for visual preferences
            taskName.setAttribute("readonly", true);
            saveBtn.remove()
            editBtn.classList.remove("hide")
        })
}

// select the input field, wich is used as the title of each "to-do" task for being edited after.
function selectTaskText(btn){
    let parentDiv = btn.closest("div");
    let taskText = parentDiv.querySelector(".taskText");
    return taskText
}

// hide all editBtns while one task text is being edited, before the saveBtn is clicked
//after the saveBtn is clicked, all editBtns will be shown again
function hideAllEditBtns(boolean){
    let allEditBtns = document.querySelectorAll(".editBtn")
    if(boolean === true){
        allEditBtns.forEach((editBtn)=>{
            editBtn.classList.add("hide")
        })
    }else{
        allEditBtns.forEach((editBtn)=>{
            editBtn.classList.remove("hide")
        })
    }
}

// this function hides the addTask form and the search bar, and adapts the size of select bar
function hideOtherForms(boolean){

    if(boolean === true){
        addTaskArea.classList.add("hide");
        searchBar.classList.add("hide");
        selectBar.style.width = "80%";
        selectBar.style.borderRadius = "15px 0px 0px 15px";
    }else{
        mainEditBtn.classList.remove("hide");
        goBackBtn.classList.add("hide");
        addTaskArea.classList.remove("hide");
        searchBar.classList.remove("hide")
        selectBar.style.width = "30%";
        selectBar.style.borderRadius = "0px";
    }
}

function removeAllEditBtns(){
    let allEditBtns = document.querySelectorAll(".editBtn");
    allEditBtns.forEach((editBtn) => {
        editBtn.remove();
    })
}

// Events-----------
mainEditBtn.addEventListener("click", () => {
    editModeOn();
    hideOtherForms(true); 
})

goBackBtn.addEventListener("click", () => {
    hideOtherForms(false); // unhide all the other forms after click the arrow back button
    removeAllEditBtns(); // removes all editBtn's
    hideAllDoneBtns(false); // unhide all the doneBtn's
});