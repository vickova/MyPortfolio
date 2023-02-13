import React, {useState, useEffect} from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjAnimation } from '../animation';
import { QualificationStyle } from '../Style';

const Qualifications = ({mode}) => {
  const [openfront, setOpenfront] = useState(true);
  const [opendata, setOpendata] = useState(false);

  const OpenFrontHandler =()=>{
    setOpendata(false);
    setOpenfront(!openfront);
  }
  const OpenDataHandler =()=>{
    setOpenfront(false);
    setOpendata(!opendata);
  }
  const controls = useAnimation();
  const {ref, inView} = useInView();
  console.log(inView)
  useEffect(()=>{
    if(inView){
      controls.start('show')
    }
    else{
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <QualificationStyle id='qualifications' mode={mode} ref={ref} variants={ProjAnimation} initial='hidden' animate={controls}>
        <h2>Qualifications</h2>
        <h4>My Personal journey</h4>
        <div className='section'>
          <div className='sect first'>
            <h3>Experience</h3>
                <div>
                  <div className='qualify'>
                    <h4 className={openfront? 'border':''} onClick={OpenFrontHandler}>Cogenie <span> start date: 2022</span></h4>
                    <ul className={openfront? '':'set'}>
                        <li><div className='right-chev'/> <span>contributed to the development of Cway World Wide using React and Styled Components</span></li>
                        <li><div className='right-chev'/> <span>Collaborated with colleagues and senior developers. I also got better in the understanding of git and github</span></li>
                    </ul>
                  </div>
                  <div className='qualify'>
                    <h4 className={opendata? 'border':''} onClick={OpenDataHandler}>Tribnova <span>start date: 2022</span></h4>
                    <ul className={opendata? '':'set'}>
                        <li><div className='right-chev'/> <span>I built different pages of the tribinova website like the dashborad section, the sign in section, etc.</span></li>
                        <li><div className='right-chev'/> <span>I worked with colleagues and senior developers, contibuting ideas and profering solutions to prolems when they arise</span></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='sect last'>
              <h3>Education</h3>
              <div>
                  <p>Soil Science</p>
                  <p>Obafemi, Awolowo University</p>
                  <p>Nigeria.</p>
              </div>
            </div>
        </div>
    </QualificationStyle>
  )
}
export default Qualifications