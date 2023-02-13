import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBurger = styled.button`
    display: none;
    flex-direction: column; 
    justify-content: space-around; 
    width: 1.8rem; 
    height: 1.8rem;
    background: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 0; 
    z-index: 10; 
    &:focus { outline: none; } 
    div { 
        width: 2rem; 
        height: 0.25rem;
        background: #121212; 
        border-radius: 10px; 
        transition: all 0.3s linear; 
        position: relative; 
        transform-origin: 1px; 
        :first-child { transform: ${({ menu }) => menu ? 'rotate(40deg)' : 'rotate(0)'}; } 
        :nth-child(2) { opacity: ${({ menu }) => menu ? '0' : '1'}; 
        transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(0)'}; } 
        :nth-child(3) { transform: ${({ menu }) => menu ? 'rotate(-40deg)' : 'rotate(0)'}; } }
        @media screen and (max-width:680px){
          width:1rem;
          div{
            width:1.5rem;
            height:0.2rem;
            :first-child { transform: ${({ menu }) => menu ? 'rotate(55deg)' : 'rotate(0)'}; } 
            :nth-child(2) { opacity: ${({ menu }) => menu ? '0' : '1'}; 
            transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(0)'}; } 
            :nth-child(3) { transform: ${({ menu }) => menu ? 'rotate(-55deg)' : 'rotate(0)'}; }
          }
        }
        @media screen and (max-width:680px){
          display:flex;
        }
`;
export const ContactStyle = styled(motion.div)`
margin: 4rem;
h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h4{
    font-weight:500;
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }

  h3{
    font-size:1.5rem;
    font-weight:400;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .sect{
    margin: 1rem;
  }
input, textarea{
  background-color: #efeded;
  box-shadow: 1px 1px 1px 1px gray;
  border-radius:10px;
  display:block;
  width:100%;
  margin: 1rem 0;
  height: 100px;
  padding:1rem;
  outline:none;
  font-size: 1.5rem;
  &::placeholder{
    font-size: 1.5rem;
    font-weight:500;
    color:gray;
  }
}
textarea{
  height:50vh;
}
.form{
  display:flex;
  justify-content:center;
}
form{
  width:100%;
}
.form-section{
  display:flex;
  justify-content:center;
  gap:1rem;
}
.button{
  display:flex;
  justify-content:center;
}
button{
  background-color: #ed9ca9;
    padding:1rem;
    font-size:1.2rem;
    font-weight:500;
    color:rgb(255, 255, 255);
    margin:2rem 0;
    border-radius:5px 0 5px 0;
    &:hover{
      box-shadow: 1px 1px 1px 1px gray;
      cursor:pointer;
    }
}
@media screen and (min-width:760px){
    .sect{
      width: 40%;
    }
}
@media screen and (max-width:680px){
  margin: 4rem 0;
  .form-section{
    flex-direction:column;
  }
  input{
    height: 80px;
  }
  textarea{
    height: 40vh;
  }
  input, textarea{
  font-size: 1rem;
  &::placeholder{
    font-size: 1rem;

  }
}
}

`;
export const FooterStyle = styled.div`
    background-color: #ed9ca9;
    background-color: ${({ mode }) => mode ?'#ed9ca9': '#5f2b35'};
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:2rem;
    margin-top:5rem;
    color:#fff;
    p{
        font-size:1rem;
    }
    h2, h3, p, li{
        color:#fff;
    }

.hero-icons{
    color:#fff;
    width:30px;
    height:30px;
  }
    h2{
        font-size: 2rem;
        font-weight: 600;
    }
    h3{
        font-size:1.2rem;
    }

    img{
        color:red;
        width:30px;
        height:30px;
    }
    ul{
        display:flex;
        gap:2rem;
        li{
            font-size:1.2rem;
            color: #ecebeb;
        }
    }
    @media screen and (min-width: 760px){
        height: 50vh;
    }
    @media screen and (max-width: 680px){
        display:block;
        h3{
            font-size:1rem;
        }
        p{
            font-size:.8rem;
        }
        .hero-icons{
            width:25px;
            height:25px;
        }
        ul{
            margin:1rem 0;
            li{
                font-size:1rem;
            }
        }
    }
`;
export const HeroStyle = styled(motion.div)`
margin: 0 8rem;
  display:flex;
  gap:2rem;
  .heros{
    display:flex;
    justify-content:center;
    gap:2rem;
    margin: 0 0;
  }
  .hero-icons{
    color:#ed9ca9;
    width:25px;
    height:25px;
  }
  .herotext{
    width:50%;
    
  }
  .images{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    height:100%;
    gap:4rem;
    position:fixed;
    left:100px;
    img{
      stroke-width:10;
    }
  }
  button{
    background-color: #ed9ca9;
    padding:1rem;
    font-size:1.2rem;
    font-weight:500;
    color:rgb(255, 255, 255);
    margin:2rem 0;
    border-radius:30px 0 30px 0;
    &:hover{
      box-shadow: 1px 1px 1px 1px gray;
      cursor:pointer;
      font-size:1.3rem;
    }
    a{
    display:flex;
    align-items:center;
    gap:1rem;
    }
  }
  h2{
    font-size:4rem;
    line-height:4rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h3{
    font-size:2rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  p{
    font-size:1.5rem;
    margin:1rem 0;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .profile{
    width:300px;
    height:300px;
    background-color: #ed9ca9;
    border-radius:50%;
    position:relative;
    img{
    position:absolute;
    bottom:-20px;
    border-radius:50%;
    border:2px solid #ed9ca9;
    border-style:dashed;
    background-blend-mode:difference;
    }
  }
  @media screen and (max-width:680px){
      display:block;
      margin:0;
      p{
        font-size:1.2rem;
      }
      button{
        font-size:1.2rem;
        padding:.8rem 1rem;
      }
      .profile{
        margin-left:50px;
        width:250px;
        height:250px;
      }
      .heros{
        margin:0;
        display:flex;
        flex-direction:column-reverse;
        padding:0;
      }
      .herotext{
        width:100%;
        h3{
          background-color:#ed9ca9;
        }
      }
      .images{
        position:absolute;
        left:25px;
        justify-content:center;
        gap:2rem;
        height: 40vh;
        img{
          width:25px;
          height:25px;
        }
      }
    }
`;
export const WorkStyled = styled(motion.div)`
    overflow:hidden;
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
`;

