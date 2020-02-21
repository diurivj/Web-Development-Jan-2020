import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import MyProvider from './context'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

function WithTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router />
    </ThemeProvider>
  )
}

function WithContext() {
  return (
    <MyProvider>
      <WithTheme />
    </MyProvider>
  )
}

ReactDOM.render(<WithContext />, document.getElementById('root'))

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <Router />
//   </ThemeProvider>,
//   document.getElementById('root')
// )

serviceWorker.unregister()
