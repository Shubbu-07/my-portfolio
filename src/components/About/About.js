import React from "react";
import "./About.css";
import profilePhoto from "../../Assets/Profile photo.jpg";
import githublogo from "../../Assets/github.svg";
import linkedinlogo from "../../Assets/linkedin.svg";

export default function About() {
  return (
    <>
      <div className="">
        <h1 className="about-title text-center">About</h1>
      </div>
      <div className="container d-flex ">
        <div className="row">
          <div className="col-lg-6">
            <div className="profile-photo mx-5 d-flex justify-content-center">
              <img src={profilePhoto} alt="My profile photo" />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="mx-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                perspiciatis, deleniti ad nobis, ipsum laudantium veritatis ea
                quibusdam officia repellat nam doloribus mollitia aut magnam
                natus. Facilis quos dolorem dicta!
              </p>
              <div className="d-flex align-items-center justify-content-center my-4">
                <button type="button" className="mx-3 btn btn-light resume-btn">
                  Resume
                </button>
                <a href="https://github.com/Shubbu-07" className="mx-3">
                  <img src={githublogo} alt="Github logo" />
                </a>
                <a href="https://linkedin.com/in/shubham-mergu" className="mx-3">
                  <img src={linkedinlogo} alt="Linkedin logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
