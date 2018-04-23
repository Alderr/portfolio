import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../css/fonts.css';
import '../css/fullScreen.css';

class FullScreenMenu extends Component {
  changeScreen(path) {
    this.props.toggle();
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="fullScreenMenu">
        <div onClick={this.props.toggle} role="button" tabIndex="0" onKeyPress={null} className="iconWrapper">
          <img src="https://i.imgur.com/UVhfTGs.png" alt="Exit" />
        </div>

        <div className="linksWrapper">
          <ul>
            <li className="" onClick={() => this.changeScreen('/')}>
              <h2>[ projects ]</h2>
            </li>
            <li className="" onClick={() => this.changeScreen('/about')} onKeyPress={null}>
              <h2>[ who am i ]</h2>
            </li>
            <li className="" onClick={() => this.changeScreen('/contact')} onKeyPress={null}>
              <h2>[ contact ]</h2>
            </li>
          </ul>
        </div>

      </div>

    );
  }
}

export default withRouter(FullScreenMenu);