export const NavStyle = styled.div`
  position:fixed;
  display:flex;
  justify-content:space-between;
  top:0;
  width:100%;
  right:0;
  padding:2rem 5rem;
  background-color: ${({ $mode }) => $mode ? '#FBFBFB' : '#884a55'};
  z-index:99;
  h2{
    font-size:2rem;
    font-weight:600;
    color: ${({ $mode }) => $mode ? '#000': '#FBFBFB'};
    span{
    }
  }
  ul{
    display:flex;
    justify-content:space-between;
    transition: all 2s linear;
    transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(-100px)'};
    li{
      margin:0 1rem;
      font-size:1.2rem;
      font-weight:600;
      color: #494848;
      color: ${({ $mode }) => $mode ?'##494848': '#FBFBFB' };
      transition:.3s;
      span{
        font-weight:600;
      }
    }
    li:hover{
      color: #ed9ca9;
    }
  }
  @media screen and (max-width:680px){
    padding:1rem;
      ul{
  display:${({menu})=>menu?'block':'none'};
  position:fixed;
  background-color:#fff;
  width:50%;
  height:fit-content;
  top:0;
  left:0;
  padding:1rem 0;
  z-index:2;
  transition: all 2s linear;
    transform: ${({ menu }) => menu ? 'translateX(0)' : 'translateX(-100px)'};
    li{
      padding: 1rem 0;
      color: gray;
      &:hover{
        background-color:#ed9ca9;
        color:#FBFBFB;
      }
    }
}
.mode{
  margin-left: 20px;
}
    }
`;
export const ProjectsStyle = styled(motion.div)`
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
    background-color: ${({ mode }) => mode ?'#fbfbfb': '#884a55'};
    box-shadow:1px 1px 2px 1px ${({ mode }) => mode ?'gray': '#38151b'};
    border-radius:10px;
    &:hover{
      background: linear-gradient(rgba(56, 21, 27, 0.2), transparent)
    }
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
`;
export const QualificationStyle = styled(motion.div)`
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
    width: 35%;
    font-size: 1.2rem;
    font-weight:600;
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
    color: ${({ mode }) => mode ? 'pink': '#FBFBFB'};
    &:hover{
      color:#ed9ca9;
    }
    span{
      display:block;
      font-size:1rem;
    }
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
      .border{
        width: 90%;
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
      .section{
        display:block;
      }
      .first{
        border:none;
        width:100%;
      }
      .last{
        width:100%;
        text-align:left;
      }
    }
`;
export const SkillStyle = styled(motion.div)`
  margin: 10rem 4rem;
  h2{
    font-size:2rem;
    font-weight:600;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h4{
    font-weight:500;
    color: ${({ mode }) => mode ? 'pink': '#FBFBFB'};
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
`;
export const TestimonialStyle = styled(motion.div)`
margin: 3rem 0;
h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h4{
    font-weight:500;
    text-align:center;
    color: ${({ mode }) => mode ? 'pink': '#FBFBFB'};
  }

  h3{
    font-size:1.5rem;
    font-weight:500;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
p{
  font-size:1.2rem;
  color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
}
.header{
  margin: 2rem 0;
}
  .testimonials-section{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:2rem;
  }
  .head{
    display:flex;
    gap:2rem;
    img{
      width:100px;
      height:100px;
      border-radius:50%;
    }
  }
 
  .words{
    font-weight: 500;
    color: #666666;
    color: ${({ mode }) => mode ? '##494848': '#e4e4e4'};
    margin: 1rem 2rem;
  }
  .title{
    p{
      color:gray;
    }
  }
  @media screen and (min-width:760px){
    .card-test{
      width:30%;
    }
  }
      
  @media screen and (max-width:680px){
    p{
      font-size:1rem;
    }
    h3{
      font-size:1.2rem;
    }
    .head{
      gap:1rem;
      img{
        width: 50px;
        height:50px;
      }
    }
    .testimonials-section{
      display:block;
    }
  }
`;
export const AppStyle = styled.div`
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