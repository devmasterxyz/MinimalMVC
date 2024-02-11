const express = require("express");
const createTaskController = require("./controllers/taskController");
const app = express();
const taskController = createTaskController();
app.get("/", async (req, res) => {
  const task1 = {
    id: 1,
    title: "Complete assignment",
    description: "Finish the project by Friday",
  };
  const task2 = {
    id: 2,
    title: "Read a book",
    description: "Read a new book for at least 30 minutes",
  };
  taskController.addTask(task1);
  taskController.addTask(task2);

  console.log("Tasks before removal:");
  taskController.showTasks();

  const taskId = parseInt(req.query.taskId);
  if (isNaN(taskId) || taskId <= 0 || taskId > 2) {
    console.error("Invalid task ID");
    return res.status(400).send("Invalid task ID");
  }
  await taskController.removeTask(taskId);
  console.log(`Task with ID ${taskId} removed successfully.`);
  console.log("Tasks after removal:");
  taskController.showTasks();

  res.send("Check console");
});
app.listen(3000);
