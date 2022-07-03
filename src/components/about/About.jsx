import React from 'react'
import './About.css'
import Me from '../../assets/me-about.jpg'

import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>99+ Years Work</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Client</h5>
                            <small>9999+ Wordwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>700+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem  ipsam natus quidem dolor recusandae quo consequatur explicabo sint ex neque, laudantium temporibus quae incidunt laboriosam debitis voluptatem.</p>
                    <a href="#contact" className='btn btn-primary'>Les`t Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About