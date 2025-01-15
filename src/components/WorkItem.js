import React, {useEffect} from 'react';
import { FaRegShareSquare } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PictureAnimation, ProjAnimation } from '../animation';

const WorkItem = ({name, description, image, livesite, type, github, items}) => {
    const controls = useAnimation();
  const {ref, inView} = useInView({threshold:0.2});
  useEffect(()=>{
    if(inView){
      controls.start('show')
    }
    else{
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <motion.div className='works my-[3rem]' ref={ref} variants={ProjAnimation} initial='hidden' animate={controls}>
        <motion.div className='image-cover' style={{height:'fit-content'}}>
          <img src={image} alt=''/>
        </motion.div>
        <motion.div className='text' variants={PictureAnimation}>
            <h3 className='first'>{type} Project</h3>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='link'>
                <a href={github} target='_blank' rel='noreferrer'>
                    <FiGithub className='share'/>
                </a>
                <a href={livesite} target='_blank' rel='noreferrer'>
                    <FaRegShareSquare className='share'/>
                </a>
            </div>
            <ul className='lists'>
            {
                items.resouces.map((lst, i)=>{
                    return(
                        <li key={i}>
                            {lst}
                        </li>
                    )
                })
            }
            </ul>
        </motion.div>
    </motion.div>
  )
}

export default WorkItem