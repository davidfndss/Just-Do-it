// LocalStorage.js

function getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTask(text, done = false) {
    const tasks = getStoredTasks();
    const newTask = { text, done };
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);
    return newTask;
  }

  function updateTaskStatus(index, done) {
    const tasks = getStoredTasks();
    tasks[index].done = done;
    saveTasksToLocalStorage(tasks);
  }
  
  function deleteTask(index) {
    const tasks = getStoredTasks();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
  }
  
  export { getStoredTasks, saveTasksToLocalStorage, createTask, updateTaskStatus, deleteTask };