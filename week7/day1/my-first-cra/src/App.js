import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import Profile from './components/Profile'

class App extends Component {
  state = {
    counter: 0,
    profile: {
      name: '',
      lastname: '',
      occupation: ''
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  handleCounter = value => {
    this.setState({ counter: this.state.counter + value })
  }

  handleInputs = e => {
    const { name, value } = e.target
    this.setState(prevState => {
      return {
        ...prevState,
        profile: {
          ...prevState.profile,
          [name]: value
        }
      }
    })
  }

  render() {
    const { profile } = this.state
    const { name, lastname, occupation } = profile
    return (
      <main className="App">
        <img src="/jeduan.jpg" alt="" />
        <Form
          name={name}
          lastname={lastname}
          occupation={occupation}
          handleInputs={this.handleInputs}
          bgColor="green"
        />
        <Counter
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Profile
          name={name}
          lastname={lastname}
          occupation={occupation}
          bgColor="red"
        />
      </main>
    )
  }
}

export default App
