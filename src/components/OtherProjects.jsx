import React, {useEffect} from 'react';
import { FaRegShareSquare, FaRegFolder } from 'react-icons/fa';
import { OtherSingleProjectAnim, ProjAnimation, OtherProjAnimation } from '../animation';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectsStyle } from '../Style';
import { Projects } from '../Data';

const OtherProjects = ({mode}) => {
  const controls = useAnimation();
  const {ref, inView} = useInView();
  useEffect(()=>{
    if(inView){
      controls.start('show')
    }
    else{
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <ProjectsStyle mode={mode} ref={ref} variants={OtherProjAnimation} initial='hidden' animate={controls}>
      <h2>Other Projects</h2>
      <div className='projects'>
        {
          Projects.map((item, i)=>{
            return <motion.div className='single-project' key={i} variants={OtherSingleProjectAnim}>
              <div className='icons'>
                <a href={item.livesite} target='_blank' rel='noreferrer'>
                <FaRegShareSquare className='view'/>
                </a>
                <a href={item.github} target='_blank' rel='noreferrer'>
                <FaRegFolder className='view'/>
                </a>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ul>
                {
                  item.resouces.map((lst, i)=>{
                      return(
                          <li key={i}>
                              {lst}
                          </li>
                      )
                  })
              }
            </ul>
            </motion.div>
          })
        }
      </div>
    </ProjectsStyle>
  )
}


export default OtherProjects