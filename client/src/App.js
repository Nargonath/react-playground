import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";

function Home() {
  return <div>Hello i'm HOME</div>;
}

function Page1() {
  return <div>Hello i'm Page1</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Home path="/"></Home>
        <Page1 path="/page1"></Page1>
      </Router>
    </div>
  );
}

export default App;
