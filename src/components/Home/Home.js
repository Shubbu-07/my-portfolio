import React from "react";
import './Home.css'
import githublogo from '../../Assets/github.svg'
import linkedinlogo from '../../Assets/linkedin.svg'

export default function Home() {
  return (
    <div className="container">
      <div className="home-content">
        <ul>
          <li><h1>Hi! I'm </h1></li>
          <li><h1 id="name">Shubham Mergu</h1></li>
        </ul>
        <h4 className="my-3">a self taught Web Developer</h4>
        <p className="my-3 mx-5">
        Welcome to my Portfolio! I am a Web Developer enthusiast. In this corner of the internet, I invite you to explore my journey, projects, and the diverse skills that define me. Let's connect and explore the possibilities.
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
