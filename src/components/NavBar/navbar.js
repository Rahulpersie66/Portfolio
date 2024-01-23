import React, {useState} from 'react'
import logo from '../../assests/RRLogo.png';
// for this to use---- installl --- npm i react-scroll /// where i is for install
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import './navbar.css';
import contactMe from '../../assests/msg2.png';
//create Navbar function which will be used in react
const Navbar  = ({ onWorksClick }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <RouterLink to='/Portfolio/'>
                <img src={logo} alt="Logo" className='logo' />
            </RouterLink>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={() => onWorksClick()}>Portfolio</Link> */}
                <RouterLink to='/portfolioPage/' className='desktopMenuListItem'>Portfolio</RouterLink>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>My Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick = {()=> {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }
            }>
                <img src={contactMe} alt="" className="desktopMenuImg"/>&nbsp;Contact Me
            </button>

            {/* Mobile menu */}
            <img src={logo} alt="mobMenu" className='mobMenu' onClick = { () => setShowMenu(!showMenu)}></img>
            <div className="navMenu" style={{ display : showMenu ? 'flex' : 'none'} }>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >About</Link>
                {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>{setShowMenu(false);} } >Portfolio</Link> */}
                <RouterLink to='/portfolioPage/' className='listItem'>Portfolio</RouterLink>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >My Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Contact</Link>
            </div>
        </nav>
    )
} 


export default Navbar