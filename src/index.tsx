import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Pokedex />
  </React.StrictMode>,
  document.getElementById("root")
);
