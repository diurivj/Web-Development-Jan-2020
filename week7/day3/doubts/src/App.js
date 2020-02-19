import React, { Component } from 'react'
import './App.css'
import Info from './components/Info'

class App extends Component {
  state = {
    sons: [
      {
        id: 0,
        name: 'Abraham'
      },
      {
        id: 1,
        name: 'David'
      },
      {
        id: 2,
        name: 'Isaac'
      },
      {
        id: 3,
        name: 'Benjamin'
      },
      {
        id: 4,
        name: 'Job'
      },
      {
        id: 5,
        name: 'Job'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Yo soy el papa, el unico de clase</h1>
        {this.state.sons.map((son, idx) => (
          <Info key={idx} name={son.name} />
        ))}
      </div>
    )
  }
}

export default App
