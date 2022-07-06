import React from 'react'
import './Service.css'
import { BiCheck } from 'react-icons/bi'

function Service() {
    return (
        <section id='service'>
            <h5>What i Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="services">
                    <div className="services__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>

                {/* =============== */}

                <article className="services">
                    <div className="services__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>

                {/* =============== */}

                <article className="services">
                    <div className="services__head">
                        <h3>Content Crreator</h3>
                    </div>
                    <ul className='services__list'>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Service