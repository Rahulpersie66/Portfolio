import React from 'react';
import './skills.css';
import wordpress from '../../assests/wordpress.jpg';
import java from '../../assests/java.png';
import ui from '../../assests/ui.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I'm a dedicated full-stack developer pursuing my Master's in Computer Science at Binghamton University. With hands-on experience in Java, C, PHP, and frameworks like SpringBoot, Angular, and CodeIgniter, I specialize in robust backend logic and API development. My skills extend to comprehensive website design, blending frontend and backend expertise. Beyond technical proficiency, I offer valuable soft skills—teamwork, consistency, critical thinking, problem-solving, leadership, and effective issue management.</span>
            <div className='skillBars'>
                {/* Skill Bar 1 */}
                <div className='skillBar'>
                    <img src={ui} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>UI/UX Designing</h2>
                        <p>With proficiency in JavaScript, PHP, WordPress, and more, I've enhanced website performance and user engagement. Collaborating on projects like Handyman's E-Commerce Website and PHP Chat App, I demonstrated UI/UX skills, improving functionality and user satisfaction. My experience in optimizing data organization, revamping database queries, and crafting interactive pages showcases a commitment to efficient and user-friendly design.</p>
                    </div>
                </div>
                {/* SKill Bar 2 */}
                <div className='skillBar'>
                    <img src={wordpress} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Wordpress</h2>
                        <p>As a Full Stack Developer Intern, I showcased my proficiency in WordPress, utilizing it to design and optimize an E-Commerce Website for construction materials in Shimla. This included configuring online payment functionality and contributing to a 30% increase in on-time payments.</p>
                    </div>
                </div>
                {/* Skill Bar 3 */}
                <div className='skillBar'>
                    <img src={java} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>JAVA</h2>
                        <p>Proficient in Java, I develop dynamic applications using core concepts and frameworks like Spring Boot. From an airplane booking portal to e-commerce websites, I create efficient software solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills