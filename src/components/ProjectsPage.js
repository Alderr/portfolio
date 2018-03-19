import React, { Component } from 'react';

import Navigation from './Navigation';

import '../css/fonts.css';
import '../css/projects.css';


function Projects() {
  return (
    <div className="projectPage-container">
      <div className="title-container"><h1 className="title"> [ Projects ] </h1></div>
      <div className="projects">
        <div className="project-container">
          <div className="project-image c1"></div>
          <div className="proj project-one-container">
            <h1>Mailbox</h1>
            <p className="description">Amazon SES is amazing for email-marketing.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image c2"></div>
          <div className="proj project-two-container">
            <h1 className="title-c2">_Krypto</h1>
            <p className="description">Your cryptocurrency bestfriend.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image c3"></div>
          <div className="proj project-three-container">
            <h1 className="title-c3">fonts</h1>
            <p className="description">Fonts, fonts, fonts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
