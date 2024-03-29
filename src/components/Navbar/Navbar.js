import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className='container my-5'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid nav-list">
          <a className="navbar-brand mx-4 fw-bolder" href="/">SM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
