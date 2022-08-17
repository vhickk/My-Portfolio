import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Writing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
        {/* WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>

        {/* CONTENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className= 'service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services;