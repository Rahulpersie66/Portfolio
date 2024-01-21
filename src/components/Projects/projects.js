import './projects.css'
import React, { useState, useEffect } from 'react';
import PortfolioNavbar from '../PortfolioNavBar/portfolioNavbar'
// import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

const Projects = () =>{

    const [repoNames, setRepoNames] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.github.com/users/Rahulpersie66/repos');
          const data = await response.json();
          const names = data.map(repo => repo.name);
          setRepoNames(names);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
    <div className='myProjects'>
        <PortfolioNavbar/>
            <div className='project'>
                <h2>Github Repository Names</h2>
                <ul>
                {repoNames.map(name => (
                    <RouterLink to={`https://github.com/Rahulpersie66/${name}`}><li key={name}>{name}</li></RouterLink>
                ))}
                </ul>
            </div>
      </div>
    );
  };

export default Projects;