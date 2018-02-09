import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/fonts.css';

import Home from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
