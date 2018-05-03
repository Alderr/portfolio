import React from 'react';
import Home from './HomePage';
import Projects from './ProjectsPage';
import HireMePopUp from './HireMe';

function MainView() {
  return (
    <section>
      <Home />
      <Projects />
      <HireMePopUp />
    </section>
  );
}

export default MainView;
