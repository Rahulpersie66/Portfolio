import React, {useRef} from 'react';
import './contact.css';
import logo from '../../assests/logo.jpg'
import emailjs from '@emailjs/browser';
import insta from '../../assests/insta.jpg';
import linkedin from '../../assests/in.png';
import github from '../../assests/github.jpg';
import youtube from '../../assests/yt.jpg';
import {Link as RouterLink} from 'react-router-dom';

const Contact = () => {
    // to send email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
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

    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Projects</h1>
                <p className='clientsDesc'>These are my some projects, more projects on <RouterLink to='/portfolioPage/' className='moreProjects'>Portfolio</RouterLink> section.</p>
                <div className='clientsImgs'>
                    <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/>
                </div>
            </div>

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
                        <img src={linkedin} alt='LinkedIn' className='link'/>
                        <img src={github} alt='Github' className='link'/>
                        <img src={youtube} alt='Youtube' className='link'/>
                        <img src={insta} alt='Instagram' className='link'/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;