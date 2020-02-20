import React, { Component } from "react";
import { login, signup } from "../services/auth";

export default class userForm extends Component {
  state = {
    username: "",
    password: ""
  };
  inputChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  submit = async e => {
    e.preventDefault();
    //
    if (this.props.type === "login") {
      const user = await login(this.state.username, this.state.password);
      console.log(user);
    } else {
      const user = await signup(this.state.username, this.state.password);
      console.log(user);
    }
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.inputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          value={this.state.password}
          onChange={this.inputChange}
        />
        <br />
        <input type="submit" value={this.props.type} />
      </form>
    );
  }
}
