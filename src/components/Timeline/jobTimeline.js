import './jobTimeline.css'
import React from 'react'
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {FaBriefcase} from 'react-icons/fa'

const JobTimeline = () =>{
    return(
        <div className='experience'>
            <VerticalTimeline lineColor='#247' className='verticalline'>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Dec 2022 - Jul 2023'
                >
                <h3 className='headTimeline'>Nablasol Digital Solution Pvt. Ltd.</h3>
                <p className='paraTimeline'>Software Development</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jan 2022 - Dec 2022'
                >
                <h3 className='headTimeline'>Clerisy Solution Pvt. Ltd.</h3>
                <p className='paraTimeline'>Full Stack Developer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jan 2022 - Jul 2022'
                >
                <h3 className='headTimeline'>Simplilearn Java Full Stack Online</h3>
                <p className='paraTimeline'>Java Full Stack Student</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jun 2019 - Jul 2019'
                >
                <h3 className='headTimeline'>Think Next Pvt. Ltd.</h3>
                <p className='paraTimeline'>AI/ML Student/Intern</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default JobTimeline;