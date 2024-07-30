import React,{useState, useEffect} from 'react';
import './skills.css';
import mysql from '../../assests/mysql.png';
import python from '../../assests/python.png';
import data from '../../assests/data2.png';
import 'primeicons/primeicons.css';
import Timeline from '../Timeline/timeline';
import JobTimeline from '../Timeline/jobTimeline';
import {FaTrophy} from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import { FaResolving } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaBookDead } from 'react-icons/fa';
import { FaSortNumericUp } from 'react-icons/fa';

const Skills = () => {
    const leetcodeUrl =() => {
        window.location.href = 'https://leetcode.com/Persie/';
    }

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
const [apiData, setApiData] = useState(null);

// const username = "Persie";

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Persie');
        if ( !response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



return (
        <section id='skills'>
            <span className='skillTitle'>What I do?</span>
            <span className='skillDesc'>I'm a dedicated data analyst pursuing my Master's in Computer Science at Binghamton University. With hands-on experience in SQL, Python, and tools like Power BI, Tableau, and Excel, I specialize in transforming raw data into actionable insights. My expertise extends to data visualization, statistical analysis, and machine learning, making complex data understandable and useful. Beyond technical proficiency, I offer valuable soft skills—teamwork, consistency, critical thinking, problem-solving, leadership, and effective issue management. <br></br>Additionally, I have experience with full-stack development using Java, C, PHP, and frameworks such as React, Angular, and SpringBoot, allowing me to blend data analysis with robust backend logic and comprehensive website design.</span>
           {/*Skill Technical Skills*/}
            <div className='leetcodeRank'>
                <h2 className='leetcodeRankHeader' onClick={leetcodeUrl}><FaTrophy className='trophy'></FaTrophy>Status of Leetcode:</h2>
                {apiData ? (
                    <div className='statusLeetCode'>
                    {/* <p>Ranking: {apiData.ranking}</p>
                    <p>Rating: {apiData.totalQuestions}</p> */}
                    <p className='leetcodeRanking'><FaAward className='leetslogo'></FaAward> GLOBAL RANK: {apiData.ranking} </p>
                    <p className='leetCodeProblem'><FaSortNumericUp className='leetslogo'></FaSortNumericUp>&nbsp; Total Problems Solved: {apiData.totalSolved}</p>
                    <p className='leetCodeEasy'><FaResolving className='leetslogo'></FaResolving> Easy: {apiData.easySolved}</p>
                    <p className='leetCodeMedium'><FaMedium className='leetslogo'></FaMedium> Medium: {apiData.mediumSolved}</p>
                    <p className='leetCodeHard'><FaBookDead className='leetslogo'></FaBookDead> Hard: {apiData.hardSolved}</p>
                    </div>
                ) : (
                    <p>Loading Rank...</p>
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
                    <img src={data} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Data Analytics</h2>
                        <p className='skillBarTextPara'>I excel in data analytics, efficiently extracting insights from complex datasets and generating detailed reports using advanced data manipulation and processing techniques. My skills enable me to transform raw data into actionable information, driving informed decision-making.</p>
                    </div>
                </div>
                {/* SKill Bar 2 */}
                <div className='skillBar'>
                    <img src={mysql} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>MySQL</h2>
                        <p className='skillBarTextPara'>I have skills in database management, proficient in using SQL for querying and managing large datasets efficiently. My experience includes designing and optimizing database schemas to ensure data integrity and performance. I excel at extracting and transforming data from various databases for accurate analysis.</p>
                    </div>
                </div>
                {/* Skill Bar 3 */}
                <div className='skillBar'>
                    <img src={python} alt='' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Python</h2>
                        <p className='skillBarTextPara'>I am skilled in Python, focusing on data processing and machine learning. I excel in tasks like extracting information, cleaning text data, and generating CSV files, using libraries like Pandas, TensorFlow, and BERT. My experience spans span identification, cryptography, and natural language processing.</p>
                    </div>
                </div>
            </div>

            
        </section>
    );
}

export default Skills;