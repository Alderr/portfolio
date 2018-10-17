import React from 'react';
import { withRouter } from 'react-router-dom';

import '../css/fullScreen.css';

function FullScreenPopUp(props) {
  return (
    <section className="me-page">
      <div className="home-button-wrapper" onClick={() => props.history.push('/')} role="button" tabIndex="0" onKeyPress={null} >
        <h1> home </h1>
      </div>
      <section className="me-content">
        <section className="about-info">
          <h1>Human<span className="dot">. </span></h1>
          <h1>Avid reader<span className="dot">.</span></h1>
          <h1>Smiles a lot<span className="dot">.</span></h1>
          <h1>Loyal<span className="dot">.</span></h1>
          <h1>Enjoys hackathons<span className="dot">.</span></h1>
          <h1>Adaptive<span className="dot">.</span></h1>
          <h1>Self-aware<span className="dot">.</span></h1>
        </section>
        <br />
        <section className="contact-info">
          <h2 className="hire">Hire me!</h2>
          <div className="explicit-links">
            <h3><span className="connect">Email me at </span><span className="link">vernonmensah@gmail.com.</span></h3>
            <h3><span className="connect">Connect with me on </span><span className="link"> linkedin.com/in/vernonmensah.</span></h3>
            <h3><span className="connect">Code with me at </span><span className="link"> github.com/alderr.</span></h3>
          </div>
        </section>
      </section>
    </section>
  );
}

export default withRouter(FullScreenPopUp);
