import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// extend the theme
// const colorSchemes = {
//   btn: '#FF5C11'
// }

const colors = {
  btn: {
    initial: '#FF5C11',
    hover: '#FF7E42'
  }
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
