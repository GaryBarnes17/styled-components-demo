import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "@soluto-private/mx-asurion-ui-react";
import GlobalStyle from "./globalStyles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
