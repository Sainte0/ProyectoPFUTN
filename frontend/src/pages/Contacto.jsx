// Contacto.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqovl2n', 'template_vmfyo07', form.current, '7-Qvs3cM67E49588P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='field'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className='field'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className='field'>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div className='field'>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};