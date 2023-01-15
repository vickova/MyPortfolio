import React,{useState} from 'react';
import styled from 'styled-components';
import {FaCss3, FaReact, FaPython, FaChevronDown} from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
import {AiFillFileExcel} from 'react-icons/ai';


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
  return (
    <SkillStyle openfront={openfront} opendata={opendata} id='skills' mode={mode}>
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

const SkillStyle = styled.div`
  margin: 6rem 4rem;
  h2{
    font-size:2rem;
    font-weight:600;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h4{
    font-weight:500;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h2, h4{
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h3{
    font-weight:400;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .hide{
    display:none;
  }
  p{
    font-size:1rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
.skill-icon{
  color: #ed9ca9;
}
  .skill-flex{
    margin: 2rem 0;
    display:flex;
    justify-content:center;
    gap:2rem;
    transition:all .5s ease-in-out;
    h3{
      font-size:2rem;
    }
    li{
      font-size: 1.2rem;
      border-bottom: 5px solid #ed9ca9;
      padding: 1rem 0;
      display:flex;
      justify-content:space-between;
      color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
      img{
        width:30px;
      }
    }
  }
  .skillset{
    display:flex;
    align-items:center;
    gap:2rem;
    transition:all 7s ease-in-out;
    p{
      color: gray;
    }
    .chev{
      width:30px;
      height:30px;
      transition:all .5s ease-in-out;
    }
    .first{
      transform: ${({ openfront }) => openfront ? 'rotate(180deg)' : 'rotate(0)'};
    }
    .last{
      transform: ${({ opendata }) => opendata ? 'rotate(180deg)' : 'rotate(0)'};
    }
  }
  @media screen and (max-width:680px){
    margin:4rem 0;
      .skill-flex{
        h3{
          font-size:1.2rem;
        }
      }
      .skillset{
        gap:.5rem;
        .chev{
          width:20px;
          height:20px;
        }
        p{
          font-size:1rem;
        }
      }
      p, li{
        font-size:1rem;
      }
      .qualify{
        flex-direction:column;
      }
    }
`
export default Skills