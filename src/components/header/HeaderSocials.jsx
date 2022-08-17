import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target= 'blank'><BsLinkedin /></a>
        <a href="https://github.com" target= 'blank'><BsGithub /></a>
        <a href="https://linkedin.com" target= 'blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials