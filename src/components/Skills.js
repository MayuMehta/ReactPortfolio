import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
        <div className='container'>
            <h2 className='text-black'>Skills</h2>
            <div className='skill-container pt-3'>
                <div className='d-flex flex-wrap col-11 ml-auto'>
                    <div class="grid-item"> <label htmlFor="file">HTML</label><br />
                       <div className="d-flex ">
                            <progress className="file" value="90" max="100"> 95% </progress>
                            <label htmlFor="file" className='m-auto'>90%</label>
                       </div>
                    </div>
                    <div class="grid-item"><label htmlFor="file">CSS</label><br />
                        <div className="d-flex">
                            <progress className="file" value="80" max="100"> 80% </progress>
                            <label htmlFor="file" className='m-auto'>80%</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap col-11 ml-auto'>
                    <div class="grid-item"><label htmlFor="file">Javascript</label><br />
                        <div className="d-flex">
                            <progress className="file" value="60" max="100"> 60% </progress>
                            <label htmlFor="file" className='m-auto'>60%</label>
                        </div>
                    </div>  
                    <div class="grid-item"><label htmlFor="file">React</label><br />
                        <div className="d-flex">
                            <progress className="file" value="60" max="100"> 60% </progress>
                            <label htmlFor="file" className='m-auto'>60%</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap col-11 ml-auto'>
                    <div class="grid-item"><label htmlFor="file">Python</label><br />
                        <div className="d-flex">
                            <progress className="file" value="60" max="100"> 60% </progress>
                            <label htmlFor="file" className='m-auto'>60%</label>
                        </div>
                    </div>
                    <div class="grid-item"><label htmlFor="file">Java</label><br />
                        <div className="d-flex">
                            <progress className="file" value="60" max="100"> 60% </progress>
                            <label htmlFor="file" className='m-auto'>60%</label>
                        </div>
                    </div> 
                </div> 
                <div className='d-flex flex-wrap col-11 ml-auto'>
                    <div class="grid-item"><label htmlFor="file">C++</label><br />
                        <div className="d-flex">
                            <progress className="file" value="65" max="100"> 65% </progress>
                            <label htmlFor="file" className='m-auto'>65%</label>
                        </div>
                    </div>
                    <div class="grid-item"><label htmlFor="file">C</label><br />
                        <div className="d-flex">
                            <progress className="file" value="75" max="100"> 75% </progress>
                            <label htmlFor="file" className='m-auto'>75%</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
