import React, {useRef} from 'react';
import './contactform.css'

import emailjs from '@emailjs/browser';
import {FaInstagram} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';


const ContactForm = () => {
    // to send email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

            // Validate required fields
        const name = form.current['your_name'].value.trim();
        const email = form.current['your_email'].value.trim();
        const message = form.current['message'].value.trim();

        if (!name || !email || !message) {
        alert('Please fill out all the required fields.');
        return;
        }

        // Validate Gmail address
        const gmailRegex = /^[a-zA-Z0-9_.+-]+@gmail\.com$/;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!gmailRegex.test(email)) {
        alert('Please enter a valid Gmail address.');
        return;
        }
    
        emailjs.sendForm('service_1r2agkb', 'template_ufmypcj', form.current, 'OqHGTbeUwpct8huz7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent');
          }, (error) => {
              console.log(error.text);
          });
      };
      // until here

      const linkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/rahulbinghamton/';

      }

      const github = () => {
        window.location.href = 'https://github.com/Rahulpersie66';
      }

      const youtube = () => {
        window.location.href = 'https://www.youtube.com/@bonvoyage340';
      }

      const leetCode = () => {
        window.location.href = 'https://leetcode.com/Persie/';
      }

      const insta = () => {
        window.location.href = 'https://www.instagram.com/iam_persie11/';
      }

      return (
                <section id='contactPage2'>
                    {/* CONTACT FORM */}
                    <div id='contact'>
                        <h1 className='contactPageTitle'>Contact Me</h1>
                        <span className='contactDesc'>Please fill out the form to contact with me regarding any oppurtunities.</span>
                        <form className='contactForm' ref={form} onSubmit={sendEmail}>
                            <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                            <input type='email' className='email' placeholder='Your Email' name='your_email' />
                            <textarea name='message' rows='5' placeholder='Your Message' className='msg'></textarea>
                            <button className='submitBtn' type='submit' value='Send'>Submit</button>
                            <div className='links'>
                                <FaLinkedinIn className='link' onClick={linkedin}></FaLinkedinIn>
                                <FaCode className='link' onClick={leetCode}></FaCode>
                                <FaYoutube className='link' onClick={youtube}></FaYoutube>
                                <FaGithub className='link' onClick={github}></FaGithub>
                                <FaInstagram className='link' onClick={insta}></FaInstagram>
                            </div>
                        </form>
                    </div>
                </section>
      );
}
export default ContactForm;