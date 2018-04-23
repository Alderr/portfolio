import React, { Component } from 'react';

import '../css/hoverGif.css';

class HoverGif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGif: false,
      src: '',
    };
  }

  setSrc(src) {
    this.setState({ src });
  }

  toggleGif() {
    this.setState({ showGif: !this.state.showGif });
  }

  render() {
    let gif = null;

    if (this.props.showGif) {
      gif = (<section><img src={this.props.src} className="hover-gif-box" alt="gif for hovered project" /></section>);
    }

    return (gif);
  }
}

export default HoverGif;
