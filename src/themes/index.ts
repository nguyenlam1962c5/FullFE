import { ChakraProvider, ThemeConfig, extendTheme, ComponentStyleConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Button: ComponentStyleConfig = {
  variants: {
    'primary': {
      bg: 'blue',
      borderRadius: "8px",
      color: "white",
      fontWeight: 'bold',      
      padding: "20px auto",
      border: "1px solid #080879",
      fontSize: "20px",
    },  
    'outline': {      
      borderRadius: "5px",
      color: "blue",
      fontWeight: 'bold',      
      padding: "12px 36px",
      border: "1px solid rgba(254,223,86,.6) !important", 
    },   
  }
}


const components = {
  Button,
}

const theme = extendTheme({
  config,
  components
});

export default theme;