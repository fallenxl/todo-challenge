const { Router } = require("express");
const { getTasks, createTask } = require("../controllers/task.controller.js");
const router = Router();
router.get("/", getTasks);
router.post("/", createTask);

module.exports = router;