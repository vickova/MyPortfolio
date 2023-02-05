import React, {useEffect} from 'react';
import styled from 'styled-components';
import Emmanuel from '../images/emmanuel.png';
import Oluwaseun from '../images/oluwaseun.jpg';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjAnimation } from '../animation';
import { motion } from 'framer-motion';


const Testimonial = ({mode}) => {
  const testimonial = [
    {
      name:'Emmanuel - Eunit ',
      title: 'Software developer | Technical writer',
      image: Emmanuel,
      words:"Victoria writes clean codes and logic, it's a delight walking with you always",
    },
    {
      name:'Oluwaseun O. OWONIFARI',
      title:'Genetics | Research | Writing',
      image: Oluwaseun,
      words:'The VO! Everyone needs you on their team. Overall best in intentionality and consistency',
    }
  ]
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
const TestimonialStyle = styled(motion.div)`
margin: 3rem 0;
h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h4{
    font-weight:500;
    text-align:center;
    color: ${({ mode }) => mode ? 'pink': '#FBFBFB'};
  }

  h3{
    font-size:1.5rem;
    font-weight:500;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
p{
  font-size:1.2rem;
  color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
}
.header{
  margin: 2rem 0;
}
  .testimonials-section{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:2rem;
  }
  .head{
    display:flex;
    gap:2rem;
    img{
      width:100px;
      height:100px;
      border-radius:50%;
    }
  }
 
  .words{
    font-weight: 500;
    color: #666666;
    color: ${({ mode }) => mode ? '##494848': '#e4e4e4'};
    margin: 1rem 2rem;
  }
  .title{
    p{
      color:gray;
    }
  }
  @media screen and (min-width:760px){
    .card-test{
      width:30%;
    }
  }
      
  @media screen and (max-width:680px){
    p{
      font-size:1rem;
    }
    h3{
      font-size:1.2rem;
    }
    .head{
      gap:1rem;
      img{
        width: 50px;
        height:50px;
      }
    }
    .testimonials-section{
      display:block;
    }
  }
`
export default Testimonial