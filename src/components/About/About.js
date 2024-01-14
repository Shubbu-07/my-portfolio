import React from "react";
import "./About.css";
import githublogo from '../../Assets/github.svg'
import linkedinlogo from '../../Assets/linkedin.svg'

export default function About() {
  return (
    <div className="container">
      <div className="home-content">
        <h1>Hi! I'm </h1><h1 id="name">Shubham Mergu</h1>
        <h4 className="my-3">a self taught Web Developer</h4>
        <p className="my-3">
          Creative Web Developer Offering 4+ Years Of Experience Providing{" "}
          <br /> High-Impact Web Solutions For Many Different Organizations.
        </p>
      </div>

      <div className="d-flex align-items-center justify-content-center my-4">
        <button type="button" className="mx-3 btn btn-light resume-btn">Resume</button>
        <a href="https://github.com/Shubbu-07" className="mx-3"><img src={githublogo} alt="Github logo" /></a>
        <a href="https://linkedin.com/in/shubham-mergu" className="mx-3"><img src={linkedinlogo} alt="Linkedin logo" /></a>
      </div>
    </div>
  );
}
