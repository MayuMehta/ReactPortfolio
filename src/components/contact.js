import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div>
      <section id="contact" className='pt-5'>
        <div className='container'> 
          <h2>Stay Connected</h2>
          <p className="mb-0">
                  <small>Gurugaon,Haryana,India</small>
              </p>
              <a href="mailto:mayushar8434@gmail.com" className="m-0 text-white" style={{fontSize:20}}>
                  <strong>mayushar8434@gmail.com</strong>
              </a>
              <p>(+91)7808111286</p>
              <div className="nav-icon py-3">
                  <a href="https://www.linkedin.com/in/mayush-mehta-343b5521b/" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/mayushmehta1235?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-white w-3 p-2">
                      <i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/i_m_mayushmehta/" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-instagram"></i></a>
                  <a href="https://github.com/MayuMehta" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-github"></i></a>
              </div>
        </div>
      </section>
    </div>
  )
}
