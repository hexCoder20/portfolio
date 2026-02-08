import React from 'react';
import './Navbar.css';


function Navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>My Portfolio</div>
            <ul className='nav-links'>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#project'>PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}


export default Navbar;