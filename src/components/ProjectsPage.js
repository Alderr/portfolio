import React from 'react';

import '../css/projects.css';


function Projects(props) {
  function setUpGif(src) {
    props.setSrc(src);
    props.toggleGif(true);
  }

  function turnOffGif() {
    props.setSrc('');
    props.toggleGif(false);
  }

  return (
    <div className="projectPage">
      <div className="title-container">
        <h1 className="title"> Let&apos;s see some products:</h1>
      </div>
      <div className="projects-container">
        <ul className="projects-list">
          <li className="project-container">
            <h2 onMouseEnter={() => setUpGif('https://media.giphy.com/media/AtPa0Mcpllh4Y/giphy.gif')} onMouseLeave={turnOffGif} className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">cross-share.</a></h2>
            <div className="project-description">Google Docs meets video chat and code.</div>
          </li>
          <li className="project-container">
            <h2 onMouseEnter={() => setUpGif('https://media.giphy.com/media/9NRB16ueUlogE/giphy.gif')} onMouseLeave={turnOffGif} className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">mailbox.</a></h2>
            <div className="project-description">Affordable email marketing with AWS Simple Email Service.</div>
          </li>
          <li className="project-container">
            <h2 onMouseEnter={() => setUpGif('https://media.giphy.com/media/l0MYwJBnBRQ3Tm5cA/giphy.gif')} onMouseLeave={turnOffGif} className="project-name"><a href="https://github.com/Alderr/Pokke" target="_blank" rel="noopener noreferrer">pokke.</a></h2>
            <div className="project-description">GraphQL + Sendgrid + Twillio in one API.</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
