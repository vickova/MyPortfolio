import React, {useEffect} from 'react';
import { ContactStyle } from '../Style';
import { ProjAnimation } from '../animation';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({mode}) => {
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
    <ContactStyle id='contact' mode={mode} ref={ref} variants={ProjAnimation} initial='hidden' animate={controls}>
      <h2>Contact</h2>
      <h4>Get in touch</h4>
      <div className='form'>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
          <div className='form-section'>
            <div className='sect'>
              <input type="text" name='name' placeholder='Name'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Project'></textarea>
            </div>
            <div className='sect'>
              <input type="email" name='email'placeholder='Email Address'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
          </div>
          <div className='button'>
          <button>Submit</button>
          </div>
        </form>
      </div>
    </ContactStyle>
  )
}


export default Contact