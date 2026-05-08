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
                date = 'Oct 2025 - Current'
                >
                <h3 className='headTimeline'>Cummins Inc.</h3>
                <p className='paraTimeline'>Software Engineer(Data)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jan 2024 - May 2025'
                >
                <h3 className='headTimeline'>Binghamton University</h3>
                <p className='paraTimeline'>Data Engineer & Teachig Assistant</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jan 2021 - Jul 2022'
                >
                <h3 className='headTimeline'>Vendify Pvt. Ltd.</h3>
                <p className='paraTimeline'>Software/Data Engineer</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement className='vertical-timeline-element'
                iconStyle={{background:'rgb(0,0,0)', color:'#fff'}} 
                icon={<FaBriefcase/>}
                date = 'Jun 2020 - Jul 2023'
                >
                <h3 className='headTimeline'>Think Next Pvt. Ltd.</h3>
                <p className='paraTimeline'>AI/ML Student/Intern</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default JobTimeline;