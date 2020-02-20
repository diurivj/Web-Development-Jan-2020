import React, { Component } from "react";
import { getAllProjects, deleteProject } from "../services/projects";
import { Link } from "react-router-dom";

class ProjectsList extends Component {
  state = {
    projects: []
  };

  async getProjectsInfo() {
    const { projects } = await getAllProjects();
    this.setState({
      projects
    });
  }

  async componentDidMount() {
    // Servicio pendiente
    this.getProjectsInfo();
  }

  async deleteProject(projectId) {
    await deleteProject(projectId);
    this.getProjectsInfo();
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project, i) => (
          <li key={i}>
            <Link to={`/project/${project._id}`}>{project.title}</Link>
            <button onClick={() => this.deleteProject(project._id)}>╳</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProjectsList;
