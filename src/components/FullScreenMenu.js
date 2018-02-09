import React, { Component } from 'react';
import '../css/fonts.css';
import '../css/fullScreen.css';

class FullScreenMenu extends Component {

  render() {
    return (
      <div className='fullScreenMenu'>
      <div className='iconWrapper'> </div>

      <div className='linksWrapper'>
      <ul>
      <li className='' onClick={null}>
      <h2>[ home ]</h2>
      </li>
      <li className='' onClick={null}>
      <h2>[ about ]</h2>
      </li>
      <li className='' onClick={null}>
      <h2>[ projects ]</h2>
      </li>
      </ul>
      </div>

      </div>

    );
  }
}

export default FullScreenMenu;
