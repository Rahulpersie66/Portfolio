import React,{useState} from 'react';
import './skills.css';
import wordpress from '../../assests/wordpress.jpg';
import java from '../../assests/java.png';
import ui from '../../assests/ui.jpg';
import 'primeicons/primeicons.css';
        

const Skills = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isVisible1, setIsVisible1] = useState(false);
   const [isVisible2, setIsVisible2] = useState(false);
   const [isVisible3, setIsVisible3] = useState(false);
   const toggleVisiblity = () => {
        setIsVisible(!isVisible);
   }
   const toggleVisiblity1 = () => {
    setIsVisible1(!isVisible1);
}
const toggleVisiblity2 = () => {
    setIsVisible2(!isVisible2);
}
const toggleVisiblity3 = () => {
    setIsVisible3(!isVisible3);
}

// const educationTimeline = 
// <div className='timelineBox'>
//     <div className='timeline'>
//         <div className='container left-container'>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Binghamton University, Thomas J. Watson College of Engineering and Applied Science</h2>
//                 <span className='masterDegreeDetails'>Master of Science in Computer Science</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Aug 2023 - May 2025</p>
//                 </div>
//             </div>
//             <i className='pi pi-circle-fill circle-left'></i>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container right-container'>
//         <i className='pi pi-circle-fill circle-right'></i>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Jaypee University Of Information, Technology</h2>
//                 <span className='masterDegreeDetails'>Bachelors of Technology in Computer Science Engineering</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Aug 2016 - Jul 2020</p>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container left-container'>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Kendriya Vidyalaya Hamirpur</h2>
//                 <span className='masterDegreeDetails'>Secondary School</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Apr 2013 - May 2015</p>
//                 </div>
//             </div>
//             <i className='pi pi-circle-fill circle-left'></i>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container right-container'>
//             <i className='pi pi-circle-fill circle-right'></i>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Kendriya Vidyalaya Nadaun</h2>
//                 <span className='masterDegreeDetails'>Primary School</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Apr 2003 - Mar 2013</p>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>;

// const jobTimeline = 
// <div className='timelineBox'>
//     <div className='timeline'>
//         <div className='container left-container'>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Nablasol Digital Solution Pvt. Ltd.</h2>
//                 <span className='masterDegreeDetails'>Software Development Intern</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Dec 2022 - Mar 2023</p>
//                 </div>
//             </div>
//             <i className='pi pi-circle-fill circle-left'></i>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container right-container'>
//         <i className='pi pi-circle-fill circle-right'></i>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Clerisy Solution Pvt. Ltd.</h2>
//                 <span className='masterDegreeDetails'>Full Stack Trainee</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Aug 2022 - Dec 2022</p>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container left-container'>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>SimpliLearn</h2>
//                 <span className='masterDegreeDetails'>Full Stack certfication</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>Jan 2022 - Jun 2022</p>
//                 </div>
//             </div>
//             <i className='pi pi-circle-fill circle-left'></i>
//         </div>
//     </div>

