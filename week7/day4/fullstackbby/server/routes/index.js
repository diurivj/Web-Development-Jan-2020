const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require("../controllers/project");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task");

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Welcome to Tasks api");
});

// Project CRUD
router.get("/api/projects", getAllProjects);
router.post("/api/projects", createProject);
router.get("/api/projects/:id", getProject);
router.put("/api/projects/:id", updateProject);
router.delete("/api/projects/:id", deleteProject);
// Task CRUD
router.get("/api/tasks", getAllTasks);
router.post("/api/tasks/:projectId", createTask);
router.get("/api/tasks/:id", getTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;
