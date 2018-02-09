import React, { Component } from 'react';
import '../css/fonts.css';
import '../css/fullScreen.css';

import { Link } from 'react-router-dom';

class FullScreenMenu extends Component {
  changeScreen() {

    this.props.toggle();
    <Link to='/about' ></Link>

  }
  render() {
    return (
      <div className='fullScreenMenu'>
        <div onClick={this.props.toggle} className='iconWrapper'>
          <img src='https://i.imgur.com/UVhfTGs.png' />
        </div>

      <div className='linksWrapper'>
        <ul>
          <li className='' onClick={null}>
            <Link to='/' ><h2>[ home ]</h2></Link>
          </li>
          <li className='' onClick={null}>
            <Link to='/about' ><h2>[ who am i ]</h2></Link>
          </li>
          <li className='' onClick={null}>
            <Link to='/projects' ><h2>[ projects ]</h2></Link>
          </li>
          <li className='' onClick={null}>
            <Link to='/contact' ><h2>[ contact ]</h2></Link>
          </li>
        </ul>
      </div>

      </div>

    );
  }
}

export default FullScreenMenu;
