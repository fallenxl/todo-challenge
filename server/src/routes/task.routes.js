const { Router } = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  deleteTasks,
  deleteAllTasks,
  updateTask,
} = require("../controllers/task.controller.js");

const router = Router();

// Read
router.get("/", getTasks);

// Create
router.post("/", createTask);

// Update
router.put("/update/:id", updateTask);

// Delete
router.delete("/delete/all", deleteAllTasks);
router.delete("/delete/:id", deleteTask);
router.delete("/delete", deleteTasks);

module.exports = router;
