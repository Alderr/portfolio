import React from 'react';

import crossShareGif from '../img/ezgif.com-gif-maker.gif';
import '../css/projects.css';


function Projects() {
  return (
    <section className="project-page">
      <section className="title-container">
        <h1 className="title"> Let&apos;s see some products:</h1>
      </section>
      <section className="projects-container">
        <ul className="projects-list">
          <a href="https://github.com/RowdyRuffBoysINC/RRB-client" target="_blank" rel="noopener noreferrer">
            <li className="project-container">
              <div className="project-illustration"><img src={crossShareGif} alt="" /></div>
              <div className="project-details">
                <div className="project-number non-mobile blue"><h2>001</h2></div>
                <div className="project-description"><h2>A real-time, collaborative application that resembles Google Docs featuring a webcam, chat, code/document editing, and a whiteboard.</h2></div>
                <div className="project-name"><h2><span className="blue">cross-share</span>.</h2></div>
              </div>
            </li>
          </a>
          <a href="https://github.com/Alderr/Mailbox" target="_blank" rel="noopener noreferrer">
            <li className="project-container">
              <div className="project-illustration"><img src="" alt="" /></div>
              <div className="project-details">
                <div className="project-number non-mobile blue"><h2>002</h2></div>
                <div className="project-description"><h2>An email marketing tool that’s more affordable than Mailchimp with the power of AWS!</h2></div>
                <div className="project-name"><h2><span className="blue">mailbox</span>.</h2></div>
              </div>
            </li>
          </a>
          <a href="https://github.com/Alderr/Mailbox" target="_blank" rel="noopener noreferrer">
            <li className="project-container">
              <div className="project-illustration"><img src="" alt="" /></div>
              <div className="project-details">
                <div className="project-number non-mobile blue"><h2>003</h2></div>
                <div className="project-description"><h2>Send emails and text messages; a combination of Twilio and Sendgrid, as reminders in any app through an API!</h2></div>
                <div className="project-name"><h2><span className="blue">pokke</span>.</h2></div>
              </div>
            </li>
          </a>
        </ul>
      </section>
    </section>
  );
}

export default Projects;
