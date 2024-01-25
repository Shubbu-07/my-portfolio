import React from "react";
import './Home.css'


export default function Home() {
  return (
    <div className="container my-5">
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

      
    </div>
  );
}
