const { Router } = require("express");
const { getTasks, createTask, deleteTask, deleteTasks, deleteAllTasks } = require("../controllers/task.controller.js");
const router = Router();
router.get("/", getTasks);
router.post("/", createTask);
router.delete("/", deleteAllTasks);
router.delete("/delete/:id", deleteTask);
router.delete("/delete",deleteTasks)

module.exports = router;