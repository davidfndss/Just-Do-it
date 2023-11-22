//Ls == Local Storage

  function createTaskOnLs(text, done = false) {
    const tasks = getStoredTasks()
    const newTask = { text, done }
    tasks.push(newTask)
    saveTasksToLs(tasks)
    return newTask
  }

  function getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || []
  }
  
  function saveTasksToLs(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTaskStatus(index, done) {
    const tasks = getStoredTasks()
    tasks[index].done = done
    saveTasksToLs(tasks)
  }
  
  function deleteTaskOnLs(index) {
    const tasks = getStoredTasks()
    tasks.splice(index, 1)
    saveTasksToLs(tasks)
  }

  function findTaskIndexOnLs(divToDo){
    const getTextOfToDoTask = divToDo.children[0].children[0].value.trim()
    const arrayOfTasks = getStoredTasks()
    //console.log(arrayOfTasks.findIndex(task => task.text == getTextOfToDoTask))
    return arrayOfTasks.findIndex(task => task.text == getTextOfToDoTask)
  }

  // Used at edit.js
  // Updates the task "title" or "taskName" on localStorage
  function editTaskTextOnLs(previousText, newText){
    const tasks = getStoredTasks()
    const indexOfPreviousTask = tasks.findIndex(task => task.text == previousText)
    tasks[indexOfPreviousTask].text = newText.trim()
    saveTasksToLs(tasks)
  }
  
  export { getStoredTasks, createTaskOnLs, findTaskIndexOnLs, updateTaskStatus, editTaskTextOnLs, deleteTaskOnLs }

  //Ls == Local Storage