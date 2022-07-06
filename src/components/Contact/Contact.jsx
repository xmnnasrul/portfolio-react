import React, { useRef } from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './Contact.css'
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rngt9s9', 'template_bo5auxs', form.current, 'dlQqdEnZuOeCac5Uq')

        e.target.reset()
    }
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nasrul@gmail.com</h5>
                        <a href="mailto:nasrul@gmail.com" target="_blank" rel='noreferrer' >Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>xmnwebdev</h5>
                        <a href="mailto:nasrul@gmail.com" target="_blank" rel='noreferrer' >Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>0858722289</h5>
                        <a href="https://api.whatsapp.com/send?phone=+6283872117820" target="_blank" rel='noreferrer' >Send a Message</a>
                    </article>
                </div>
                {/* ========= */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required autoComplete='off' />
                    <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                    <textarea name="message" rows="7" placeholder='Your Message' required autoComplete='off'> </textarea>
                    <button type='submit' className='btn btn-primary'> Send </button>
                </form>
            </div>
        </section>
    )
}

export default Contact