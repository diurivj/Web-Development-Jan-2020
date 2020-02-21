import React from 'react'
import { Box, Stack, Button, Heading } from '@chakra-ui/core'

function Form({ width, children, title, submit }) {
  return (
    <Box onSubmit={submit} as="form" w={width || '350px'} boxShadow="xl">
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1">
          {title}
        </Heading>
        {children}
        <Button type="submit">{title}</Button>
      </Stack>
    </Box>
  )
}

export default Form
