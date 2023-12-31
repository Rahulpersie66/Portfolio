import React from 'react';
import './skills.css';
import wordpress from '../../assests/wordpress.jpg';
import java from '../../assests/java.png';
import ui from '../../assests/ui.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I am skilled and passionate web designer with knowledge of pHp, wordpress and experience in Angular, React framework.</span>
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
                    <img src={java} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Wordpress</h2>
                        <p>1.5 years of working on wordpress.</p>
                    </div>
                </div>
                {/* Skill Bar 3 */}
                <div className='skillBar'>
                    <img src={wordpress} alt='' className='skillBarImg'></img>
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