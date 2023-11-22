const searchAndFilterForm = document.getElementById("searchnFilter")

// Search Input
const searchBar = document.getElementById("searchBar")
// Search function
searchBar.addEventListener("input", function search(){
    const allTaskNames = document.querySelectorAll(".taskText")

    // regular expression that uses the value of the search bar
    const regEx = new RegExp(searchBar.value, "i")
     
    // for each task, if the taskName or taskText have the searchBar.value on it, the parent div appears, else, the parent div will be hidden
     allTaskNames.forEach((taskName) => { 
        const divToDo = taskName.closest("div")
        if(searchBar.value.length > 0){
            if(regEx.test(taskName.value)){
            divToDo.classList.remove("hide");
            }else{
            divToDo.classList.add("hide");       
            }

        }else{
            divToDo.classList.remove("hide")
        }
    })
})

//select
const select = document.getElementById("filter")
//filter function
select.addEventListener("change", function filter(){
    const allToDoDivs
     = document.querySelectorAll(".todo")
    const allDoneDivs = document.querySelectorAll(".done")

    if(select.value == "todo"){
        allDoneDivs.forEach((done) => {
            done.classList.add("hide")
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.remove("hide")
        })
    }else if(select.value == "done"){
        allDoneDivs.forEach((done) => {
            done.classList.remove("hide")
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.add("hide")
        })
    }else{
        allDoneDivs.forEach((done) => {
            done.classList.remove("hide")
        })
        allToDoDivs.forEach((todo) => {
            todo.classList.remove("hide")
        })
    }
})

// prevent default form submission
searchAndFilterForm.addEventListener("submit", (e) => {
    e.preventDefault()
})
