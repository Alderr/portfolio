import React from 'react';

import '../css/projects.css';


function Projects() {
  return (
    <section className="projectPage">
      <section className="title-container">
        <h1 className="title"> Let&apos;s see some products:</h1>
      </section>
      <section className="projects-container">
        <ul className="projects-list">
          <li className="project-container">
            <div className="project-illustration"><img src="" alt="" /></div>
            <div className="project-details">
              <div className="project-number">001</div>
              <div className="project-description">Google Docs meets video chat and code.</div>
              <h2 className="project-name"><a href="https://github.com/RowdyRuffBoysINC/RRB-client" target="_blank" rel="noopener noreferrer">cross-share.</a></h2>
            </div>
          </li>
          <li className="project-container">
            <div className="project-illustration"><img src="" alt="" /></div>
            <div className="project-details">
              <div className="project-number">002</div>
              <div className="project-description">Affordable email marketing with AWS Simple Email Service.</div>
              <h2 className="project-name"><a href="https://github.com/Alderr/Mailbox" target="_blank" rel="noopener noreferrer">mailbox.</a></h2>
            </div>
          </li>
          <li className="project-container">
            <div className="project-illustration"><img src="" alt="" /></div>
            <div className="project-details">
              <div className="project-number">003</div>
              <div className="project-description">GraphQL + Sendgrid + Twillio in one API.</div>
              <h2 className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">pokke.</a></h2>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Projects;
