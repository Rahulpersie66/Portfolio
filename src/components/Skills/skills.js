import React, { useState, useEffect } from 'react';
import './skills.css';
import mysql from '../../assests/mysql.png';
import python from '../../assests/python.png';
import data from '../../assests/data2.png';
import 'primeicons/primeicons.css';
import Timeline from '../Timeline/timeline';
import JobTimeline from '../Timeline/jobTimeline';
import { FaTrophy, FaAward, FaResolving, FaMedium, FaBookDead, FaSortNumericUp } from 'react-icons/fa';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const [showEducationTimeline, setShowEducationTimeline] = useState(true);
    const [showJobTimeline, setShowJobTimeline] = useState(false);

    const [apiData, setApiData] = useState(null);

    const toggleVisiblity = () => setIsVisible(!isVisible);
    const toggleVisiblity1 = () => setIsVisible1(!isVisible1);
    const toggleVisiblity2 = () => setIsVisible2(!isVisible2);
    const toggleVisiblity3 = () => setIsVisible3(!isVisible3);

    const toggleEducationTimeline = () => {
        setShowJobTimeline(false);
        setShowEducationTimeline(true);
    };

    const toggleJobTimeline = () => {
        setShowEducationTimeline(false);
        setShowJobTimeline(true);
    };

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://leetcode-stats-api.herokuapp.com/Persie');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setApiData(data);
        } catch (error) {
            console.error('Error fetching LeetCode data:', error);

            setApiData({
                ranking: 'View Profile',
                totalSolved: 'View Profile',
                easySolved: '-',
                mediumSolved: '-',
                hardSolved: '-'
            });
        }
    };

    fetchData();
}, []);

    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>

            <span className='skillDesc'>
                I am a Software/Data Engineer specializing in building scalable data platforms and distributed data pipelines.
                I design and optimize Spark-based batch and streaming systems, Kafka event-driven architectures, and cloud-native
                ETL/ELT pipelines using AWS, Snowflake, and Airflow. My work focuses on processing millions of events daily,
                improving data reliability, reducing latency, and enabling high-quality analytics for business decision-making.
                I have strong expertise in Python, SQL, and distributed systems, with a focus on performance optimization,
                data quality, and system scalability.
            </span>

            <div className='leetcodeRank'>
                <a
                    href='https://leetcode.com/Persie/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='leetcodeRankHeader'
                >
                    <h2>
                        <FaTrophy className='trophy' />
                        Status of Leetcode:
                    </h2>
                </a>

                {apiData ? (
                    <div className='statusLeetCode'>
                        <p className='leetcodeRanking'>
                            <FaAward className='leetslogo' /> GLOBAL RANK: {apiData.ranking}
                        </p>
                        <p className='leetCodeProblem'>
                            <FaSortNumericUp className='leetslogo' />&nbsp; Total Problems Solved: {apiData.totalSolved}
                        </p>
                        <p className='leetCodeEasy'>
                            <FaResolving className='leetslogo' /> Easy: {apiData.easySolved}
                        </p>
                        <p className='leetCodeMedium'>
                            <FaMedium className='leetslogo' /> Medium: {apiData.mediumSolved}
                        </p>
                        <p className='leetCodeHard'>
                            <FaBookDead className='leetslogo' /> Hard: {apiData.hardSolved}
                        </p>
                    </div>
                ) : (
                    <p>Loading Rank...</p>
                )}
            </div>

            <div className='skillTechnical'>
                <div className='skills_content'>
                    <div className='skills_header' onClick={toggleVisiblity}>
                        <i className='pi pi-skill pi-code' />
                        <div className='skill_header_part1'>
                            <h1 className='skills_title'>Programming & Scripting</h1>
                            <span className='skills_subtitle'>Core languages for data engineering</span>
                        </div>
                        <i className='pi pi-skill pi-caret-down'></i>
                    </div>
                </div>

                {isVisible && (
                    <>
                        <div className='progressBarContainer'>
                            <p className='property'>Python</p>
                            <p className='propertyPercentage'>100%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>SQL</p>
                            <p className='propertyPercentage'>95%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Java</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Scala</p>
                            <p className='propertyPercentage'>82%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '82%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Bash/Linux</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />
                    </>
                )}

                <div className='skills_content'>
                    <div className='skills_header' onClick={toggleVisiblity1}>
                        <i className='pi pi-skill pi-sitemap' />
                        <div className='skill_header_part1'>
                            <h1 className='skills_title'>Data Engineering</h1>
                            <span className='skills_subtitle'>Pipelines, streaming, and orchestration</span>
                        </div>
                        <i className='pi pi-skill pi-caret-down'></i>
                    </div>
                </div>

                {isVisible1 && (
                    <>
                        <div className='progressBarContainer'>
                            <p className='property'>Apache Spark / PySpark</p>
                            <p className='propertyPercentage'>95%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Apache Kafka</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Airflow</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Snowflake</p>
                            <p className='propertyPercentage'>95%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Redshift</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />
                    </>
                )}

                <div className='skills_content'>
                    <div className='skills_header' onClick={toggleVisiblity2}>
                        <i className='pi pi-skill pi-cloud' />
                        <div className='skill_header_part1'>
                            <h1 className='skills_title'>Cloud & DevOps</h1>
                            <span className='skills_subtitle'>Cloud infrastructure and deployment</span>
                        </div>
                        <i className='pi pi-skill pi-caret-down'></i>
                    </div>
                </div>

                {isVisible2 && (
                    <>
                        <div className='progressBarContainer'>
                            <p className='property'>AWS</p>
                            <p className='propertyPercentage'>95%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Docker</p>
                            <p className='propertyPercentage'>90%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Jenkins / GitHub Actions</p>
                            <p className='propertyPercentage'>88%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '88%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Git</p>
                            <p className='propertyPercentage'>95%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Prometheus / Grafana</p>
                            <p className='propertyPercentage'>85%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <br />
                    </>
                )}

                <div className='skills_content'>
                    <div className='skills_header' onClick={toggleVisiblity3}>
                        <i className='pi pi-skill pi-language' />
                        <div className='skill_header_part1'>
                            <h1 className='skills_title'>Languages</h1>
                            <span className='skills_subtitle'>Languages I can speak and write</span>
                        </div>
                        <i className='pi pi-skill pi-caret-down'></i>
                    </div>
                </div>

                {isVisible3 && (
                    <>
                        <div className='progressBarContainer'>
                            <p className='property'>English</p>
                            <p className='propertyPercentage'>96%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '96%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Hindi</p>
                            <p className='propertyPercentage'>100%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <br />

                        <div className='progressBarContainer'>
                            <p className='property'>Pahari</p>
                            <p className='propertyPercentage'>100%</p>
                            <div className='progressBarBox'>
                                <div className='progressBar' style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <br />
                    </>
                )}
            </div>

            <br /><br />

            <div className='qualification'>
                <div className='qualificationHeader'>
                    <h1 className='qualficationHeaderPara'>Qualification</h1>
                    <span className='qualifiactionHeaderSpan'>My personal journey</span>
                </div>

                <div className='qualStudJob'>
                    <div className='eduactionQual' onClick={toggleEducationTimeline}>
                        <i className='pi pi-book'>
                            <span className='educationQualHeader'>&nbsp;Education</span>
                        </i>
                    </div>

                    <div className='jobQual' onClick={toggleJobTimeline}>
                        <i className='pi pi-briefcase'>
                            <span className='jobQualHeader'>&nbsp;Work</span>
                        </i>
                    </div>
                </div>
            </div>

            <br />

            {showEducationTimeline && <Timeline className='timelineReact' />}
            {showJobTimeline && <JobTimeline />}

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={data} alt='Data platform engineering' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Data Platform Engineering</h2>
                        <p className='skillBarTextPara'>
                            I build scalable data platforms using Spark, PySpark, Snowflake, Redshift, and AWS.
                            My work focuses on reliable data processing, optimized query performance, and production-grade
                            pipelines that support analytics and reporting at scale.
                        </p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={mysql} alt='Cloud ETL and ELT pipelines' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Cloud ETL / ELT Pipelines</h2>
                        <p className='skillBarTextPara'>
                            I design and orchestrate ETL/ELT workflows using Airflow, Python, SQL, AWS Glue, S3,
                            and Snowflake. I focus on automation, data quality checks, schema validation, and
                            cost-efficient cloud data processing.
                        </p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={python} alt='Real-time streaming systems' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTextHead'>Real-Time Streaming Systems</h2>
                        <p className='skillBarTextPara'>
                            I work with Kafka and Spark streaming systems to process high-volume event data with low latency,
                            enabling near real-time analytics, monitoring, and business insights.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;