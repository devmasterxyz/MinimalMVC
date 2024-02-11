const createTaskModel = require('../models/taskModel')
const createTaskView = require('../views/taskView')
function createTaskController() {
    const model = createTaskModel();
    const view = createTaskView();
    function addTask(task) {
        model.addTask(task);
    }
    function showTasks() {
        const tasks = model.getTasks();
        view.showTasks(tasks);
    }
    function removeTask(taskId) {
        model.removeTask(taskId);
    }
    return {
        addTask,
        showTasks,
        removeTask
    };
}
module.exports = createTaskController;