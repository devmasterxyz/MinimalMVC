function createTaskView() {
    function showTasks(tasks) {
        tasks.forEach(task => {
            console.log(`Id: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
        });
    }
    return {
        showTasks
    }
}
module.exports = createTaskView;