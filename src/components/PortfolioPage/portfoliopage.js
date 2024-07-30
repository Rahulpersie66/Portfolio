import './portfoliopage.css'
import React from 'react';
import company1 from '../../assests/nablasol.png';
import company2 from '../../assests/IMG_20240115_132427__01.jpg';
import PortfolioNavbar from '../PortfolioNavBar/portfolioNavbar';
import Footer from '../Footer/footer';

const PortfolioPage = () => {
    return (
        <div className="PortfolioPage">
        <PortfolioNavbar/>
        {/* <button className="printPage" onClick={() => window.print()}>Print Page</button> */}
        {/* <br></br> */}
        <div className='PortfolioWorkExp'>
        <h1 id='portfolioPageh1'>Work Experience:-</h1>

        <div className ="portfolioPage">
          <div className='workSkills'>
            <div className='company'>
              <div className = 'companyDemo'>
              <img className='compLogo' src={company1} alt='Nablasol Digital Solutions Pvt. Ltd.'></img>
              <span className='companyTitle'><h2 className='companyName'>Nablasol Digital Solution Pvt. Ltd.</h2><i className='dateOfCompany'>Dec 2022 - Jul 2023</i></span>
              </div><br></br> 
              <span className='skillCompany'><b>Skill:</b> Php, Javascript, Mysql, MVC Architecture, Object Oriented Programming, Wordpress, SugarCrm Framework, Ajax, jQuery, HTML5, CSS3, Effective Communication, Adaptibility, Creative Thinking</span>
              <br></br>
              <br></br>
              <p className='whatILearned'><b>What i have learned?</b></p>
              <p className='learnCompany'>
              ●	Achieved boost in user engagement of 20% through JavaScript management, API integration, and optimizing data organization in MySQL databases to meet client needs.<br></br>
●	Enhanced the tinyMCE editor, incorporating Java core and REST API to handle 4 functionalities- generate, view, manage, and edit PDFs on a live platform, showcasing dynamic responses using JavaScript and TypeScript.<br></br>
●	Implemented a Java chatbot API to engage users during unavailable customer service hours, providing options to address queries, reducing the customer service workload by 30% and leading to a 15% surge in user satisfaction.<br></br>
●	Spearheaded research and analysis, collaborating with the design team to boost product alignment with target users and markets, leading to a 15% surge in user satisfaction and a 10% increase in market reach.
              </p>
            </div>
          </div>
        </div>

        <div className='portfolioPage'>
          <div className='workSkills'>
            {/* Clerisy Solution */}
            <div className='company'>
            <div className = 'companyDemo'>
              <img className='compLogo' src={company2} alt='Clerisy Solutions Pvt. Ltd.'></img>
              <span className='companyTitle'><h2 className='companyName'>Clerisy Solution Pvt. Ltd.</h2><i className='dateOfCompany'>Jan 2021 - Dec 2022</i></span></div>
              <br></br> 
              <span className='skillCompany'><b>Skill:</b> Php, Javascript, Java, MySQL, MVC Architecture, Object Oriented Programming, Wordpress, CodeIgniter Framework, Ajax, jQuery, HTML5, CSS3, Effective Communication, Analysis of database, Creative Thinking</span>
              <br></br>
              <br></br>
              <p className='whatILearned'><b>What i have learned?</b></p>
              <p className='learnCompany'>
              ●	Engineered a robust API, facilitating communication with a website to retrieve JSON data, integrated third-party services, filtered, and pushed data to a database, debugged JSON errors, and optimized data storage, resulting in an impressive 18% reduction in overall data size. 
              <br></br>
●	Leveraged Java Object-Oriented Programming to create a robust backend logic for discounted and coupon system for order processing on an e-commerce website, contributing to a hike in sales and 10% boost in revenue.
<br></br>●	Revamped database queries, yielding a 30% improvement in data retrieval speed, optimized website response times by 20%, and crafted interactive pages with JavaScript and AJAX, enhancing overall user experience and satisfaction.
<br></br>●	Engineered user-friendly websites, achieving a 45% improvement in functionality, a 15% reduction in load times, and implementing efficient storage management practices for enhanced performance.
              </p>
            </div> 
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
}

export default PortfolioPage;