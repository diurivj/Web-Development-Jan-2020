import React, { Component } from "react";
import { CardContainer } from "../style/components";
import Card from "./CardComponent";
import AddMovie from "./AddMovie";

export default class MovieList extends Component {
  state = {
    movies: [
      {
        title: "Jurassic Park",
        director: "Steven Spielberg",
        img: "https://i.ytimg.com/vi/0QjnFhh2I6A/maxresdefault.jpg"
      },
      {
        title: "Sharknado",
        director: "Anthony C. Ferrante",
        img: "https://i.ytimg.com/vi/HylLy2yEZUk/maxresdefault.jpg"
      },
      {
        title: "Titanic",
        director: "James Cameron",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/1200px-RMS_Titanic_3.jpg"
      }
    ]
  };

  deleteMovie = movieIndex => {
    // copiar el estado, por que jamas debería mutarlo directamente
    const moviesCopy = [...this.state.movies];
    // Remover la pelicula que queremos borrar, del arreglo copia
    moviesCopy.splice(movieIndex, 1);
    // guardar el arreglo copia como la pripiedad movies del estado para ver reflejado el cambio
    this.setState({
      movies: moviesCopy
    });
  };

  addMovie = movie => {
    this.setState({
      movies: [...this.state.movies, movie]
    });
  };

  render() {
    return (
      <>
        <AddMovie addMovie={this.addMovie} />
        <CardContainer>
          {this.state.movies.map((movie, i) => (
            <Card
              title={movie.title}
              description={movie.director}
              img={movie.img}
              key={i}
              movieIndex={i}
              deleteMovie={this.deleteMovie}
            />
          ))}
        </CardContainer>
      </>
    );
  }
}
