import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import { Link } from 'react-scroll';
import Schedule from '../Schedule';


const Sidebar = ({isOpen, toggle}) => {

  

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink activeClass="active"  to='Workshops' spy={true} smooth={true} duration={1000}>Workshops</SidebarLink>
            <SidebarLink activeClass="active"  to='Events' spy={true} smooth={true} duration={1000}>Events</SidebarLink>
            <SidebarLink activeClass="active"  to='scheduleId' spy={true} smooth={true} duration={1000}>Schedule</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute activeClass="active"  to='Workshops' spy={true} smooth={true} duration={1000}>Register Now!</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar