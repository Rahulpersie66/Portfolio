import './timeline.css'
import React from 'react'
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {FaGraduationCap} from 'react-icons/fa'

const Timeline = () =>{
    return(
        <div className='experience'>
            <VerticalTimeline lineColor='#247' className='verticalline'>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaGraduationCap/>}
                date = 'Aug 2023 - May 2025'
                >
                <h3 className='headTimeline'>Binghamton University</h3>
                <p className='paraTimeline'>Masters in Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaGraduationCap/>}
                date = 'Aug 2016 - Jul 2020'
                >
                <h3 className='headTimeline'>Jaypee University of Information Technology</h3>
                <p className='paraTimeline'>Bachelors of Technology in  Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaGraduationCap/>}
                date = 'Apr 2013 - Jul 2015'
                >
                <h3 className='headTimeline'>Kendriya Vidyalaya Hamirpur</h3>
                <p className='paraTimeline'>Secondary Education (11-12)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaGraduationCap/>}
                date = 'Apr 2003 - Mar 2013'
                >
                <h3 className='headTimeline'>Kendriya Vidyalaya Nadaun</h3>
                <p className='paraTimeline'>Primary Education (1 -10)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;