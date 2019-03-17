import React, { Component } from "react";
import Pokemon from './Pokemon';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Pokemon with Redux!</p>
          <Pokemon />
        </header>
      </div>
    );
  }
}

export default App;
