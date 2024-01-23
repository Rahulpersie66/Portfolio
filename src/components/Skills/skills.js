import React,{useState, useEffect} from 'react';
import './skills.css';
import wordpress from '../../assests/wordpress.jpg';
import java from '../../assests/java.png';
import ui from '../../assests/ui.jpg';
import 'primeicons/primeicons.css';
import Timeline from '../Timeline/timeline';
import JobTimeline from '../Timeline/jobTimeline';

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

const [showEducationTimeline, setShowEducationTimeline] = useState(true);
const [showJobTimeline, setShowJobTimeline] = useState(false);

const toggleEducationTimeline = () => {
    // Close other timelines if needed
    setShowJobTimeline(false);

    setShowEducationTimeline(true);

  };

  const toggleJobTimeline = () => {
    // Close other timelines if needed
    setShowEducationTimeline(false);

    setShowJobTimeline(true);
  };

const educationTimeline = 
<Timeline className='timelineReact'/>;
const jobTimeline =<JobTimeline/>;

// const [userData, setUserData] = useState(null);
// const [apiData, setApiData] = useState(null);
const [apiData2,setApiData2] = useState(null);
// const username = "Persie";

useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://leetcode-stats-api.herokuapp.com/Persie');
        const response2 = await fetch('https://geeks-for-geeks-api.vercel.app/rahulpenb5c');
        if ( !response2.ok) {
          throw new Error('Network response was not ok');
        }

        // const data = await response.json();
        const data2 = await response2.json();
        // setApiData(data);
        setApiData2(data2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I'm a dedicated full-stack developer pursuing my Master's in Computer Science at Binghamton University. With hands-on experience in Java, C, PHP, and frameworks like SpringBoot, Angular, and CodeIgniter, I specialize in robust backend logic and API development. My skills extend to comprehensive website design, blending frontend and backend expertise. Beyond technical proficiency, I offer valuable soft skills—teamwork, consistency, critical thinking, problem-solving, leadership, and effective issue management.</span>
           {/*Skill Technical Skills*/}

            <div className='leetcodeRank'>
                {apiData2 ? (
                    <div>
                    {/* <p>Ranking: {apiData.ranking}</p>
                    <p>Rating: {apiData.totalQuestions}</p> */}
                    <p>{apiData2}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

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
                <div className='eduactionQual' onClick={toggleEducationTimeline} >
                    <i className='pi pi-book'><span className='educationQualHeader'>&nbsp;Education</span></i>  
                </div>
                <div className='jobQual'  onClick={toggleJobTimeline}>
                    <i className='pi pi-briefcase'><span className='jobQualHeader'>&nbsp;Work</span></i>
                </div>   
            </div>
        </div>   
        <br></br>
        

      {showEducationTimeline && educationTimeline}
      {showJobTimeline && jobTimeline}

            <div className='skillBars'>
                {/* Skill Bar 1 */}
                <div className='skillBar'>
                    <img src={ui} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>UI/UX Designing</h2>
                        <p className='skillBarTextPara'>With proficiency in JavaScript, PHP, WordPress, and more, I've enhanced website performance and user engagement. Collaborating on projects like Handyman's E-Commerce Website and PHP Chat App, I demonstrated UI/UX skills, improving functionality and user satisfaction. My experience in optimizing data organization, revamping database queries, and crafting interactive pages showcases a commitment to efficient and user-friendly design.</p>
                    </div>
                </div>
                {/* SKill Bar 2 */}
                <div className='skillBar'>
                    <img src={wordpress} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Wordpress</h2>
                        <p className='skillBarTextPara'>As a Full Stack Developer Intern, I showcased my proficiency in WordPress, utilizing it to design and optimize an E-Commerce Website for construction materials in Shimla. This included configuring online payment functionality and contributing to a 30% increase in on-time payments.</p>
                    </div>
                </div>
                {/* Skill Bar 3 */}
                <div className='skillBar'>
                    <img src={java} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>JAVA</h2>
                        <p className='skillBarTextPara'>Proficient in Java, I develop dynamic applications using core concepts and frameworks like Spring Boot. From an airplane booking portal to e-commerce websites, I create efficient software solutions.</p>
                    </div>
                </div>
            </div>

            
        </section>
    );
}

export default Skills;