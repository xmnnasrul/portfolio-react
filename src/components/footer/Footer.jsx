import React from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
function Footer() {
    return (
        <Footer>
            <a href="https://github.com" className='footer__logo'>nasrul</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://instagram.com" target="_blank" rel='noreferrer'><FaFacebook /></a>
                <a href="https://instagram.com" target='_blank' rel='noreferrer'><FiInstagram /></a>
                <a href="https://instagram.com" rel='noreferrer' target='_blank'><FaWhatsapp /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Nasrul Muhammad Amin. All rights reserved. </small>
            </div>
        </Footer>
    )
}

export default Footer;