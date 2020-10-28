import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working now!</p>
        <Person />
        <Person />
        <Person />
        <p>Conflict 1</p>
      </div>
    );
  }
}

export default App;
