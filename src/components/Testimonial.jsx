import React, {useEffect} from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjAnimation } from '../animation';
import { TestimonialStyle } from '../Style';
import { testimonial } from '../Data';

const Testimonial = ({mode}) => {
  
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
    <TestimonialStyle id='testimonials' mode={mode} ref={ref} variants={ProjAnimation} initial='hidden' animate={controls}>
      <div className='header'>
        <h2>Testimonials</h2>
        <h4>My clients and Collaborators saying</h4>
      </div>
      <div className='testimonials-section'>
        {
          testimonial.map((item, i)=>{
            return <div className='card-test' key={i}>
              <div className='head'>
                <img src={item.image} alt={item.name} />
                <div className='title'>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
              <p className='words'>{item.words}</p>
            </div>
          })
        }
      </div>
    </TestimonialStyle>
  )
}
export default Testimonial