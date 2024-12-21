import React from 'react';
import './recommendation.css';
import pmadden from '../../assests/pmadden.jpg'
import ssikdar from '../../assests/ssikdar.jpg'
import tbartens from '../../assests/tbartens.jpg'
import lander from '../../assests/lander.jpg'
const Recommendations = () => {
    const recommendations = [
        {
            name: 'Patrick H. Madden',
            designation: 'Associate Professor; Program Director, MS Information Systems',
            message: `Rahul worked as my Teaching Assistant during Fall 2024 and consistently demonstrated exceptional dedication and professionalism. His ability to explain complex concepts to students, coupled with his strong analytical skills, made him an invaluable asset to the course. Rahul's ability to handle challenging tasks with ease and his proactive attitude stood out throughout the semester. I would highly recommend him as both a great student and a reliable team player.`,
            photo: `${pmadden}`, // Replace with the actual photo URL
        },
        {
            name: 'Dr. Sujoy Sikdar',
            designation: 'Assistant Professor, School of Computing',
            message: `Rahul worked as a Graduate Grader under my supervision for the Machine Learning course. His meticulous attention to detail, strong analytical skills, and ability to manage a large number of students effectively were truly commendable. Additionally, Rahul contributed to research on span identification, demonstrating a keen ability to grasp complex concepts and contribute valuable insights. His proactive and innovative approach made him an integral part of the course and research. I highly recommend him as a dedicated student and researcher.`,
            photo: `${ssikdar}`, // Replace with the actual photo URL
        },
        {
            name: 'Dr. Thomas W. Bartenstein',
            designation: 'Lecturer, School of Computing',
            message: `Rahul has consistently shown exceptional talent and dedication in understanding and applying complex computer science concepts. During our interactions, his ability to grasp intricate topics in programming languages, computer architecture, and operating systems stood out. His passion for learning and innovative thinking makes him a standout student. Rahul's contributions and proactive approach in coursework and discussions were exemplary. I highly recommend him for his technical expertise and commitment to excellence.`,
            photo: `${tbartens}`, // Replace with the actual photo URL
        },
        {
            name: 'Dr. Leslie C. Lander',
            designation: 'Associate Professor and Graduate Director, School of Computing',
            message: `Rahul excelled in my Design Patterns course, where he demonstrated exceptional understanding of object-oriented programming principles and advanced software design paradigms. His ability to analyze complex problems and implement elegant solutions was impressive. Scoring an A in the course, Rahul consistently showcased his strong work ethic, attention to detail, and passion for software engineering. I highly recommend him as a talented and dedicated student with a bright future in the field of computer science.`,
            photo: `${lander}`, // Replace with the actual photo URL
        },
    ];

    return (
        <div>
            <div className="recommendations">
                <h1 className="recommendations-title">Recommendations</h1>
                <div className="recommendations-list">
                    {recommendations.map((recommendation, index) => (
                        <div key={index} className="recommendation-card">
                            <img
                                className="recommendation-photo"
                                src={`${recommendation.photo}`}
                                alt={`${recommendation.name}`}
                            />
                            <div className="recommendation-details">
                                <h3 className="recommendation-name">{recommendation.name}</h3>
                                <p className="recommendation-designation">{recommendation.designation}</p>
                                <p className="recommendation-message">{recommendation.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
