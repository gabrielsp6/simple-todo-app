import '../styles/globals.css'
import { ChakraProvider  } from '@chakra-ui/react'


const customTheme = {
  colors: {
    primary: "green",
    secondary: "mediumseagreen"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />

    </ChakraProvider>
  ) 
}

export default MyApp
