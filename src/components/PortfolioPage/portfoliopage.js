import './portfoliopage.css';
import React from 'react';
import company1 from '../../assests/company1.png';
import company2 from '../../assests/company2.png';
import company3 from '../../assests/company3.png';
import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';

const PortfolioPage = () => {
    return (
        <div className="PortfolioPage">
            <Navbar />

            <main className='PortfolioWorkExp'>
                <h1 id='portfolioPageh1'>Work Experience</h1>

                <div className="portfolioPage">
                    <div className='workSkills'>
                        <div className='company'>
                            <div className='companyDemo'>
                                <img className='compLogo' src={company1} alt='Cummins Inc.' />
                                <span className='companyTitle'>
                                    <h2 className='companyName'>Cummins Inc.</h2>
                                    <i className='dateOfCompany'>Oct 2025 - Present</i>
                                </span>
                            </div>

                            <br />

                            <span className='skillCompany'>
                                <b>Skills:</b> Python, SQL, PySpark, Apache Spark, AWS, Redshift, Airflow, Docker, GitHub Actions, Data Quality, Data Modeling, ETL/ELT, CI/CD, Monitoring
                            </span>

                            <br /><br />

                            <p className='whatILearned'><b>What I Worked On</b></p>
                            <p className='learnCompany'>
                                ● Designed and operated cloud-based distributed data pipelines on AWS processing millions of telemetry and event records daily.<br />
                                ● Built scalable ETL/ELT workflows using Python, SQL, Spark, and Airflow to support analytics and reporting use cases.<br />
                                ● Optimized Spark partitioning, execution plans, and Redshift query performance to reduce data processing latency and infrastructure cost.<br />
                                ● Developed data quality, validation, and reconciliation frameworks to improve data reliability and reduce production discrepancies.<br />
                                ● Implemented CI/CD workflows using Docker and GitHub Actions to automate deployment of data engineering pipelines.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='portfolioPage'>
                    <div className='workSkills'>
                        <div className='company'>
                            <div className='companyDemo'>
                                <img className='compLogo' src={company2} alt='Binghamton University' />
                                <span className='companyTitle'>
                                    <h2 className='companyName'>Binghamton University</h2>
                                    <i className='dateOfCompany'>Jan 2024 - May 2025</i>
                                </span>
                            </div>

                            <br />

                            <span className='skillCompany'>
                                <b>Skills:</b> Snowflake, SQL, Python, ETL/ELT, Data Warehousing, Kimball Modeling, RBAC, Data Governance, Analytics, Reporting
                            </span>

                            <br /><br />

                            <p className='whatILearned'><b>What I Worked On</b></p>
                            <p className='learnCompany'>
                                ● Designed Snowflake-based ETL/ELT pipelines for academic and operational datasets used by 3,000+ users.<br />
                                ● Built modular star-schema data models to improve reporting, auditability, and analytical performance.<br />
                                ● Implemented role-based access control and least-privilege policies to support secure data access across multiple domains.<br />
                                ● Automated manual reporting workflows and improved data accessibility for analytics and decision-making.<br />
                                ● Supported students as a Teaching/Research Assistant while applying data engineering concepts in real-world academic systems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='portfolioPage'>
                    <div className='workSkills'>
                        <div className='company'>
                            <div className='companyDemo'>
                                <img className='compLogo' src={company3} alt='Vendify Pvt. Ltd.' />
                                <span className='companyTitle'>
                                    <h2 className='companyName'>Vendify</h2>
                                    <i className='dateOfCompany'>Jun 2020 - Jul 2023</i>
                                </span>
                            </div>

                            <br />

                            <span className='skillCompany'>
                                <b>Skills:</b> Kafka, Spark, Hive, Airflow, Snowflake, Redshift, Java, Python, SQL, REST APIs, MySQL, Data Modeling, Streaming Pipelines
                            </span>

                            <br /><br />

                            <p className='whatILearned'><b>What I Worked On</b></p>
                            <p className='learnCompany'>
                                ● Built scalable Spark-based data pipelines ingesting 1M+ daily events for product analytics, cohort analysis, retention, and revenue reporting.<br />
                                ● Developed real-time Kafka and Spark streaming systems to reduce data latency from 60 minutes to near real-time processing.<br />
                                ● Designed distributed batch workflows using Hive and Spark on large-scale datasets, improving downstream dashboard performance.<br />
                                ● Modeled and optimized Snowflake and Redshift schemas for analytical workloads and faster query execution.<br />
                                ● Built Java and Python backend components, REST APIs, and ingestion services to support data pipelines and downstream applications.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PortfolioPage;