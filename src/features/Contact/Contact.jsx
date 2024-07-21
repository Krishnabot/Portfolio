import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp, BsFillChatHeartFill } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_uz945tq',
        'template_iq7v88q',
        form.current,
        'PU1Fo1Ro9TD7ws9sE',
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 6000);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h3>
        If you have an application you are interested in developing, a feature
        that you need to build, or a project that needs coding. I’d love to help
        with it
      </h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:libraryismyparadise@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a
              href="https://m.me/wolverinekrishna"
              target="_blank"
              rel="noreferrer"
            >
              Send me a DM
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href=" https://wa.me/817036208914"
              target="_blank"
              rel="noreferrer"
            >
              Send me a Whatsapp
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <textarea name="message" placeholder="Your Messege" rows="7" required />
          <button type="submit" className="btn btn-primary">
            Get in Touch
          </button>
          {showSuccess && (
            <div className="success-message">
              <div>
                <BsFillChatHeartFill className="smily-icon" />
                <BsFillChatHeartFill className="smily-icon" />
                <BsFillChatHeartFill className="smily-icon" />
              </div>
              <h5>Thank you for contacting me. I will get back to you soon.</h5>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
