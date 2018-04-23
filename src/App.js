import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/fonts.css';
import './App.css';


import Home from './components/HomePage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
