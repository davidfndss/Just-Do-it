// Search Input
let sInput = document.getElementById("sInput");
// Search and Filter form
let snfForm = document.getElementById("searchnFilter")

let sValue = sInput.value

sInput.addEventListener("input", function(){
    return console.log("a");
})

snfForm.addEventListener("submit", function(e){
    e.preventDefault()
})

