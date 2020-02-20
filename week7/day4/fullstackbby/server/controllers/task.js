const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
  res.status(200).json({ tasks });
};
exports.getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
  res.status(200).json(task);
};
exports.createTask = async (req, res) => {
  const { projectId } = req.params;
  const { title, description } = req.body;
  const newTask = await Task.create({ title, description, project: projectId });
  await Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask.id } });
  res.status(201).json({ message: "Task created" });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await Task.findByIdAndUpdate(id, { title, description });
  res.status(200).json({ message: "Task updated" });
};
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(200).json({ message: "Task deleted" });
};
