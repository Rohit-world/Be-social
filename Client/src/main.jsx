import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import { store } from './Redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <ChakraProvider >
    <App />
  </ChakraProvider>
  </BrowserRouter>,</Provider>
)
