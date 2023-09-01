import React, {useState} from 'react';
import { Link } from 'react-scroll';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1,  HeroBtn} from './HeroElements';

const Hero = () => {

  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <div>
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
              <HeroItems>
                <HeroH1>Man made<br/> by <br/> Mechanism. World ruled <br/>by <br/>Mechanicals</HeroH1>
                <Link activeClass="active"  to='Workshops' spy={true} smooth={true} duration={1000}><HeroBtn>View More!!</HeroBtn></Link>
              </HeroItems>
            </HeroContent>
        </HeroContainer>
    </div>
  )
}

export default Hero