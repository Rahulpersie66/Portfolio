import React, {useState} from 'react'
import logo from '../../assests/RRLogo.png';
// for this to use---- installl --- npm i react-scroll /// where i is for install
import {Link} from 'react-scroll';
import './navbar.css';
import contactMe from '../../assests/msg2.png';
//create Navbar function which will be used in react
const Navbar  = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' onClick={ () =>{document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offset: -100 });} }></img>
            <div className="desktopMenu">
                <Link actieClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link  actieClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link actieClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link actieClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Clients</Link>
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
                <Link actieClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Home</Link>
                <Link  actieClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >About</Link>
                <Link actieClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Portfolio</Link>
                <Link actieClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Clients</Link>
                <Link actieClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={ () =>setShowMenu(false) } >Contact</Link>
            </div>
        </nav>
    )
} 


export default Navbar