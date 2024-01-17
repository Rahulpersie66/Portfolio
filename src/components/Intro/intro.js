import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assests/bg2.jpg';
import hire from '../../assests/hire.png';



const intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Rahul</span><br/>Full Stack Developer</span>
                <p className='introPara'>I am a skilled full stack developer with experience in<br></br> JAVA, PHP, C and framework React, Angular, Springboot and knowledge of database.</p>
                <p className='introPara' id='contactIntro'>Email: <span className='contactIntro'>rrana2@binghamton.edu</span>  Phone: <span className='contactIntro'>+1 607-296-8605</span></p>
                <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-70} duration={500}><button className='btn'><img className='btnImg' src={hire} alt='Hire'></img>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    );
}

export default intro