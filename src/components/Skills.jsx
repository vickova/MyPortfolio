import React,{useState} from 'react';
import styled from 'styled-components';
import {FaHtml5, FaCss3, FaReact, FaFileExcel, FaExchangeAlt, FaPython, FaChevronUp, FaChevronDown} from 'react-icons/fa';
import {AiFillFileExcel} from 'react-icons/ai';


const Skills = () => {
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
    <SkillStyle openfront={openfront} opendata={opendata} id='skills'>
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
                  <li>Html <FaHtml5/></li>
                  <li>Css <FaCss3/></li>
                  <li>Javascript</li>
                  <li>React js <FaReact/></li>
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
                  <li>Python <FaPython/></li>
                  <li>Excel <AiFillFileExcel/></li>
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
  }
  h4{
    font-weight:500;
  }
  h2, h4{
    text-align:center;
  }
  h3{
    font-weight:400;
  }
  .hide{
    display:none;
  }
  p{
    font-size:1rem;
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