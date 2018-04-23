import React from 'react';

import Projects from './ProjectsPage';

import '../css/home.css';

function Home() {
  return (
    <div>
      <div className="homePage">
        <div className="mainQouteWrapper">
          <div className="mainQoute">
            {/* <h1 className="firstWord">honestly, </h1>
            <h1 className="qoute secondWord"><span className="iLetter">I</span> get way too <span className="excited">excited</span></h1>
            <h1 className="qoute">turning <span className="awesomeIdeas">ideas</span> into</h1>
            <h1 className="qoute">amazing <span className="products">products.</span> </h1>
            <h1 className="qoute flaw">It&apos;s one thing</h1>
            <h1 className="qoute flaw-second">I wouldn&apos;t change about myself.</h1> */}

            <h1>
              <span className="firstWord">honestly,</span>
              <br />
              <span className="qoute secondWord"><span className="iLetter green">I</span> get way too <span className="excited"> excited</span></span>
              <span className="qoute"> turning <span className="awesomeIdeas"> ideas</span> into</span>
              <span className="qoute"> amazing<span className="products"> products</span></span>.
              <br />
              <div className="reflection">
                <span className="qoute flaw">It&apos;s one thing</span>
                <span className="qoute flaw-second"><span className="green"> I</span> wouldn&apos;t change about<span className="green"> myself</span>.</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
