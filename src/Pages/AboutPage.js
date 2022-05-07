import React from 'react';
import {recordVisitingData} from '../Utils/WebsiteTrafficMonitor';

export function AboutPage() {
  React.useEffect(() => {
    recordVisitingData('About');
  });

  return (
    <div>
      <br/>
      <div className="project-thumbnail" id="page">
        <div className="wrapper">
          <div className="my-picture ratio-special">
            <div className="picture ratio-special margin-offset-special"/>
          </div>
          <div className="self-intro">
            <h1>ABOUT</h1>
            <p>Hello! I am Haoying Zhang, but my friends call me Franky. I’m a Jr. Designer at FCB Health, have a
              B.F.A. in Graphic Design at Queens College. </p>
            <div className="contact-breakline"/>
            <p>Contact Information</p>
            <p><a href="mailto:HH971764148@gmail.com" target="_blank" rel="noreferrer">HH971764148@gmail.com</a></p>
            <p>347-399-5701</p>
          </div>
        </div>
      </div>
    </div>
  );
}