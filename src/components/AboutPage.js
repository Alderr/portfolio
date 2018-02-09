import React, { Component } from 'react';

import Navigation from './Navigation';

import '../css/fonts.css';
import '../css/about.css';

class About extends Component {
  render() {
    return (
      <div className='aboutPage-container'>
        <Navigation />

        <div className='contact-info'>
        <h2>Hello,</h2>
        <h2>I'm <span id='name'>Vernon Mensah.</span></h2>
        <h2>Sleepless nights coding galore</h2>
        <h5>I smile way too much for my own good</h5>
        </div>

        <h3>Junior Software Developer.</h3>
      </div>
    );
  }
}

export default About;
