import React from 'react'
import { MyContext } from '../context'
import { Box, Image, Input } from '@chakra-ui/core'

function ProfileCard() {
  return (
    <MyContext.Consumer>
      {context => {
        if (!context.state.loggedUser) return null
        return (
          <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image
              src={context.state.loggedUser.photoURL}
              alt={context.state.loggedUser.name}
            />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {context.state.loggedUser.name}
            </Box>
            <Box>{context.state.loggedUser.email}</Box>
            <Input name="photo" onChange={context.handleFile} type="file" />
          </Box>
        )
      }}
    </MyContext.Consumer>
  )
}

export default ProfileCard
