import React, { Component } from "react";
import { Card } from "../style/components";

export default class CardComponent extends Component {
  state = {
    showImage: true
  };

  switchImage = () => {
    // cambio al valor actual del state
    // this.setState({
    //   showImage: !this.state.showImage
    // })
    // cambio al valor previo del state
    // this.setState(prevState => ({
    //   showImage: !prevState.showImage
    // }))
    this.setState(({ showImage }) => ({
      showImage: !showImage
    }));
  };
  render() {
    return (
      <Card dark>
        <h2>{this.props.title}</h2>
        {this.state.showImage && (
          <img src={this.props.img} alt={this.props.title} />
        )}
        <p>{this.props.description}</p>
        <button onClick={this.switchImage}>
          {this.state.showImage ? "hide" : "show"} the pinshi handsome
        </button>
        <button onClick={() => this.props.deleteMovie(this.props.movieIndex)}>
          <span role="img" aria-label="borrar">
            🚽
          </span>
        </button>
      </Card>
    );
  }
}
