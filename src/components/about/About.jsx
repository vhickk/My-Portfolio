import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {

  return (
    <section id='About'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        
        <div className=" container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward  className = 'about__icon'/>
                <h5>Experience</h5>
                <small>1 year working experience</small>
              </article>

              <article className="about__card">
                <FiUsers  className = 'about__icon'/>
                <h5>Clients</h5>
                <small>20+ worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary  className = 'about__icon'/>
                <h5>Projects</h5>
                <small>20+ completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi eaque possimus sapiente quos debitis necessitatibus, eos, facere nobis veniam odio numquam voluptatibus cumque illum perspiciatis, consequuntur illo doloremque? Aspernatur.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About;