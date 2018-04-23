import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            <h2>I'm <span id="name">Vernon Mensah.</span></h2>
            <h2>Sleepless nights coding galore.</h2>
            <h5>I smile way too much for my own good.</h5>
          </div>
          <div className="contact-info">
            <h3 className="hire">Hire me!</h3>
            <h3>vernonmensah@gmail.com</h3>
            <h3>linkedin.com/in/vernonmensah</h3>
            <h3>github.com/alderr</h3>
            {/* <img className="gif" src="https://s-media-cache-ak0.pinimg.com/originals/ab/7f/85/ab7f854e1f83760f6becc0a244dc85d3.gif" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FullScreenPopUp);
