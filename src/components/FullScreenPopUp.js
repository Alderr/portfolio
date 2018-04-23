import React, { Component } from 'react';

import '../css/fonts.css';
import '../css/fullScreen.css';

class FullScreenPopUp extends Component {
  changeScreen(path) {
    this.props.toggle();
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="fullScreenPopUp">
        <div className="popup-content">
          <div onClick={this.props.toggle} role="button" tabIndex="0" onKeyPress={null} className="iconWrapper">
            <img src="https://i.imgur.com/UVhfTGs.png" alt="Exit" />
          </div>
          <div className="about-info">
            <h2>I'm <span id="name">Vernon Mensah.</span> Full Stack Developer.</h2>
            <h2>Sleepless nights coding galore.</h2>
            <h5>I smile way too much for my own good.</h5>
          </div>
          <br />
          <div className="contact-info">
            <h3 className="hire">Hire me!</h3>
            <h3>vernonmensah@gmail.com</h3>
            <h3>linkedin.com/in/vernonmensah</h3>
            <h3>github.com/alderr</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default (FullScreenPopUp);
