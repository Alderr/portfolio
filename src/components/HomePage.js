import React, { Component } from 'react';

import Navigation from './Navigation';

import '../css/fonts.css';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className='mainQouteWrapper'>
          <div className="mainQoute">
            <h1 className='firstWord'>honestly, </h1>
            <h1 className='qoute secondWord'><span className='iLetter'>I</span> get way too <span className='excited'>excited</span></h1>
            <h1 className='qoute'>turning <span className='awesomeIdeas'>ideas</span> into</h1>
            <h1 className='qoute'>amazing <span className='products'>products.</span> </h1>
            <h1 className='qoute flaw'>It's one thing</h1>
            <h1 className='qoute flaw-second'>I wouldn't change about myself.</h1>
          </div>
        </div>
        <Navigation />
      </div>

    );
  }
}

export default Home;
