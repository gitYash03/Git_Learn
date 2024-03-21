import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {

  global:(props) => ({
    body:{
      bg:mode("gray.100","#000")(props),
      color:mode("gray.100","#000")
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>

)
