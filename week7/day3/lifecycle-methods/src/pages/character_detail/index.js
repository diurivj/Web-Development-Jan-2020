import React, { Component } from 'react'
import axios from 'axios'
import Card from '../../components/styled/Card'

export default class CharacterDetail extends Component {
  state = {
    character: null
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    this.setState({ character: { ...data } })
  }

  render() {
    const { character } = this.state
    if (!character)
      return (
        <div>
          <Card>
            <img
              src="https://media.tenor.com/images/d5015577b1133a47299b149b6fab1aaa/tenor.gif"
              alt=""
            />
          </Card>
        </div>
      )
    return (
      <div>
        <Card>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
          <button onClick={() => this.props.history.goBack()}>Go back</button>
        </Card>
      </div>
    )
  }
}
