import React from 'react';

import '../css/home.css';

function Home() {
  return (
    <section className="home-page">
      <section className="main-qoute-wrapper">
        <div className="qoute">
          <div className="part-one">
            <h1>vernon mensah.<span className="job-title blue">front end developer</span>.{' '}</h1>
          </div>
          <div className="part-two"><h1>I get excited turning ideas into </h1></div>
          <div className="part-three"><h1>amazing products.</h1></div>
          <div className="part-four">
            <h1>
              <span className="blue">mobile</span>.{' '}
              <span className="blue">web</span>.{' '}
              <span className="blue">saas</span>.{' '}
              <span className="blue">startups</span>.{' '}
              <span className="blue">businesses</span>.{' '}
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
