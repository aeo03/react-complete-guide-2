import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 27},
      {name: "Stephanie", age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked')
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 27},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 27},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid blue'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!!')}
            changed={this.nameChangedHandler}>My Hobbies: Biking</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working now!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
