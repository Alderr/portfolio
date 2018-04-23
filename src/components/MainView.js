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

  toggleGif() {
    this.setState({ showGif: !this.state.showGif });
  }

  render() {
    return (    
      <section>
        <Home />
        <Projects toggleGif={() => this.toggleGif()} setSrc={() => this.setSrc()} />
        <HireMePopUp />
        <HoverGif showGif={this.state.showGif} src={this.state.src} />
      </section>
    );
  }
}

export default MainView;
