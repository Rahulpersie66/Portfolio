import './portfolioNavbar.css'
import React, {useState} from 'react'

import logo from '../../assests/RRLogo.png';
import {Link} from 'react-scroll';
import {Link as RouterLink,  useNavigate} from 'react-router-dom';
import contactMe from '../../assests/msg2.png';
import { FaBars } from 'react-icons/fa';

const PortfolioNavbar = () => {
    const navigate =  useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    // const handleContactMeClick = () => {
    //     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    //   };
    
      const handlePortfolioClick = () => {
        navigate('/Portfolio/');
      };
    

    return (
        <nav className="portfolioNavbar">
        <RouterLink to='/Portfolio/'>
            <img src={logo} alt="Logo" className='logo' />
        </RouterLink>
        <div className="desktopMenu">
            <RouterLink to='/Portfolio/' spy={true} offset={-50} className='desktopMenuListItem'>Home</RouterLink>
            <Link  activeClass='active' to='portfolioPageh1' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'>Work Experience</Link>
            {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={() => onWorksClick()}>Portfolio</Link> */}
            <RouterLink to='/portfolioPage/' className='desktopMenuListItem'>Portfolio</RouterLink>
            <RouterLink to='/education/' activeClass='active' aria-current='page' className='desktopMenuListItem'>Education</RouterLink>
            <RouterLink activeClass='active' to='/projects' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Projects</RouterLink>
        </div>
        <button className="desktopMenuBtn"  onClick ={handlePortfolioClick}>
            <img src={contactMe} alt="" className="desktopMenuImg"/>&nbsp;Contact Me
        </button>

        {/* Mobile menu */}
        {/* <img src={logo} alt="mobMenu" className='mobMenu' onClick = { () => setShowMenu(!showMenu)}></img> */}
        <FaBars  className='mobMenu' onClick = { () => setShowMenu(!showMenu)}></FaBars>
        <div className="navMenu" style={{ display : showMenu ? 'flex' : 'none'} }>
            <RouterLink to='/Portfolio/' className='listItem'>Home</RouterLink>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >About</Link>
            {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>{setShowMenu(false);} } >Portfolio</Link> */}
            <RouterLink to='/portfolioPage/' className='listItem'>Portfolio</RouterLink>
            <RouterLink  activeClass='active' to='/education/' className='listItem'>Education</RouterLink>
            <RouterLink activeClass='active' to='/projects' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Projects</RouterLink>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ handlePortfolioClick} >Contact</Link>
        </div>
    </nav>
    )
}


export default PortfolioNavbar;