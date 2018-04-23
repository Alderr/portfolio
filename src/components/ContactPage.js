import React, { Component } from 'react';


import '../css/fonts.css';
import '../css/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactPage-container">

        <div className="contact-info">
          <h3 className="hire">Hire me!</h3>
          <h3>vernonmensah@gmail.com</h3>
          <h3>linkedin.com/in/vernonmensah</h3>
          <h3>github.com/alderr</h3>
          <img className="gif" src="https://s-media-cache-ak0.pinimg.com/originals/ab/7f/85/ab7f854e1f83760f6becc0a244dc85d3.gif" />
        </div>
      </div>
    );
  }
}

export default Contact;
