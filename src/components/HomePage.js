import React from 'react';

import '../css/home.css';

function Home() {
  return (
    <section>
      <section className="homePage">
        <section className="mainQouteWrapper">
          <section className="mainQoute">
            <h1>
              <span className="firstWord">honestly,</span>
              <br />
              <span className="qoute secondWord"><span className="iLetter green">I</span> get way too <span className="excited"> excited</span></span>
              <span className="qoute"> turning <span className="awesomeIdeas"> ideas</span> into</span>
              <span className="qoute"> amazing<span className="products"> products</span></span>.
              <br />
              <section className="reflection">
                <span className="qoute flaw">It&apos;s one thing</span>
                <span className="qoute flaw-second"><span className="green"> I</span> wouldn&apos;t change about<span className="green"> myself</span>.</span>
              </section>
            </h1>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Home;
