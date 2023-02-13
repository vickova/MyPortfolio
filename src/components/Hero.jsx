import React from 'react';
import Vicky from '../images/vicky-rm-bg.png';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import { HeroStyle } from '../Style';
import Cv from '../images/cv/Victoria Olumide.pdf';
import { motion } from 'framer-motion';
import { SectionAnimation, TextAnimation, PictureAnimation, titleAnim } from '../animation';

const Hero = ({mode}) => {
  return (
    <HeroStyle id='home' mode={mode}>
      <div className='images'>
            <a href="https://github.com/vickova" target='_blank' rel='noreferrer'>
              <FiGithub className='hero-icons'/>
            </a>
            <a href="https://www.linkedin.com/in/victoria-olumide-90439b163/" target='_blank' rel='noreferrer'>
              <FiLinkedin className='hero-icons'/>
            </a>
            <a href="https://twitter.com/OlumideVictori3" target='_blank' rel='noreferrer'>
              <FiTwitter className='hero-icons'/>
            </a>

        </div>
        <motion.div className='heros' variants={SectionAnimation} initial='hidden' animate='show'>
          <motion.div className='herotext' variants={TextAnimation}>
              <motion.h2 variants={titleAnim}>Hello, I'm Victoria Olumide</motion.h2>
              <motion.h3 variants={titleAnim}>A Daring Frontend Developer and Data Analyst</motion.h3>
              <motion.p variants={titleAnim}>I optimize user experience by implementing visual elements that users see and interact with within a web application</motion.p>
              <motion.button variants={titleAnim}><a href={Cv} target='_blank' rel='noreferrer'><span>Download CV</span><FiDownload/></a></motion.button>
          </motion.div>
          <motion.div className='profile' variants={PictureAnimation}>
            <img src={Vicky} alt="Victoria Olumide"/>
          </motion.div>
        </motion.div>
    </HeroStyle>
  )
}

export default Hero;