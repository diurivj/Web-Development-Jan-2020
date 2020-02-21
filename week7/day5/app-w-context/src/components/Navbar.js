import React from 'react'
import { MyContext } from '../context'
import { NavLink } from 'react-router-dom'
import { Flex } from '@chakra-ui/core'

const styles = {
  style: {
    padding: '20px'
  },
  activeStyle: {
    color: 'white'
  }
}

export default function Navbar() {
  return (
    <MyContext.Consumer>
      {context => (
        <Flex
          w="100vw"
          h="10vh"
          bg="gray.500"
          align="center"
          justify="flex-end"
        >
          {!context.state.isLoggedIn && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/signup">
                Signup
              </NavLink>
              <NavLink {...styles} exact to="/login">
                Login
              </NavLink>
            </>
          )}
          {context.state.isLoggedIn && (
            <>
              <NavLink {...styles} exact to="/">
                Home
              </NavLink>
              <NavLink {...styles} exact to="/profile">
                Profile
              </NavLink>
              <button style={styles.style}>Logout</button>
            </>
          )}
        </Flex>
      )}
    </MyContext.Consumer>
  )
}
