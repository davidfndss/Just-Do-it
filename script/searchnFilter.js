// Search and Filter form
let snfForm = document.getElementById("searchnFilter")

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
    let todoOption = document.getElementById("todo");
    let doneOption = document.getElementById("done");

    let todoDivs = document.querySelectorAll(".todo");
    let doneDivs = document.querySelectorAll(".done");

    if(select.value == "todo"){
        doneDivs.forEach((done) => {
            done.classList.add("hide");
        })
        todoDivs.forEach((todo) => {
            todo.classList.remove("hide");
        });
    }else if(select.value == "done"){
        doneDivs.forEach((done) => {
            done.classList.remove("hide");
        })
        todoDivs.forEach((todo) => {
            todo.classList.add("hide");
        });
    }else{
        doneDivs.forEach((done) => {
            done.classList.remove("hide");
        })
        todoDivs.forEach((todo) => {
            todo.classList.remove("hide");
        });
        console.log(select.value)
    };
});


snfForm.addEventListener("submit", function(e){
    e.preventDefault()
})
