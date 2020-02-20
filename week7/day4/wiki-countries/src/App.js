import React, { Component } from "react";
import { getSpainInfo, getFirstFive } from "./services/countries";

export default class App extends Component {
  state = {
    spain: {},
    rick: {},
    countries: []
  };
  async componentDidMount() {
    const spain = await getSpainInfo();
    this.setState({
      spain
    });
    const countries = await getFirstFive();
    this.setState({ countries });
    // const { data } = await axios.get();
    // const [spain] = data;
    // this.setState({
    //   spain
    // });

    // const {
    //   data: { results }
    // } = await axios.get("https://rickandmortyapi.com/api/character");
    // this.setState({
    //   rick: results[0]
    // });
  }
  render() {
    return (
      <>
        <h1>
          Spain{" "}
          <span role="img" aria-label="yolo">
            {this.state.spain.flag}
          </span>
        </h1>
        {this.state.spain.languages && (
          <p>Languages: {this.state.spain.languages.spa}</p>
        )}

        {this.state.countries.map(({ name, flag }) => (
          <p>
            {name.common} - {flag}
          </p>
        ))}
      </>
    );
  }
}
