import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getProject, updateProject } from "../services/projects";

class ProjectDetail extends Component {
  state = {
    project: {},
    title: "",
    description: "",
    edit: false
  };
  async getProjectInfo() {
    const project = await getProject(this.props.projectId);
    this.setState({
      project,
      title: project.title,
      description: project.description
    });
  }
  async componentDidMount() {
    this.getProjectInfo();
  }
  switchEditForm = () => {
    this.setState({
      edit: !this.state.edit
    });
  };
  submit = async e => {
    e.preventDefault();
    await updateProject(
      this.props.projectId,
      this.state.title,
      this.state.description
    );
    this.getProjectInfo();
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
        <small>tasks</small>
        <button onClick={this.switchEditForm}>Edit Project</button>
        {this.state.edit && (
          <form onSubmit={this.submit}>
            <div>
              <label htmlFor="title">
                Project title
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.handleInput}
                />
              </label>
              <label htmlFor="description">
                Project description
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                />
              </label>
              <input type="submit" value="Update project" />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
