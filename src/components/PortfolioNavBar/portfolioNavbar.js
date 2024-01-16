import './portfolioNavbar.css'
import React, {useState} from 'react'

import logo from '../../assests/RRLogo.png';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import contactMe from '../../assests/msg2.png';

const PortfolioNavbar = () => {

    const [showMenu, setShowMenu] = useState(false);


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
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Clients</Link>
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
            <RouterLink to='/Portfolio/' className='listItem'>Home</RouterLink>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >About</Link>
            {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>{setShowMenu(false);} } >Portfolio</Link> */}
            <RouterLink to='/portfolioPage/' className='listItem'>Portfolio</RouterLink>
            <RouterLink  activeClass='active' to='/education/' className='listItem'>Education</RouterLink>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Contact</Link>
        </div>
    </nav>
    )
}


export default PortfolioNavbar;