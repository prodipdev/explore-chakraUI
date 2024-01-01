import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./layout/Main.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);