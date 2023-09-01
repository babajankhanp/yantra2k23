import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaEnvelope, FaPaperPlane, FaYoutube,FaWhatsapp } from 'react-icons/fa'



const Schedule = () => {
  return (
    <>
    <div 
    style={{background: "linear-gradient(to right, #EAECC6, #2BC0E4)" }}>
    <div id='scheduleId'>
      <div   style={{textAlign:'center'}} className='scheduleHeading'>
        <h1>Schedule</h1>
      </div>



  <VerticalTimeline 
  style={{background: 'linear-gradient(to right, #FFC837, #FF8008)' 
  }}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }}  // we can also Give bacakground color: blue/green etc
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} //we castyle arrow
    date="8:30AM - 10:30AM"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'sky-blue' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Inaguration ceremony</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-1)</h4>
    <p>
      Pride of Mechanical Engineering @JNTUCEP Mechanical Engineering will be started by lighting up victory lamp along with guest speches
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }} //we can also background:green/yellow
    date="10:30AM-10:45AM"
    iconStyle={{ background: 'green', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Short Break</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-1)</h4>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#C12FF', color: '#000' }}
    date="10:45AM - 1PM"
    iconStyle={{ background: '#FF41FF', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Workshop/Event-session 1</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-1)</h4>
    <p>
      Both workshops will run Simultaneously
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }}
    date="1PM - 2PM"
    iconStyle={{ background: '#FF8008', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Lunch Break</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-1)</h4>
    <p>***</p> 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }}
    date="2PM - 4:30PM"
    iconStyle={{ background: '#FF0066', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Workshop/Event session-2</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-1)</h4>
    <p>
      ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }}
    date="9:00AM- 10:30AM"
    iconStyle={{ background: '#AD0AFD', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Workshop Session-3</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-2)</h4>
    <p>
    ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: '#000' }}
    date="10:30AM - 10:45AM"
    iconStyle={{ background: '#213D30	', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Short Break</h3>
    <h4 className="vertical-timeline-element-subtitle">jj</h4>
    <p>
    ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  color: '#000' }}
    date="10:45AM=1PM"
    iconStyle={{ background: '#FFFF6', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Workshop Session 5</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-2)</h4>
    <p>
    ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  color: '#000' }}
    date="1PM-2PM"
    iconStyle={{ background: '#FF2400	', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Lunch</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-2)</h4>
    <p>
    ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  color: '#000' }}
    date="2PM-4PM"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">workshop Session-5</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-2)</h4>
    <p>***</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ color: '#000' }}
    date="4PM-5PM"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
    <h4 className="vertical-timeline-element-subtitle">hello</h4>
    <p>
    ***
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{  color: '#000' }}
    date="Starts at 6PM"
    iconStyle={{ background: 'green', color: '#fff' }}
    icon={<FaPaperPlane/>}
  >
    <h3 className="vertical-timeline-element-title">Cultural Night</h3>
    <h4 className="vertical-timeline-element-subtitle">(Day-2)</h4>
    <p>
      --Typically called "Concert of JNTUA college Of Engineering"
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'orange', color: '#fff' }}
    icon={<FaPaperPlane/>}
  />
</VerticalTimeline>
       
    </div>
    </div>
    </>
  )
}

export default Schedule
