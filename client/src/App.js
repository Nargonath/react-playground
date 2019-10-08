import React from "react";
import { Router, Link } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";
import { Home, Page1 } from "./scenes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="nav">
          <ul>
            <li>
              <Link className="white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="white" to="/page1">
                Page1
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Router>
        <Home path="/"></Home>
        <Page1 path="/page1"></Page1>
      </Router>
    </div>
  );
}

export default App;
