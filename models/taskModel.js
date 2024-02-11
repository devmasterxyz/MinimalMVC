function createTaskModel() {
    let tasks = [];
    function addTask(task) {
        tasks.push(task);
    }
    function getTasks() {
        return tasks;
    }
    function removeTask(taskId) {
        tasks = tasks.filter(task=>task.id!==taskId);
    }
  return {
    addTask,
    getTasks,
    removeTask
  };
}

module.exports = createTaskModel;