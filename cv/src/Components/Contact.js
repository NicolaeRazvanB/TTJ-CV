import React from 'react';
import './Contact.css';
import { Button, Typography } from '@material-ui/core';

export default function Contact(props){
    return (
      <div >
      <div style={{marginTop: '40px'}}></div>
      <Typography variant='h4'className='Contact' >
          Github   <a href="https://github.com/NicolaeRazvanB" target='_blank'>
        <img src={`${process.env.PUBLIC_URL}/GitHub.png`} width="50" height="50"/></a>
        </Typography><br></br>
        <Typography variant='h4'className='Contact' >
        Linkedn   <a href="https://www.linkedin.com/in/nicolae-burca-41b735203/" target='_blank'>
        <img src={`${process.env.PUBLIC_URL}/Linkedin.png`} width="50" height="50"/></a>
        </Typography><br></br>
        <Typography variant='h4'className='Contact' >
          Newest project:<a href="https://smart-brain-bnr.herokuapp.com/" target='_blank'>
          <img src={`${process.env.PUBLIC_URL}/Brain.jpg`} width="50" height="50"/></a>
        </Typography><br></br>
       </div>
            )

}