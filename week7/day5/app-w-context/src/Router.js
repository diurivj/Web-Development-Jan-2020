import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'

export const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Router
