import React, { Component } from 'react';
import './App.css';
import Login from './routerComponents/Login'
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is a cool Machine</h1>
      <Login />
      </div>
    );
  }
}

export default App;
