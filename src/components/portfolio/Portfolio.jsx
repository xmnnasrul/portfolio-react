import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img1} alt="img1" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img2} alt="Img2" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img3} alt="img3" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img4} alt="img4" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img5} alt="img5" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
                <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={Img6} alt="img6" />
                                </div>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <div className="portfolio__item-cta">
                                    <a href="#" target="_blank"  className='btn'>Github</a>
                                    <a href="#" target="_blank"  className='btn btn-primary'>Live Demo</a>
                                </div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio