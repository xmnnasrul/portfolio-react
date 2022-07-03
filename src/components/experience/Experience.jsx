import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'

function Experience() {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3 className="">Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>

                                <h4>CSS</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>

                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>TailwindCSS</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>ReactJs</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3 className="">Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>NodeJs</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>MongooDB</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                            <div>

                                <h4>Python</h4>
                                <small className='text-light'>Experience</small>

                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience