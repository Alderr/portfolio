import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/hireMe.css';

function HireMePopUp(props) {
  return (
    <section className="hireme-button">
      <div className="hireme-button-container">
        <h1 onClick={() => props.history.push('/me')} className="">hire me</h1>
      </div>
    </section>
  );
}


export default withRouter(HireMePopUp);
