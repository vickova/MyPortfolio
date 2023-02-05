import React, {useEffect} from 'react';
import Vshop from '../images/vshop.png';
import Movie from '../images/movie.png';
import Weather from '../images/weather.png';
import PlayDogo from '../images/playdogo.png';
import News from '../images/news.png';
import Analysis from '../images/analysis.png';
import Github from '../images/github.svg';
import styled from 'styled-components';
import OtherProjects from './OtherProjects';

import { motion } from 'framer-motion';
import { useScroll } from './userScroll';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjAnimation } from '../animation';
import WorkItem from './WorkItem';


const MyWorks = ({mode}) => {
    const works = [
        {
            image:Vshop,
            name:'VShop E-commerce',
            description:'An e-commerce website that was built to learn about redux. Vshop has functionalities like add to cart, delete from cart. It has sections like furniture section, jwelries section,etc. All of the products were hand coded as no Api was consumed',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'https://github.com/vickova/vshop_ecommerce',
            livesite:'https://vshop-ecommerce.vercel.app/',
            type:'Personal'

        },
        {
            image:Analysis,
            name:'Covid19 Analysis for Jaala',
            description: 'An analysis of the rate of covid 19 in different countries. With this project I was able to flex my knowledge on Matplotlib, Numpy and other data analysis libraries in Python. ',
            resouces: ['Python:', ' Numpy,', ' Pandas,', ' Matplotlib' ],
            github:'https://github.com/vickova',
            livesite:'https://perfect-movies.netlify.app/',
            type:'Client'
        },
        {
            image:Movie,
            name:'MovieHub',
            description: 'MovieHub is a movie website that was built using the TMDB Api. This project has deatures like the light mode and dark mode features, it also shows the most popular and the most trending movies in the world. You can also get to watch the trailer of these movies on Youtube through this website',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'https://github.com/vickova/Movie-perfected',
            livesite:'https://perfect-movies.netlify.app/',
            type:'Personal'
        },
        {
            image:Weather,
            name:'Weather App',
            description: 'For this weather app project, I consumed an Api called the weather Api and with this I was able to create a search section, a forecast section and every other section a weather app should have. This website also has the darkmode and lightmode features.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'https://github.com/vickova/Weather_Site',
            livesite:'https://weather-site-pied.vercel.app/',
            type:'Personal'
        },
        {
            image:PlayDogo,
            name:'PlayDogo',
            description: 'Playdogo is a kids learning website that was built to increase my knowledge of react. THis website helped me fles my knowledge on framer motion.',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'https://github.com/vickova',
            livesite:'https://vic-kidsplay.netlify.app/',
            type:'Personal'
        },
        {
            image:News,
            name:'News',
            description: 'The News Website is a website that displays the latest news, you can also search for news based on the keyword you type. AN Api was consumed for this project',
            resouces: ['Reactjs', 'Redux', 'Styled Components', 'Tailwind css', 'Vercel', ],
            github:'https://github.com/vickova/News',
            livesite:'https://newsbegins.vercel.app/',
            type:'Personal'
        }
    ];

  return (
    <WorkStyled id='myworks' mode={mode}>
        <h2>My Works</h2>
        <div>
            {
                works.map((items, i)=>{
                    return(
                        <WorkItem image={items.image} name={items.name} description={items.description} livesite={items.livesite} type={items.type} github={items.github} items={items} key={i}/>
                    )
                })
            }
            <OtherProjects mode={mode}/>
        </div>
    </WorkStyled>
  )
}

const WorkStyled = styled(motion.div)`
    margin:8rem 4rem;
    h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
    margin: 3rem 0 1rem 0;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .image-cover{
    background-size:cover;
  }
  h4{
    font-weight:500;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }

  h3{
    font-size:1.5rem;
    font-weight:400;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .first{
    font-weight:600;
  }
  p{
    margin:1rem 0;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
    .link{
        display:flex;
        justify-content:space-between;
        margin:1rem;
        .share{
            width:30px;
            height:30px;
            color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
        }
    }
    .works{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
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
    .lists{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        li{
            text-decoration:none;
            color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
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
      h2{
        margin:2rem;
      }
      .works{
        display:block;
        background-color:rgba(237,156,169, 0.7);
        margin:2rem 0;
        .image-cover{
            margin:0;
            background-size:contain;
            height: 150px;
        }
        .text{
            p{
                font-size:1rem;
            }
        }
      }
      .lists{
        gap:.5rem;
      }
    }
`
export default MyWorks