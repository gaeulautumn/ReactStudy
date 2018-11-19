import React, { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Todo List</h3>
        <Todo/>
      </div>
    );
  }
}

export default App;
