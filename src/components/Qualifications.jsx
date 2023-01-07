import React, {useState} from 'react';
import styled from 'styled-components';

const Qualifications = () => {
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
    <QualificationStyle id='qualifications'>
        <h2>Qualifications</h2>
        <h4>My Personal journey</h4>
        <div className='section'>
          <div className='sect first'>
            <h3>Experience</h3>
                <div>
                  <div className='qualify'>
                    <h4 className={openfront? 'border':''} onClick={OpenFrontHandler}>Cogenie</h4>
                    <ul className={openfront? '':'set'}>
                        <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                        <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                        <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>
                    </ul>
                  </div>
                  <div className='qualify'>
                    <h4 className={opendata? 'border':''} onClick={OpenDataHandler}>Tribnova</h4>
                    <ul className={opendata? '':'set'}>
                        <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                        <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                        <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>
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
margin: 0 10rem;
    h2{
    font-size:2rem;
    font-weight:600;
  }
  .border{
    border:none;
    border-left: 3px solid #317773;
    height:fit-content;
    color:#317773;
    padding:0 0.5rem;
  }
  .set{
    display:none;
  }
  h4{
    font-weight:600;
    font-size:1.2rem;
  }
  h2, h4{
    text-align:center;
  }
  h3{
    font-weight:400;
  }
  p{
    font-size:1.2rem;
  }
  li{
    font-size:1.2rem;
  }
  .section{
    display:flex;
    justify-content:center;
    gap:2rem;
  }
 
  .last{
    text-align:right;
    width: 40%;
  }
  .qualify{
    display:flex;
    gap:1rem;
    margin:1rem 0;
  }
`
export default Qualifications