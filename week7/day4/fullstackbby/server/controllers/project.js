const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find().populate("tasks");
  // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
  res.status(200).json({ projects });
};
exports.getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate("tasks");
  // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
  res.status(200).json(project);
};
exports.createProject = async (req, res) => {
  const { title, description } = req.body;
  await Project.create({ title, description });
  res.status(201).json({ message: "project created" });
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await Project.findByIdAndUpdate(id, { title, description });
  res.status(200).json({ message: "project updated" });
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(200).json({ message: "project deleted" });
};
