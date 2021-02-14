import React from 'react'   
import {Link} from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';
import {useState} from 'react';
import {GrClose} from 'react-icons/gr'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)   

    function toggleMenu(){
        setIsClicked(!isClicked);
        }

  

    return (
        <nav className = 'navbar'>
         <div className='owner-name'><h1 ><span>S</span>ylvain <span>Y</span>abré</h1></div>
         
             <ul className = {isClicked ? 'nav-links active':'nav-links' }>
                 {isClicked&& <GrClose className = 'closeIcon' onClick = {toggleMenu}/>}
                   <li className = 'nav-link-item' onClick = {toggleMenu}>
                    <Link to = '/'
                    className = 'nav-link'>Home</Link>
                </li> 
                <li className = 'nav-link-item' onClick = {toggleMenu}>
                    <Link to = '/about'
                    className = 'nav-link'>Who I am</Link>
                </li>
                <li className = 'nav-link-item' onClick = {toggleMenu}>
                    <Link to = '/education'
                    className = 'nav-link' >Education</Link>
                    
                </li>
                <li className = 'nav-link-item' onClick = {toggleMenu}>
                    <Link to = '/skills'
                    className = 'nav-link'>Skills</Link>
                </li>
                <li className = 'nav-link-item' onClick = {toggleMenu}>
                    <Link to = '/projects'
                    className = 'nav-link'>Projects</Link>
                </li>
            </ul>
             
        {!isClicked&& <HamburgerMenu toggleMenu= {toggleMenu} /> }
            
        </nav>
    )
}

export default Navbar;
