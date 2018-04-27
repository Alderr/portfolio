import React, { Component } from 'react';
import Home from './HomePage';
import Projects from './ProjectsPage';
import HireMePopUp from './HireMe';

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGif: false,
      src: '',
    };
  }

  render() {
    return (
      <section>
        <Home />
        <Projects />
        <HireMePopUp />
      </section>
    );
  }
}

export default MainView;
