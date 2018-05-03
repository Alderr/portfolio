import React from 'react';

import '../css/fullScreen.css';
import gitLogo from '../img/black.png';
import gmailLogo from '../img/icons8-gmail-50.png';
import linkedinLogo from '../img/icons8-linkedin-48.png';

function FullScreenPopUp(props) {
  return (
    <section className="fullscreen-popup">
      <section className="popup-content">
        <section className="iconWrapper" onClick={props.toggle} role="button" tabIndex="0" onKeyPress={null} >
          <img src="https://i.imgur.com/UVhfTGs.png" alt="Exit" />
        </section>
        <section className="about-info">
          <h1>Human<span>.</span></h1>
          <h1>Avid reader.</h1>
          <h1>Smiles a lot.</h1>
          <h1>Loyal.</h1>
          <h1>Enjoys hackathons.</h1>
          <h1>Adaptive.</h1>
          <h1>Self-aware.</h1>
        </section>
        <br />
        <section className="contact-info">
          <h2 className="hire">Hire me!</h2>
          {/* <a href="https://github.com/Alderr" target="_blank" rel="noopener noreferrer"><img src={gitLogo} alt="my github" /></a>
          <a href="mailto:vernonmensah@gmail.com?Subject=Hello%20again" target="_blank" rel="noopener noreferrer"><img src={gmailLogo} alt="my gmail" /></a>
          <a href="https://linkedin.com/in/vernonmensah" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="my linkedin" /></a> */}
          <div className="explicit-links">
            <h3>vernonmensah@gmail.com</h3>
            <h3>linkedin.com/in/vernonmensah</h3>
            <h3>github.com/alderr</h3>
          </div>
        </section>
      </section>
    </section>
  );
}


export default (FullScreenPopUp);
