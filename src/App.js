import React,   {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import GlobalStyle from './components/GlobalStyle';
import MyWorks from './components/MyWorks';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppStyle } from './Style';

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

export default App;
