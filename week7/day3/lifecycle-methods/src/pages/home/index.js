import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Card from '../../components/styled/Card'
import Input from '../../components/styled/Input'
import Row from '../../components/styled/Row'

class App extends Component {
  state = {
    name: '',
    quote: 'Loading...',
    width: window.innerWidth,
    charging: 'false'
  }

  handleInput = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }

  handleBattery = async () => {
    const { charging } = await navigator.getBattery()
    this.setState({ charging: String(charging) })
  }

  // se ejecuta cuando ya cargo todo mi componente
  // normalmente vamos ausar este lifecycle method para hacer peticiones ajax
  // este es el mounting, se ejecuta ya cuando se cargo todo alv
  async componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    const battery = await navigator.getBattery()
    battery.addEventListener('chargingchange', this.handleBattery)
    const { data } = await axios.get('https://api.kanye.rest')
    this.setState({ quote: data.quote })
    this.setState({ charging: String(battery.charging) })
  }

  // se ejecuta cuando se actualiza algo en nuestro componente
  componentDidUpdate(prevProps, prevState) {
    console.log('algo cambio')
  }

  // me ejecuto cuando ya no se esta usando el componente
  async componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    const battery = await navigator.getBattery()
    battery.removeEventListener('chargingchange', this.handleBattery)
  }

  navigate(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <div className="App">
        <Card onClick={() => this.navigate('/characters')}>
          <Row label="Name">
            <Input
              onChange={this.handleInput}
              name="name"
              value={this.state.name}
            />
          </Row>
          <Row label="Quote">
            <Input
              fontSize="1rem"
              onChange={this.handleInput}
              name="quote"
              value={this.state.quote}
            />
          </Row>
          <Row label="Width">
            <Input
              onChange={this.handleInput}
              name="width"
              value={this.state.width}
            />
          </Row>
          <Row label="Is charging?">
            <Input
              onChange={this.handleInput}
              name="charging"
              value={this.state.charging}
            />
          </Row>
        </Card>
      </div>
    )
  }
}

export default App
