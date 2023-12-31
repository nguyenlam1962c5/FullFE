import { ChakraProvider, ThemeConfig, extendTheme, ComponentStyleConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Button: ComponentStyleConfig = {
  variants: {
    'primary': {
      bg: '#fedf56',
      borderRadius: "8px",
      color: "#6a5809",
      width: "100% auto",
      fontWeight: 'bold',      
      padding: "20px 25px",
      border: "1px solid #fedf56",
      fontSize: "18px",
    },  
    'outline': {      
      borderRadius: "5px",
      color: "#fedf56",
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