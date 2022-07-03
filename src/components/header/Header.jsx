import React from 'react'
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';
function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i`m</h5>
                <h1>Nasrul </h1>
                <h5 className="text-light">student</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;