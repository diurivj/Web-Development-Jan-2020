import React from 'react'
import { MyContext } from '../../context'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon
} from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'

function Signup() {
  const redirect = useHistory()
  return (
    <MyContext.Consumer>
      {context => (
        <Flex w="100vw" h="90vh" align="center" justify="center">
          <Form
            submit={e =>
              context.handleSignupSubmit(e, () => redirect('/login'))
            }
            title="Signup"
          >
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="user" />} />
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={context.state.formSignup.name}
                  onChange={context.handleSignupInput}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="email" />} />
                <Input
                  onChange={context.handleSignupInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formSignup.email}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftAddon children={<Icon name="lock" />} />
                <Input
                  onChange={context.handleSignupInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formSignup.password}
                />
              </InputGroup>
            </FormControl>
          </Form>
        </Flex>
      )}
    </MyContext.Consumer>
  )
}

export default Signup
