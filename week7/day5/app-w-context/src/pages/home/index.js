import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Box, Heading } from '@chakra-ui/core'

class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            as="main"
            w="100vw"
            h="90vh"
          >
            <Heading as="h1">{context.state.msg}</Heading>
          </Box>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Home
