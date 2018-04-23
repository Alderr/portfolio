import React, { Component } from 'react';

import '../css/hoverGif.css';

class HoverGif extends Component {
  render() {
    let gif = null;

    if (this.props.showGif) {
      gif = (<section className="ifMobile"><img src={this.props.src} className="hover-gif-box" alt="gif for hovered project" /></section>);
    }

    return (gif);
  }
}

export default HoverGif;
