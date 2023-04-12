import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h3d1pkr', 'ejs-test-mail-service', form.current, 'yx0C8UG3pqEcwrDD1')

    /*this is the clear form after submit*/
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vang_peter06@yahoo.com</h5>
            <a href="mailto:vang_peter06@yahoo.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone Number</h4>
            <h5>(503)328-8289</h5>
            <a href="tel:503-328-8289" target='_blank'>Call</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact