import React, { Component } from 'react';

import Projects from './ProjectsPage';

import '../css/fonts.css';
import '../css/home.css';

function Home() {
  return (
    <div>
      <div className="homePage">
        <div className="mainQouteWrapper">
          <div className="mainQoute">
            <h1 className="firstWord">honestly, </h1>
            <h1 className="qoute secondWord"><span className="iLetter">I</span> get way too <span className="excited">excited</span></h1>
            <h1 className="qoute">turning <span className="awesomeIdeas">ideas</span> into</h1>
            <h1 className="qoute">amazing <span className="products">products.</span> </h1>
            <h1 className="qoute flaw">It&apos;s one thing</h1>
            <h1 className="qoute flaw-second">I wouldn&apos;t change about myself.</h1>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
