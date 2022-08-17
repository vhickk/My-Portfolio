import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='Experience'>
      <h5>MY SKILLS</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>REACT JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>REACT NATIVE</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>TAILWIND</h4>
                <small className='text-light'>Experienced</small>

              </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
              

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>NodeJs</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>PYTHON</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience;
