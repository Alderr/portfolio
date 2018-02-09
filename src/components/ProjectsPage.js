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
          <div className='project-container c1'>
            <div className='proj project-one-container'>
              <h1>Mailbox</h1>
              <p className='description'>Amazon SES is amazing for email-marketing.</p>
            </div>
          </div>
          <div className='project-container c2'>
            <div className='proj project-two-container'>
              <h1 className='title-c2'>_Krypto</h1>
              <p className='description'>Your cryptocurrency bestfriend.</p>
            </div>
          </div>
          <div className='project-container c3'>
            <div className='proj project-three-container'>
              <h1 className='title-c3'>fonts</h1>
              <p className='description'>Fonts, fonts, fonts.</p>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Projects;
