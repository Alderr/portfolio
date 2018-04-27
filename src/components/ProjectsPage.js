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
            <h2 className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">cross-share.</a></h2>
            <section className="project-description">Google Docs meets video chat and code.</section>
          </li>
          <li className="project-container">
            <h2 className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">mailbox.</a></h2>
            <section className="project-description">Affordable email marketing with AWS Simple Email Service.</section>
          </li>
          <li className="project-container">
            <h2 className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">pokke.</a></h2>
            <section className="project-description">GraphQL + Sendgrid + Twillio in one API.</section>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Projects;
