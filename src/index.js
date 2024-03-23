import React from "react";
import ReactDOM from "react-dom";
import "../src/scss/index.css"
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
