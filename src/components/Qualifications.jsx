import React, {useState} from 'react';
import styled from 'styled-components';


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
  return (
    <QualificationStyle id='qualifications' mode={mode}>
        <h2>Qualifications</h2>
        <h4>My Personal journey</h4>
        <div className='section'>
          <div className='sect first'>
            <h3>Experience</h3>
                <div>
                  <div className='qualify'>
                    <h4 className={openfront? 'border':''} onClick={OpenFrontHandler}>Cogenie</h4>
                    <ul className={openfront? '':'set'}>
                        <li><div className='right-chev'/> <span>contributed to the development of Cway World Wide using React and Styled Components</span></li>
                        <li><div className='right-chev'/> <span>Collaborated with colleagues and senior developers. I also got better in the understanding of git and github</span></li>
                    </ul>
                  </div>
                  <div className='qualify'>
                    <h4 className={opendata? 'border':''} onClick={OpenDataHandler}>Tribnova</h4>
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

const QualificationStyle = styled.div`
margin: 4rem 10rem;
    h2{
    font-size:2rem;
    font-weight:600;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .border{
    border:none;
    border-left: 3px solid #ed9ca9;
    height:fit-content;
    color:#ed9ca9;
    padding:0 .5rem;
  }
  .right-chev{
    background-color:#ed9ca9;
    width:10px;
    height:10px;
    border-radius:50%;
  }
  .set{
    display:none;
  }
  h4{
    font-weight:500;
    font-size:1rem;
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h2{
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h3{
    font-weight:600;
    font-size:1.5rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  p{
    font-size:1.2rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  li{
    font-size:1.2rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  
  .section{
    display:flex;
    justify-content:center;
    gap:2rem;
    margin:2rem 0;
  }
 
  .last{
    text-align:right;
    width: 40%;
    p{
      margin: 1rem 0;
    }
  }
  .first{
    border-right:3px solid #ed9ca9;
    padding-right:1rem;
  }
  .qualify{
    display:flex;
    gap:1rem;
    margin:1rem 0;
    h4{
      text-align:left;
    }
    ul{
      li{
        display:flex;
        gap:.5rem;
      }
    }
  }
  @media screen and (max-width:680px){
      margin:4rem 0;
      h3{
        font-size:1.2rem;
      }
      p, li{
        font-size:1rem;
      }
      .qualify{
        flex-direction:column;
      }
      .last{
        p{
          font-size:1rem;
        }
      }
      .first{
        border-right:2px solid #ed9ca9;
        width:50%;
      }
    }
`
export default Qualifications