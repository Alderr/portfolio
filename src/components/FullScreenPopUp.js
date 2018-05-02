import React from 'react';

import '../css/fullScreen.css';
import gitLogo from '../img/black.png';
import gmailLogo from '../img/icons8-gmail-50.png';
import linkedinLogo from '../img/icons8-linkedin-48.png';

function FullScreenPopUp(props) {
  return (
    <section className="fullscreen-popup">
      <section className="popup-content">
        <section onClick={props.toggle} role="button" tabIndex="0" onKeyPress={null} className="iconWrapper">
          <img src="https://i.imgur.com/UVhfTGs.png" alt="Exit" />
        </section>
        <section className="about-info">
          <h2>I&apos;m <span id="name">Vernon Mensah.</span> Full Stack Developer.</h2>
          <h2>Sleepless nights coding galore.</h2>
          <h5>I smile way too much for my own good.</h5>
        </section>
        <br />
        <section className="contact-info">
          <h3 className="hire">Hire me!</h3>
          <a href="https://github.com/Alderr" target="_blank" rel="noopener noreferrer"><img src={gitLogo} alt="my github" /></a>
          <a href="mailto:vernonmensah@gmail.com?Subject=Hello%20again" target="_blank" rel="noopener noreferrer"><img src={gmailLogo} alt="my gmail" /></a>
          <a href="https://linkedin.com/in/vernonmensah" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="my linkedin" /></a>
          <h3>vernonmensah@gmail.com</h3>
          <h3>linkedin.com/in/vernonmensah</h3>
          <h3>github.com/alderr</h3>
        </section>
      </section>
    </section>
  );
}


export default (FullScreenPopUp);
