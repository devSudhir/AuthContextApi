import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContextProvider>,
  rootElement
);
