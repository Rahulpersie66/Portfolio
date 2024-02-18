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
              <p className='learnCompany'>In a Software development intern role, I drove significant improvements in website performance and user engagement, realizing a remarkable 20% enhancement through expert management of JavaScript, seamless API integration, and meticulous optimization of data in MySQL databases. This strategic approach not only met client needs but also ensured a heightened user experience. Additionally, my technical acumen led to an outstanding 98% uptime for websites, leveraging JavaScript and AJAX, enabling efficient content management, and adeptly resolving API issues for uninterrupted operations. Moreover, I spearheaded impactful research and analysis, collaborating closely with the design team to align our product with target users and markets. This collaborative effort resulted in a notable 15% surge in user satisfaction and a commendable 10% increase in market reach, showcasing my ability to drive positive outcomes through a holistic approach.</p>
            </div>
          </div>
        </div>

        <div className='portfolioPage'>
          <div className='workSkills'>
            {/* Clerisy Solution */}
            <div className='company'>
            <div className = 'companyDemo'>
              <img className='compLogo' src={company2} alt='Nablasol Digital Solutions Pvt. Ltd.'></img>
              <span className='companyTitle'><h2 className='companyName'>Clerisy Solution Pvt. Ltd.</h2><i className='dateOfCompany'>Jan 2022 - Dec 2022</i></span></div>
              <br></br> 
              <span className='skillCompany'><b>Skill:</b> Php, Javascript, Java, MySQL, MVC Architecture, Object Oriented Programming, Wordpress, CodeIgniter Framework, Ajax, jQuery, HTML5, CSS3, Effective Communication, Analysis of database, Creative Thinking</span>
              <br></br>
              <br></br>
              <p className='whatILearned'><b>What i have learned?</b></p>
              <p className='learnCompany'>As a Full Stack Trainee, I played a pivotal role in elevating website functionality and user engagement through the implementation of PHP, WordPress, MySQL, and CodeIgniter. I successfully integrated coupon systems and facilitated video embedding using WordPress plugins, contributing to a significant 25% increase in user engagement.
Aiming to optimize overall performance, I undertook a comprehensive revamp of database queries, resulting in an impressive 30% improvement in data retrieval speed. Concurrently, I leveraged JavaScript and AJAX to craft interactive pages, thereby enhancing the user experience and satisfaction. These initiatives collectively led to a 20% improvement in website response times.
In addition to performance enhancements, I engineered user-friendly websites, achieving a notable 45% improvement in functionality. Through strategic optimizations, I successfully reduced load times by 15%, contributing to a more seamless user experience. Moreover, my implementation of efficient storage management practices significantly contributed to enhanced overall website performance. These efforts underscore my commitment to delivering impactful results and continuous improvement in a Full Stack development capacity.</p>
            </div> 
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
}

export default PortfolioPage;