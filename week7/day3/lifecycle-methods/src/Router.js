import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/styled/Nav'
import Home from './pages/home'
import NotFound from './pages/not_found'
import Characters from './pages/characters'
import CharacterDetail from './pages/character_detail'

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/characters/:id" component={CharacterDetail} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
