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
                            <SwiperSlide  className="testimonial">
                                <div className="client__avatar">
                                    <img src={Avtr1} alt="clinet" />
                                </div>
                                <h5 className='client__name'>Tina Snow</h5>
                                <small className='client__review'>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?
                                </small>
                            </SwiperSlide>

                            <SwiperSlide  className="testimonial">
                                <div className="client__avatar">
                                    <img src={Avtr2} alt="clinet" />
                                </div>
                                <h5 className='client__name'>Shatta wale</h5>
                                <small className='client__review'>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?
                                </small>
                            </SwiperSlide>
                            <SwiperSlide  className="testimonial">
                                <div className="client__avatar">
                                    <img src={Avtr3} alt="clinet" />
                                </div>
                                <h5 className='client__name'>Kuame Despite</h5>
                                <small className='client__review'>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?
                                </small>
                            </SwiperSlide>
                            <SwiperSlide  className="testimonial">
                                <div className="client__avatar">
                                    <img src={Avtr4} alt="clinet" />
                                </div>
                                <h5 className='client__name'>Nana McBrown</h5>
                                <small className='client__review'>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium, corporis odit tempore nisi cupiditate tenetur eum labore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsam omnis, maxime quas laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit? numquam at laudantium. Dolorum, officia eligendi. Tenetur? ducimus suscipit?
                                </small>
                            </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials