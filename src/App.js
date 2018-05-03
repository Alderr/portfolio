import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MePage from './components/MePage';

import './css/fonts.css';
import './App.css';

import MainView from './components/MainView';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <section className="App">
          <Route exact path="/" component={MainView} />
          <Route exact path="/me" component={MePage} />
        </section>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
