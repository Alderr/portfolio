import React, { Component } from 'react';

import Navigation from './Navigation';

import '../css/fonts.css';
import '../css/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='contactPage-container'>
        <Navigation />
        <h1> Contact </h1>

        <div className='contact-info'>
        <h2>vernonmensah@gmail.com</h2>
        </div>
      </div>
    );
  }
}

export default Contact;
