import React from 'react';
import { FaRegShareSquare,FaGitAlt, FaRegFolder } from 'react-icons/fa';
import styled from 'styled-components';


const OtherProjects = ({mode}) => {
  const Projects = [
    {
      name:'Decagon replicate',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://tony-vic-template.netlify.app',
    },
    {
      name:'Sunny Side',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://sunnyside-v.netlify.app',
    },
    {
      name:'Techies Award',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://techie-awards.netlify.app',
    },
    {
      name:'Loop Studio',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://loopstudios-v.netlify.app/',
    },
    {
      name:'Test Dashboard',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://vicky-react-test1.netlify.app',
    },
    {
      name:'Top Intern',
      description: 'A website that was built using react to improve my react skills. It is an ineresting single page website',
      resouces: ['Reactjs',  'Styled Components' ],
      github:'https://github.com/vickova/',
      livesite:'https://topintern-first.netlify.app/',
    },
  ]
  return (
    <ProjectsStyle mode={mode}>
      <h2>Other Projects</h2>
      <div className='projects'>
        {
          Projects.map((item, i)=>{
            return <div className='single-project' key={i}>
              <div className='icons'>
                <a href={item.livesite} target='_blank'>
                <FaRegShareSquare className='view'/>
                </a>
                <a href={item.github} target='_blank'>
                <FaRegFolder className='view'/>
                </a>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ul>
                {
                  item.resouces.map((lst, i)=>{
                      return(
                          <li key={i}>
                              {lst}
                          </li>
                      )
                  })
              }
            </ul>
            </div>
          })
        }
      </div>
    </ProjectsStyle>
  )
}

const ProjectsStyle = styled.div`
margin: 4rem 1rem;
color: rgb(35, 36, 41);
  .projects{
    display:flex;
    justify-content:space-between;
    gap:2rem 0;
    flex-wrap:wrap;
  }
  p{
    font-size:1.2rem;
    font-size:500;
    margin:2rem 0;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h3{
    color: rgb(237,156,169);
    font-weight:600;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  ul{
    display:flex;
    gap:1rem;
    li{
        text-decoration:none;
        color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
    }
}
  .single-project{
    padding:1rem;
    background-color: ${({ mode }) => mode ?'#fff': '#884a55'};
    box-shadow: ${({ mode }) => mode ?'0 1px 2px 0 gray': '2px 1px 2px 2px #884a55'};
    border-radius:10px;
  }
  .icons{
    display:flex;
    justify-content:space-between;
    margin:2rem 0;
    
    .view{
      width: 30px;
      height:30px;
      color: ${({ mode }) => mode ?'#ed9ca9' :'#FBFBFB'};
    }
  }
  @media screen and (min-width:760px){
    .single-project{
    width: 30%;
  }
}
`
export default OtherProjects