//     <div className='timeline'>
//         <div className='container right-container'>
//             <i className='pi pi-circle-fill circle-right'></i>
//             <div className='text-box'>
//                 <h2 className='masterUnivName'>Think Next Pvt. Ltd.</h2>
//                 <span className='masterDegreeDetails'>AI/ML Intern</span>
//                 <div className='datePass'>
//                     <i className='pi pi-calendar'></i>
//                     <p className='masterDuration'>May 2019 - Jun 2019</p>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>;

    return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I'm a dedicated full-stack developer pursuing my Master's in Computer Science at Binghamton University. With hands-on experience in Java, C, PHP, and frameworks like SpringBoot, Angular, and CodeIgniter, I specialize in robust backend logic and API development. My skills extend to comprehensive website design, blending frontend and backend expertise. Beyond technical proficiency, I offer valuable soft skills—teamwork, consistency, critical thinking, problem-solving, leadership, and effective issue management.</span>
           {/*Skill Technical Skills*/}
         <div className='skillTechnical'>
           <div className="skills_content" >
                <div className="skills_header"  onClick={toggleVisiblity}>
                  <i className='pi pi-skill pi-code' />
                  <div className='skill_header_part1'>
                    <h1 className="skills_title">Programming</h1>
                    <span className="skills_subtitle">Coding Languages </span>
                  </div>
                    <i className="pi pi-skill  pi-caret-down"></i>
                </div>
            </div>
                {isVisible && (
                <>
                {/* <> to repersent that below is the code */}
                {/* Progress Bar Java  */}
                <div className="progressBarContainer">
                    <p className='property'>Java</p>
                    <p className='propertyPercentage'>87%</p>
                    <div className='progressBarBox'>
                        <div className='progressBar' style={{width:"87%"}}>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="progressBarContainer">
                    <p className='property'>C/C++</p>
                    <p className='propertyPercentage'>80%</p>
                    <div className='progressBarBox'>
                        <div className='progressBar' style={{width:"80%"}}>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="progressBarContainer">
                    <p className='property'>MySQL</p>
                    <p className='propertyPercentage'>95%</p>
                    <div className='progressBarBox'>
                        <div className='progressBar' style={{width:"95%"}}>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="progressBarContainer">
                    <p className='property'>Python</p>
                    <p className='propertyPercentage'>82%</p>
                    <div className='progressBarBox'>
                        <div className='progressBar' style={{width:"82%"}}>
                        </div>
                    </div>
                </div>
                <br></br>
                
                <div className="progressBarContainer">
                    <p className='property'>JavaScript</p>
                    <p className='propertyPercentage'>90%</p>
                    <div className='progressBarBox'>
                        <div className='progressBar' style={{width:"90%"}}>
                        </div>
                    </div>
                </div>
                <br></br>
                </>
                )}


            <div className="skills_content" >
                <div className="skills_header" onClick={toggleVisiblity1}>
                  <i className='pi pi-skill pi-sitemap' />
                  <div className='skill_header_part1'>
                    <h1 className="skills_title">Development</h1>
                    <span className="skills_subtitle">Tools and Softwares </span>
                  </div>
                    <i className="pi pi-skill pi-caret-down"></i>
                </div>
            </div>
            {isVisible1 && (
                <>
                <div className="progressBarContainer">
                <p className='property'>Spring Boot</p>
                <p className='propertyPercentage'>95%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"95%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Angular.js</p>
                <p className='propertyPercentage'>90%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"90%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Git</p>
                <p className='propertyPercentage'>82%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"82%"}}>
                    </div>
                </div>
            </div>
            <br></br>
            
            <div className="progressBarContainer">
                <p className='property'>React.js</p>
                <p className='propertyPercentage'>97%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"97%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>WordPress</p>
                <p className='propertyPercentage'>90%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"90%"}}>
                    </div>
                </div>
            </div>
            <br></br>
            </>

            )}

            <div className="skills_content" >
                <div className="skills_header" onClick={toggleVisiblity2}>
                  <i className='pi pi-skill pi-users' />
                  <div className='skill_header_part1'>
                    <h1 className="skills_title">Social Skills</h1>
                    <span className="skills_subtitle">Personal and Social Skills </span>
                  </div>
                    <i className="pi pi-skill pi-caret-down"></i>
                </div>
            </div>

            {isVisible2 && (
                <>
                <div className="progressBarContainer">
                <p className='property'>Project Management</p>
                <p className='propertyPercentage'>100%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"100%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Code Review & Debuging</p>
                <p className='propertyPercentage'>95%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"95%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Team Player & Management</p>
                <p className='propertyPercentage'>100%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"100%"}}>
                    </div>
                </div>
            </div>
            <br></br>
            
            <div className="progressBarContainer">
                <p className='property'>Problem Solving</p>
                <p className='propertyPercentage'>91%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"91%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            </>

            )}

            <div className="skills_content" >
                <div className="skills_header" onClick={toggleVisiblity3}>
                  <i className='pi pi-skill pi-language' />
                  <div className='skill_header_part1'>
                    <h1 className="skills_title">Languages</h1>
                    <span className="skills_subtitle">Languages I can speak and write </span>
                  </div>
                    <i className="pi pi-skill pi-caret-down"></i>
                </div>
            </div>

            {isVisible3 && (
                <>
                <div className="progressBarContainer">
                <p className='property'>English</p>
                <p className='propertyPercentage'>96%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"96%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Hindi</p>
                <p className='propertyPercentage'>100%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"100%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="progressBarContainer">
                <p className='property'>Pahari</p>
                <p className='propertyPercentage'>100%</p>
                <div className='progressBarBox'>
                    <div className='progressBar' style={{width:"100%"}}>
                    </div>
                </div>
            </div>
            <br></br>

            </>

            )}

         </div>
           
        <br></br><br></br>

        <div className='qualification'>
            <div className='qualificationHeader'>
                <h1 className='qualficationHeaderPara'>Qualification</h1>
                <span className='qualifiactionHeaderSpan'>My personal journey</span>
            </div>
            <div className='qualStudJob'>
                <div className='eduactionQual'>
                    <i className='pi pi-book'><span className='educationQualHeader'>&nbsp;Education</span></i>  
                </div>
                <div className='jobQual'>
                    <i className='pi pi-briefcase'><span className='jobQualHeader'>&nbsp;Work</span></i>
                </div>   
            </div>
        </div>   
        <br></br>
        




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