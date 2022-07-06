import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'



const data = [
    {
        id: 1,
        image: Img1,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    },
    {
        id: 2,
        image: Img2,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    },
    {
        id: 3,
        image: Img3,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    },
    {
        id: 4,
        image: Img4,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    },
    {
        id: 5,
        image: Img5,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    },
    {
        id: 6,
        image: Img6,
        title: "Lorem ipsum dolor sit amet.",
        github: 'https"//github.com/xmnnasrul',
        demo: '#'
    }
]





function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="img1" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} target="_blank" rel='noreferrer' className='btn'>Github</a>
                                    <a href={demo} target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio