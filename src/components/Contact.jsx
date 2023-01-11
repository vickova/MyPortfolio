import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactStyle id='contact'>
      <h2>Contact</h2>
      <h4>Get in touch</h4>
      <div className='form'>
        <form action="">
          <div className='form-section'>
            <div className='sect'>
              <input type="text" name='name' placeholder='Name'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Project'></textarea>
            </div>
            <div className='sect'>
              <input type="email" name='email'placeholder='Email Address'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
          </div>
          <div className='button'>
          <button>Submit</button>
          </div>
        </form>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled.div`
margin: 4rem;
h2{
    font-size:2rem;
    font-weight:600;
    text-align:center;
  }
  h4{
    font-weight:500;
    text-align:center;
  }

  h3{
    font-size:1.5rem;
    font-weight:400;
  }
  .sect{
    margin: 1rem;
  }
input, textarea{
  background-color: #fff;
  display:block;
  width:100%;
  margin: 1rem 0;
  height: 100px;
  padding:1rem;
  outline:none;
  &::placeholder{
    font-size: 1.2rem;
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
}

`
export default Contact