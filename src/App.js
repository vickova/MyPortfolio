import React,   {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import MyWorks from './components/MyWorks';
import OtherProjects from './components/OtherProjects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom'


const style = {
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col bg-gray-100 mt-10 shadow-xl border relative`
}
function App() {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <AppStyle>
      <GlobalStyle/>
      <Navbar mode={mode} setMode={setMode} menu={menu} setMenu={setMenu}/>
        <section>
          <Hero/>
          <Skills/>
          <Qualifications/>
          <MyWorks/>
          <OtherProjects/>
          {/* <Testimonial/> */}
          <Contact/>
        </section>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  padding:0 5rem;
  color:rgb(51, 51, 15);

  section{
    margin-top:8rem;
  }
  @media screen and (max-width:680px){
      padding:1rem;
    }
`
export default App;
