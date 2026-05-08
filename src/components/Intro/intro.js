import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assests/bg.jpg';
import hire from '../../assests/hire.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>

                <span className='introText'>
                    I'm <span className='introName'>Rahul Rana</span><br />
                    Software/Data Engineer
                </span>

                <p className='introPara'>
                    I specialize in building scalable data platforms, distributed Spark pipelines, <br />
                    and cloud-based ETL/ELT systems. Experienced with Python, SQL, AWS, Kafka, <br />
                    Airflow, Snowflake, and Redshift, I design reliable data solutions that process <br />
                    millions of events daily and turn complex data into actionable business insights.
                </p>

                <p className='introPara' id='contactIntro'>
                    Email: <span className='contactIntro'>rahul.rana.link@gmail.com</span>
                    {' '}Phone: <span className='contactIntro'>+1 607-296-8605</span>
                </p>

                <Link
                    to='contact'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button className='btn'>
                        <img className='btnImg' src={hire} alt='Hire Rahul' />
                        Hire Me
                    </button>
                </Link>
            </div>

            <img src={bg} alt='Rahul Rana Profile' className='bg' />
        </section>
    );
};

export default Intro;