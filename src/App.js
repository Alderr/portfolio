import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MePage from './components/MePage';

import './css/fonts.css';
import './App.css';

import MainView from './components/MainView';

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Route exact path="/" component={MainView} />
        <Route exact path="/me" component={MePage} />
      </section>
    </BrowserRouter>
  );
}

export default App;
