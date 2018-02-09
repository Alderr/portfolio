import React, { Component } from 'react';

import Navigation from './Navigation';

import '../css/fonts.css';
import '../css/projects.css';



class Projects extends Component {
  render() {
    return (
      <div className='projectPage-container'>
        <div className='title-container'><h1 className='title'> Projects </h1></div>
        <div className='projects'>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
          <div className='project-container'> </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Projects;
