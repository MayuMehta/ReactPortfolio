import React from 'react';
import pdf from './assets/CV.pdf'
import './About.css'

export default function About() {
  return (
    <section className="dark-bg pt-5" id="about">
        <div className="container text-white pb-5">
            <div className="d-flex flex-wrap">
                <div className="col-lg-6 col-12 mb-auto"> 
                    <h2>About Me</h2>
                    <p>
                        I am extremely proficient in Front-End Development using HTML5, Cascade Style 
                        Sheets (CSS3), Bootstrap, Javascript And apart from 
                        Front-End, I have good knowledge in Back-End using PHP & MySQL as well as in designing 
                        using Adobe Photoshop, and continuously engage in trying to extend my skills with 
                        new technology.
                    </p>
                </div>
                <div className="col-lg-6 col-12 pt-5">
                    <h4>Any Type Of Query & Discussion</h4>
                    <a href="mailto:mayushar8434@gmail.com" className="text-white d-flex pt-3">
                        <i className="fas fa-envelope pt-2"></i>
                        <h5>mayushar8434@gmail.com</h5>
                    </a>
                    <div className="pt-3">
                        <a href={pdf} className="custom-button px-4 py-2" target="_blank" rel="noreferrer">
                            <i className="fas fa-download"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
