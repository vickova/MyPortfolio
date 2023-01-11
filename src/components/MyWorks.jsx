import React from 'react';
import Vshop from '../images/vshop.png';
import Movie from '../images/movie.png';
import Weather from '../images/weather.png';
import PlayDogo from '../images/playdogo.png';
import News from '../images/news.png';
import Analysis from '../images/analysis.png';
import styled from 'styled-components';
import OtherProjects from './OtherProjects';


const MyWorks = () => {
    const works = [
        {
            image:Vshop,
            name:'VShop E-commerce',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'/',
            livesite:'https://vshop-ecommerce.vercel.app/'
        },
        {
            image:Analysis,
            name:'Covid19 Analysis for Jaala',
            description: 'An analysis of the rate of covid 19 in different countries.  ',
            resouces: ['Python:', ' Numpy,', ' Pandas,', ' Matplotlib' ],
            github:'/',
            livesite:'https://perfect-movies.netlify.app/'
        },
        {
            image:Movie,
            name:'MovieHub',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'/',
            livesite:'https://perfect-movies.netlify.app/'
        },
        {
            image:Weather,
            name:'Weather App',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'/',
            livesite:'https://weather-site-pied.vercel.app/'
        },
        {
            image:PlayDogo,
            name:'PlayDogo',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'/',
            livesite:'https://vic-kidsplay.netlify.app/'
        },
        {
            image:News,
            name:'News',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'/',
            livesite:'https://newsbegins.vercel.app/'
        }
    ]
  return (
    <WorkStyled id='myworks'>
        <h2>My Works</h2>
        <div>
            {
                works.map((items, i)=>{
                    return(
                        <div key={i} className='works'>
                            <div className='image-cover' style={{background:`url(${items.image}`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                            </div>
                            <div className='text'>
                                <h3 className='first'>Personal Projects</h3>
                                <h3>{items.name}</h3>
                                <p>{items.description}</p>
                                <ul>
                                {
                                    items.resouces.map((lst, i)=>{
                                        return(
                                            <li key={i}>
                                                {lst}
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            <OtherProjects/>
        </div>
    </WorkStyled>
  )
}

const WorkStyled = styled.div`
    margin: 0 4rem;
    h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
    margin: 3rem 0;
  }
  h4{
    font-weight:500;
  }

  h3{
    font-size:1.5rem;
    font-weight:400;
  }
  .first{
    font-weight:600;
  }
  p{
    margin:1rem 0;
  }
    .works{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
        margin: 6rem 0;
        z-index:-99;
        .image-cover{
        padding:1rem;
        height: 400px;
        border: 3px solid rgba(237,156,169, 0.7);

        /* &:hover{
            width:50%;
        } */
        /* img{
            height:100%;
            background: rgba(234,163,127, 0.7);
        } */
    }
        .text{
        right:80px;
        top:0;
        padding:1rem;
        font-weight: 600;
        text-align:right;
        p{
            background-color:rgba(237,156,169, 0.7);
            color: #fbfbfe;
            padding:2rem 1rem;
            border-radius:10px;
            font-weight:500;
            font-size:1.2rem;
        }
    }

    }
    ul{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            li{
                text-decoration:none;
                color: #4a4444;
            }
        }
        @media screen and (min-width:760px){
            .works{
                .image-cover{
                    width:50%;
                }
                .text{
                    width:45%;
                }
            }
        }
    @media screen and (max-width:680px){
      margin:0;
      h3{
        font-size:1rem;
        font-weight:400;
    }
    .first{
        font-weight:600;
        font-size:1.5rem;
    }
      p{
        font-size:1rem;
      }
      .works{
        display:block;
        background-color:rgba(237,156,169, 0.7);
        .image-cover{
            margin:0;
        }
        .text{
            p{
                font-size:1rem;
            }
        }
      }
      ul{
        gap:.5rem;
      }
    }
`
export default MyWorks