import React,{useState} from 'react';
import {FaCss3, FaReact, FaPython, FaChevronDown} from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
import {AiFillFileExcel} from 'react-icons/ai';
import { ProjAnimation } from '../animation';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { SkillStyle } from '../Style';

const Skills = ({mode}) => {
  const [openfront, setOpenfront] = useState(false);
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
    <SkillStyle openfront={openfront} opendata={opendata} id='skills' mode={mode} ref={ref} variants={ProjAnimation} initial='hidden' animate={controls}>
        <h2>Skills</h2>
        <h4>My technical level</h4>
        <div className='skill-flex'>
            <div>
                <div className='skillset' onClick={OpenFrontHandler}>
                  <div>
                    <h3>Frontend Development</h3>
                    <p>2years+ experience</p>
                    </div>
                    
                    <FaChevronDown className='chev first'/>
                </div>
                <ul className={openfront?'':'hide'}>
                  <li>Html <AiOutlineHtml5 className='skill-icon'/></li>
                  <li>Css <FaCss3 className='skill-icon'/></li>
                  <li>Javascript <DiJavascript1 className='skill-icon'/></li>
                  <li>React js <FaReact className='skill-icon'/></li>
                  <li>Tailwind css</li>
                  <li>Styled components </li>
                  <li>Next js</li>
                </ul>
            </div>
            <div className='left'>
                <div className='skillset' onClick={OpenDataHandler}>
                  <div>
                    <h3>Data Analysis</h3>
                    <p>1year+ experience</p>
                  </div>
                    <FaChevronDown className='chev last'/>
                </div>
                <ul className={opendata?'':'hide'}>
                  <li>Python <FaPython className='skill-icon'/></li>
                  <li>Excel <AiFillFileExcel className='skill-icon'/></li>
                  <li>Power Bi</li>
                  <li>Tableau</li>
                </ul>
            </div>
        </div>
    </SkillStyle>
  )
}
export default Skills