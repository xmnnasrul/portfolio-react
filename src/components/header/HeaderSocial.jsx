import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'

function HeaderSocial() {
    return (
        <div className="Header__socials">
            <a href='https://github.com' target="_blank"><BsGithub /></a>
            <a href='https://github.com' target="_blank"><BsInstagram /></a>
            <a href='https://github.com' target="_blank"><FaWhatsapp /></a>
        </div>
    )
}

export default HeaderSocial