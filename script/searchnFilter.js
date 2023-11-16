import {    getStoredTasks, saveTasksToLs, createTaskOnLs, updateTaskStatus, deleteTaskOnLs } from "/script/localStorage.js"


let searchAndFilterForm = document.getElementById("searchnFilter")

// Search Input
let searchBar = document.getElementById("searchBar");

//Search function
searchBar.addEventListener("input", function search(){
    
    let taskNames = document.querySelectorAll(".taskName");

    let regEx = new RegExp(searchBar.value, "i")
     
     taskNames.forEach((taskName) => { 
        let divToDo = taskName.closest("div")
        if(searchBar.value.length > 0){

            if(regEx.test(taskName.value)){
            divToDo.classList.remove("hide");
            }else{
            divToDo.classList.add("hide");       
            }

        }else{
            divToDo.classList.remove("hide")
        }
    });
});

//select
let select = document.getElementById("filter")
//filter function
select.addEventListener("change", function filter(){

    let allToDoDivs
     = document.querySelectorAll(".todo");
    let allDoneDivs = document.querySelectorAll(".done");

    if(select.value == "todo"){
        allDoneDivs.forEach((done) => {
            done.classList.add("hide");
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.remove("hide");
        });
    }else if(select.value == "done"){
        allDoneDivs.forEach((done) => {
            done.classList.remove("hide");
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.add("hide");
        });
    }else{
        allDoneDivs.forEach((done) => {
            done.classList.remove("hide");
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.remove("hide");
        });
    };
});

// prevent default form submission
searchAndFilterForm.addEventListener("submit", function(e){
    e.preventDefault()
})
