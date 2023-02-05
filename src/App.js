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
import Footer from './components/Footer';

const style = {
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col bg-gray-100 mt-10 shadow-xl border relative`
}
function App() {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <AppStyle>
      <GlobalStyle mode={mode}/>
      <Navbar mode={mode} setMode={setMode} menu={menu} setMenu={setMenu}/>
        <section onClick={()=> setMenu(false)}>
          <Hero mode={mode}/>
          <Skills mode={mode} />
          <Qualifications mode={mode} />
          <MyWorks mode={mode} />
          <Testimonial mode={mode} />
          <Contact mode={mode} />
        </section>
        <Footer mode={mode} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  color:rgb(51, 51, 15);

  section{
    padding:0 5rem;
    margin-top:8rem;
  }
  @media screen and (max-width:680px){
    section{
      padding:1rem;
    }
    }
`
export default App;
