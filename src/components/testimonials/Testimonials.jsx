import Avtr1 from './../../assets/avatar1.jpg'
import Avtr2 from './../../assets/avatar2.jpg'
import Avtr3 from './../../assets/avatar3.jpg'
import Avtr4 from './../../assets/avatar4.jpg'

import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css'
// css
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avatar: Avtr1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?"
    }, {
        avatar: Avtr2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?"
    }, {
        avatar: Avtr3,
        name: "Kuame Despite",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas numquam at laudantium. laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? Dolorum, officia eligendi. Tenetur? ducimus suscipit?"
    }, {
        avatar: Avtr4,
        name: "Nana McBrown",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? maxime quas numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?"
    }
]

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="clinet" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials