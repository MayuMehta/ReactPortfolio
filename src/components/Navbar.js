import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">Mayush Kumar Raaz</a>
            <button className="navbar-toggler text-success" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link active" href="#about">About <span className="sr-only">(current)</span></a>
                <a className="nav-link active" href="#skills">Skills</a>
                <a className="nav-link active" href="#education">Education</a>
                <a className="nav-link active" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
  )
}
