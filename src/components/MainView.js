import React, { Component } from 'react';
import Home from './HomePage';
import Projects from './ProjectsPage';
import HireMePopUp from './HireMe';
import HoverGif from './HoverGif';

class MainView extends Component {
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

  toggleGif(bool) {
    this.setState({ showGif: bool });
  }

  render() {
    return (
      <section>
        <Home />
        <Projects toggleGif={bool => this.toggleGif(bool)} setSrc={src => this.setSrc(src)} />
        <HireMePopUp />
        <HoverGif showGif={this.state.showGif} src={this.state.src} />
      </section>
    );
  }
}

export default MainView;
