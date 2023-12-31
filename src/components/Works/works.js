import React from 'react';
import './works.css';
import portfolio from '../../assests/RRLogo2.png'

 const Works  = () => {
    return(
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in small details.</span>
            <div className='worksImgs'>
                <img className='worksImg' src={portfolio} alt=''/>
                <img className='worksImg' src={portfolio} alt=''/>
                <img className='worksImg' src={portfolio} alt=''/>
                <img className='worksImg' src={portfolio} alt=''/>                
                <img className='worksImg' src={portfolio} alt=''/>
                <img className='worksImg' src={portfolio} alt=''/>
            </div>
            <button className='worksBtn'>See more</button>
        </section>
    );
}

export default Works