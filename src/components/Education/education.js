import './education.css';
import PortfolioNavbar from '../PortfolioNavBar/portfolioNavbar';
import BU from  '../../assests/BinghamtonUniversity.jpg'
import JP from '../../assests/juit_by_jaypeeit_dgafpv5-fullview.jpg'
import Footer from '../Footer/footer';
import React from 'react'

const Education = () => {
    return (
        <div>
            <PortfolioNavbar/>
            <div className='masterDegree'>
                <div className='masterUnivTitle'>
                    <img className="logoUniv" alt="BULogo" src={BU}></img>
                    <h1 className='masterUniv'>Binghamton University</h1>
                    <span className='masterDate'>Aug 2023- May 2025</span>
                </div>
                <br></br>
                <div className='coursesTaken'>
                    <h2 className='coursesTakens'>Courses:</h2>
                    <span className='coursesName'>Intro to Machine Learning, Programming Languages, Design Analysis and Algorithms, Programming for Web, Operating System, Software Management</span>
                    <br></br><br></br>
                    <h2 className='skillsLearnedHeading'>Skill Gain:</h2>
                    <p className='skillsLearned'>C, C++, Java, Python, Object-Oriented Programming, Imperative Programming, Functional Programming, Basics of Machine Learning </p>
                </div>
                <br></br>
                <div className='cgpa'>
                    <h2 className='gpaHead'>CGPA: <span className='gpaValue'> <b className='gpaGetValue'>4.00 </b> <b className='gpaOutValue'>/4.00</b></span></h2>
                </div>
                <div className='courseGrade'>
                    <h2 className='coursePerformance'>Course Performance</h2>
                    <br></br>
                    <table className='courseTable'>
                        <thead>
                        <tr>
                            <th>Sr.No.</th><th>Course Name</th><th>Taken in:</th><th>Grade Scored:</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.</td><td>Intro to Machine Learning</td><td>Fall 2023</td><td>A</td>
                        </tr>
                        <tr>
                            <td>2.</td><td>Design Analysis And Algorithms</td><td>Fall 2023</td><td>A</td>
                        </tr>
                        <tr>
                            <td>3.</td><td>Programming Languages</td><td>Fall 2023</td><td>A</td>
                        </tr>
                        <tr>
                            <td>4.</td><td>Operating System</td><td>Spring 2024</td><td>To Be Graded</td>
                        </tr>
                        <tr>
                            <td>5.</td><td>Programming For Web</td><td>Spring 2024</td><td>To Be Graded</td>
                        </tr>
                        <tr>
                            <td>6.</td><td>Project Management</td><td>Spring 2024</td><td>To Be Graded</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Jaypee University  */}
            <div className='masterDegree'>
                <div className='masterUnivTitle'>
                    <img className="logoUnivJP" alt="JPLogo" src={JP}></img>
                    <h1 className='masterUniv'>Jaypee University of Information Technology</h1>
                    <span className='masterDate'>Jul 2016 - Aug 2020</span>
                </div>
                <br></br>
                <div className='coursesTaken'>
                    <h2 className='coursesTakens'>Courses:</h2>
                    <span className='coursesName'>Introduction To Computers And Programming, Presentation and Communication Skills, Electrical Circuit Analysis, Data Structures, Discrete Mathematics, Basics Electronic Devices and Circuits, Digital Electronics, UNIX Programming Lab, Object-Oriented Programming, Database Systems, Probability Theory and Random Processes, Microprocessor and Controllers, Fundamentals of Algorithms, Operating System, Theory Of Computation, Software Testing and Debugging, Computer Network, Complier Design, Computer Organisation and Architecture, Image Processing, Artificial Intelligence, Graph Algorithms and Applications, Software Reliability, Internet of Things Architecture and Design(OE), Design & Analysis of MultiDeminsional Data Structures, Contemporary India: Challenges Of Democracy & Development </span>
                    <br></br><br></br>
                    <h2 className='skillsLearnedHeading'>Skill Gain:</h2>
                    <p className='skillsLearned'>C, C++, Java, Object-Oriented Programming, Imperative Programming, Functional Programming, Basics of Machine Learning, Web Developemnt, Artificial Imtelligence, Creative Thinking, Effective Communication, Presentation Skills, MySQL, Graph Theory, IOT, Finite Automata, UNIX Programming </p>
                </div>
                <br></br>
                <div className='cgpa'>
                    <h2 className='gpaHead'>CGPA: <span className='gpaValue'> <b className='gpaGetValue'>3.68 </b> <b className='gpaOutValue'>/4.00</b></span></h2>
                    <h2 className='gpaHead'>CGPA(India): <span className='gpaValue'> <b className='gpaGetValue'>9.20 </b> <b className='gpaOutValue'>/ 10.00</b></span> </h2>
                </div>
                <br></br>
                <div className='courseGrade'>
                    <h2 className='coursePerformance'>Course Performance</h2>
                    <br></br>
                    <table className='courseTable'>
                        <thead>
                        <tr>
                            <th>S.No.</th><th>Course Name</th><th>Semester</th><th>Grade Scored</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.</td><td>Introduction To Computers And Programming</td><td>I Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>2.</td><td>Presentation and Communication Skills</td><td>I Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>3.</td><td>Electrical Circuit Analysis</td><td>I Semester</td><td>B</td>
                        </tr>
                        <tr>
                            <td>4.</td><td>Data Structures</td><td>II Semester</td><td>B+</td>
                        </tr>
                        <tr>
                            <td>5.</td><td>Discrete Mathematics</td><td>II Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>6.</td><td>Basics Electronic Devices and Circuits</td><td>II Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>7.</td><td>Digital Electronics</td><td>III Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>8.</td><td>UNIX Programming Lab</td><td>III Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>9.</td><td>Object-Oriented Programming</td><td>III Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>10.</td><td>Database Systems</td><td>III Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>11.</td><td>Probability Theory and Random Processes</td><td>IV Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>12.</td><td>Microprocessor and Controllers</td><td>IV Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>13.</td><td>Fundamentals of Algorithms</td><td>IV Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>14.</td><td>Signal And Systems </td><td>IV Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>15.</td><td>Operating System</td><td>V Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>16.</td><td>Theory of Computation</td><td>V Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>17.</td><td>Software Testing and Debugging</td><td>V Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>18.</td><td>Communication System</td><td>V Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>19.</td><td>Computer Network</td><td>VI Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>20.</td><td>Compiler Design</td><td>VI Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>21.</td><td>Computer Organisation and Architecture</td><td>VI Semester</td><td>B+</td>
                        </tr>
                        <tr>
                            <td>22.</td><td>Computer Graphics</td><td>VI Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>23.</td><td>System and Network Programming Lab</td><td>VI Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>24.</td><td>Image Processing</td><td>VII Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>25.</td><td>Artificial Intelligence</td><td>VII Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>26.</td><td>Graph Algorithms and Applications</td><td>VII Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>27.</td><td>Internet of Things Architecture and Design(OE)</td><td>VIII Semester</td><td>A</td>
                        </tr>
                        <tr>
                            <td>28.</td><td>Software Reliability</td><td>VIII Semester</td><td>B+</td>
                        </tr>
                        <tr>
                            <td>29.</td><td>Design & Analysis of MultiDeminsional Data Structures</td><td>VIII Semester</td><td>A+</td>
                        </tr>
                        <tr>
                            <td>30.</td><td>Contemporary India: Challenges Of Democracy & Development </td><td>VIII Semester</td><td>A+</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Education