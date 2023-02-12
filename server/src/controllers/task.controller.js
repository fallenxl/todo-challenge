const Task = require("../models/Task.js");
const { Sequelize } = require("sequelize");
const { validateId } = require("../helpers/helpers.js");

async function getTasks(req, res) {
  try {
    const { id } = req.user;
    const tasks = await Task.findAll({ where: { userId: id } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createTask(req, res) {
  try {
    const { content } = req.body;
    const { id } = req.user;
    const task = await Task.create({ userId: id, content });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { content, done, createdAt } = req.body.task;
    if (!validateId(id)) return res.status(400).json({ error: "Invalid id" });

    const task = await Task.update(
      { content, done, createdAt },
      { where: { userId: req.user.id, id } }
    );

    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    if (!validateId(id)) return res.status(400).json({ error: "Invalid id" });

    const task = await Task.destroy({ where: { userId: req.user.id, id } });

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTasks(req, res) {
  try {
    const { tasksId } = req.body;
    const { id } = req.user;
    const tasks = await Task.destroy({
      where: {
        id: {
          [Sequelize.Op.in]: tasksId,
        },
        userId: id,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const { id } = req.user;
    const tasks = await Task.destroy({
      where: { userId: id },
      truncate: false,
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  deleteTasks,
  deleteAllTasks,
};
