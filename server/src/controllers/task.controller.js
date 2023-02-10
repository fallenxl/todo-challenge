const Task = require("../models/Task.js");

async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTask(req, res) {
  try {
    const { content } = req.body;
    const task = await Task.create({ content });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getTasks,
    createTask
}
