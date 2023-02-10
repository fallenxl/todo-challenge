const { Router } = require("express");
const { getTasks, createTask, deleteTask, deleteTasks } = require("../controllers/task.controller.js");
const router = Router();
router.get("/", getTasks);
router.post("/", createTask);
router.delete("/", deleteTasks);
router.delete("/:id", deleteTask);

module.exports = router;