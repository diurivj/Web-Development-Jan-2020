import React, { Component } from "react";

export default class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    img: ""
  };
  addMovie = e => {
    e.preventDefault();
    this.props.addMovie(this.state);
  };

  handleInputChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addMovie}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="director"
            id="director"
            placeholder="director"
            value={this.state.director}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="img"
            id="img"
            placeholder="image"
            value={this.state.img}
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit">Add movie</button>
        </form>
      </div>
    );
  }
}
