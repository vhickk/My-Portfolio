import React, { useEffect } from 'react';
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';


const Nav = () => 
{
  const {activeNav, setActiveNav} = useState("#")
//   const transitionNavBar =()  =>  
// {
//   if (window.onClick == '#')
//   {
//     setActiveNav(true);
//   }
//   else if (window.onClick == '#About')
//   {
//     setActiveNav(true);
//   } 
//   {
//     setActiveNav(false);
//   }
// }
// useEffect(() =>{window.addEventListener("onClick", transitionNavBar);
// return () =>window.removeEventListener("onClick", transitionNavBar);
// }
// ,[]
// );

  return (
    <nav>
        <a href="#" className={`active ${activeNav && ''} `}><AiOutlineHome /></a>
        <a href="#About" onClick={()  => setActiveNav('#About')} className={`active ${activeNav && ''} `}><AiOutlineUser /></a>
        <a href="#Experience" onClick={()  => setActiveNav('#Experience)')} className={activeNav === '#Experience' ? 'active' :" "}><BiBook /></a>
        <a href="#Services" onClick={()  => setActiveNav('#Services)')} className={activeNav === '#Services' ? 'active' :" "}><RiServiceLine /></a>
        <a href="#Contact" onClick={()  => setActiveNav('#Contact)')} className={activeNav === '#contact' ? 'active' :" "}><BiMessageSquareDetail /></a>
        
    </nav>
  )
}

export default Nav;