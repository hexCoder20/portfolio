import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy;{new Date().getFullYear()} MyPortfolio. All rights reserved</p>
        <div className="social-links">
            <a href='#'>GitHub</a>
            <a href='#'>LinkedIn</a>
            <a href='#'>Twitter</a>
        </div>
    </footer>
  )
}

export default Footer