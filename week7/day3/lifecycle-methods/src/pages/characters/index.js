import React, { Component } from 'react'
import Card from '../../components/styled/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Characters extends Component {
  state = {
    characters: []
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character'
    )
    this.setState({ characters: [...data.results] })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {this.state.characters.map(character => (
          <Card key={character.id}>
            <img src={character.image} alt={character.name} />
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </Card>
        ))}
      </div>
    )
  }
}
