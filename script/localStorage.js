//Ls == Local Storage

  function createTaskOnLs(text, done = false) {
    const tasks = getStoredTasks();
    const newTask = { text, done };
    tasks.push(newTask);
    saveTasksToLs(tasks);
    return newTask;
  }

  function getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  
  function saveTasksToLs(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  function updateTaskStatus(index, done) {
    const tasks = getStoredTasks();
    tasks[index].done = done;
    saveTasksToLocalStorage(tasks);
  }
  
  function deleteTaskOnLs(index) {
    const tasks = getStoredTasks();
    tasks.splice(index, 1);
    saveTasksToLs(tasks);
  }
  
  export { getStoredTasks, saveTasksToLs, createTaskOnLs, updateTaskStatus, deleteTaskOnLs };

  //Ls == Local Storage