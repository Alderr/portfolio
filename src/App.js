import React, { Component } from 'react';

import './css/fonts.css';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/HomePage';
import About from './components/AboutPage';
import Projects from './components/ProjectsPage';
import Contact from './components/ContactPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
