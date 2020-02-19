import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 5vh;
  padding: 10px;
  background: #e5d8c6;
  & a {
    padding-right: 20px;
  }
`

const Nav = () => (
  <StyledNav>
    <NavLink activeClassName="nav-active" exact to="/">
      Home
    </NavLink>
    <NavLink activeClassName="nav-active" exact to="/characters">
      Characters
    </NavLink>
  </StyledNav>
)

export default Nav
