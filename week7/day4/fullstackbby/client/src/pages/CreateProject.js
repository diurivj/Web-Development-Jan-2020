import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { createProject } from "../services/projects";

class CreateProject extends Component {
  state = {
    title: "",
    description: ""
  };

  submit = async e => {
    e.preventDefault();
    await createProject(this.state.title, this.state.description);
    this.props.history.push("/");
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
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
          <input type="submit" value="Create project" />
        </div>
      </form>
    );
  }
}

// withRouter inyecta un prop llamado history a nuestro componente
export default withRouter(CreateProject);
