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
                        <p>I know designing.</p>
                    </div>
                </div>
                {/* SKill Bar 2 */}
                <div className='skillBar'>
                    <img src={wordpress} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Wordpress</h2>
                        <p>1.5 years of working on wordpress.</p>
                    </div>
                </div>
                {/* Skill Bar 3 */}
                <div className='skillBar'>
                    <img src={java} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>JAVA</h2>
                        <p>Have great logic, know how to build logic.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills