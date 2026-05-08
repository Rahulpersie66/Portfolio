import React, {useState} from 'react'
import logo from '../../assests/RRLogo.png';
// for this to use---- installl --- npm i react-scroll /// where i is for install
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import './navbar.css';
import contactMe from '../../assests/msg2.png';
import { FaBars } from 'react-icons/fa';
//create Navbar function which will be used in react
const Navbar  = ({ onWorksClick }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <RouterLink to='/Portfolio/'>
                <img src={logo} alt="Logo" className='logo' />
            </RouterLink>
            {/* <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <RouterLink to='/portfolioPage/' className='desktopMenuListItem'>Portfolio</RouterLink>
                <RouterLink to='/portfolioPage/' className='desktopMenuListItem'>
                    Work Experience
                </RouterLink>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>My Projects</Link>
            </div> */}
            <div className="desktopMenu">
                <RouterLink to='/Portfolio/#intro' className='desktopMenuListItem'>Home</RouterLink>
                <RouterLink to='/Portfolio/#skills' className='desktopMenuListItem'>About</RouterLink>
                <RouterLink to='/portfolioPage/' className='desktopMenuListItem'>Work Experience</RouterLink>
                <RouterLink to='/projects' className='desktopMenuListItem'>My Projects</RouterLink>
            </div>

            <button
                className="desktopMenuBtn"
                onClick={() => {
                    window.location.href = '/Portfolio/#contact';
                }}
                >
                <img src={contactMe} alt="" className="desktopMenuImg"/>&nbsp;Contact Me
            </button>

            {/* Mobile menu */}
            {/* <img src={logo} alt="mobMenu" className='mobMenu' onClick = { () => setShowMenu(!showMenu)}></img> */}
            <FaBars className='mobMenu' onClick={()=>{setShowMenu(!showMenu)}}></FaBars>
            {/* <div className="navMenu" style={{ display : showMenu ? 'flex' : 'none'} }>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >About</Link>
                <RouterLink to='/portfolioPage/' className='listItem'>Portfolio</RouterLink>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >My Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Contact</Link>
            </div> */}

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <RouterLink to='/Portfolio/' className='listItem' onClick={() => setShowMenu(false)}>Home</RouterLink>
                <RouterLink to='/Portfolio/#skills' className='listItem' onClick={() => setShowMenu(false)}>About</RouterLink>
                <RouterLink to='/portfolioPage/' className='listItem' onClick={() => setShowMenu(false)}>Work Experience</RouterLink>
                <RouterLink to='/projects' className='listItem' onClick={() => setShowMenu(false)}>My Projects</RouterLink>
                <RouterLink to='/Portfolio/#contact' className='listItem' onClick={() => setShowMenu(false)}>Contact</RouterLink>
            </div>
        </nav>
    )
} 


export default Navbar