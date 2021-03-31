import React from 'react';
import { Typography } from '@material-ui/core';
import './Skills.css';


export default function Skills(props){
    return (
      <div   >
      <Typography variant='h3'>Skills </Typography>
      <div style={{marginTop: '30px'}}></div>
        <section class="bar-graph bar-graph-horizontal bar-graph-one">
    <div class="bar-one">
        <span class="language"><Typography variant='p' align="left" >C++ </Typography></span>
        <div class="bar" data-percentage="80%"></div>
    </div>
    <div class="bar-two">
        <span class="language"><Typography variant='p' align="left" >C# </Typography></span>
        <div class="bar" data-percentage="40%"></div>
    </div>
    <div class="bar-three">
        <span class="language"><Typography variant='p' align="left" >JS </Typography></span>
        <div class="bar" data-percentage="60%"></div>
    </div>
    <div class="bar-four">
        <span class="language"><Typography variant='p' align="left" >React </Typography></span>
        <div class="bar" data-percentage="30%"></div>
    </div> 
    </section>
    <img src={`${process.env.PUBLIC_URL}/picture1.png`} width="450" height="300"  ></img>
          <div style={{marginTop: '30px'}}></div>
    <Typography variant='h5' align="center" > “Tell me and I forget, teach me and I may remember, involve me and I learn.”</Typography>
       <div style={{marginTop: '30px'}}></div>
       </div>
            )

}