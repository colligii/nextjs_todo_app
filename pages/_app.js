import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import list_store from '../store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider
    store={list_store}
  >
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
}

export default MyApp
