import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/fonts.css';
import './App.css';


import Home from './components/HomePage';
import HireMePopUp from './components/HireMe';
import HoverGif from './components/HoverGif';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <HireMePopUp />
        <HoverGif />
      </div>
    </BrowserRouter>
  );
}

export default App;
