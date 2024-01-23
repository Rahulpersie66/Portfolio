import React, {useRef} from 'react';
import './contact.css';
import tot from '../../assests/RaG.png'
import ks from '../../assests/Litchen.png'
import gl from '../../assests/Glut 3.png'
import jv from '../../assests/jarvis.png'
import emailjs from '@emailjs/browser';
import {FaInstagram} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import {Link as RouterLink} from 'react-router-dom';


const Contact = () => {
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
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Projects</h1>
                <p className='clientsDesc'>These are my some projects, more projects on <RouterLink to='/projects/' className='moreProjects'>Portfolio projects</RouterLink> section.</p>
                <div className='clientsImgs'>
                    <div className='project'>
                        <h3 className='projectName'>Tip of Tongue - A Movie Finder</h3>
                        <div className='projectTogether'>
                        <p className='projectAbout'>Collaborated in a team for a RAG task, achieved 70% accuracy with a Python-based machine learning model for movie information retrieval and generation from user prompts.
                            </p>
                            <img src={tot} alt='project' className='projectImg'></img>
                        </div>
                    </div>
                    
                    <div className='project'>
                        <h3 className='projectName'>Animation film using C++ Glut Library</h3>
                        <div className='projectTogether'>
                        <p className='projectAbout'>Crafted an engaging turtle and rabbit race film using GLUT library and C++. Applied lecture insights for intricate animation, optimizing movement and ensuring a visually appealing experience and object oriented programming basics for structure of rabbit and turtle.</p>
                            <img src={gl} alt='project' className='projectImg'></img>
                        </div>
                    </div>

                    <div className='project'>
                        <h3 className='projectName'>Kitchen Ecommerce Store</h3>
                        <div className='projectTogether'>
                        <p className='projectAbout'>Developed a kitchen management system using Java Spring Boot and Angular, enabling  CRUD operations and communication for administrators and users via user friendly application. </p>
                            <img src={ks} alt='project' className='projectImg'></img>
                        </div>
                    </div>

                    <div className='project'>
                        <h3 className='projectName'>Jarvis - A Speech Recognizer</h3>
                        <div className='projectTogether'>
                        <p className='projectAbout'>Create a voice-controlled project using Python and Google's Speech-to-Text. Showcase Python skills, API integration, and enhance user experiences with hands-free interactions.</p>
                            <img src={jv} alt='project' className='projectImg'></img>
                        </div>
                    </div>
                    {/* <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/>
                    <img src={logo} alt='Client' className='clientsImg'/> */}
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

export default Contact;