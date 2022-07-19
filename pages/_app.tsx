import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter',
    heading: 'Inter'
  },
  components: {
    Text: {
      baseStyle: {
        color: "#242424",
        letterSpacing: '1%',
        fontFamily: 'Inter',
      }
    },
    Heading: {
      baseStyle: {
        color: '#242424',
        letterSpacing: '-0.06rem',
        fontFamily: "Inter"
      }
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
