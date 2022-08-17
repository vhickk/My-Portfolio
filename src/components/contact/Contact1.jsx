import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineEmail} from 'react-icons/md'



const Contact1 = () => {
  return (
    <section id = 'Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className=" container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>ibevhicktor@gmail.com</h5>
            <a href="mailto:ibevhicktor@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ibe Victor</h5>
            <a href="mailto:ibevhicktor@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>whatsapp</h4>
            <h5>+2348148493848</h5>
            <a href="https://api.whatsap.com/send?phone+2348148493848">Send a message</a>
          </article>


        </div>

        <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="10" placeholder='Enter Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>

      
    </section>
  )
}

export default Contact1;