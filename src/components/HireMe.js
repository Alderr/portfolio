import React, { Component } from 'react';
import PopUp from './FullScreenPopUp';

import '../css/hireMe.css';

class HireMePopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popUp: false,
    };
  }

  togglePopUp() {
    this.setState({ popUp: !this.state.popUp });
  }

  render() {
    return (
      <section className="hireme-page">
        <h1 onClick={() => this.togglePopUp()} className="">hire me</h1>
        {this.state.popUp ? <PopUp toggle={() => this.togglePopUp()} /> : null}
      </section>
    );
  }
}

export default HireMePopUp;
