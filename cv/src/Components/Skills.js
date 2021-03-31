import React from 'react';
import { Typography } from '@material-ui/core';
import './Skills.css';


export default function Skills(props){
    return (
      <div   >
      <Typography variant='h3'>Skills </Typography>
      <div style={{marginTop: '30px'}}></div>
        <section className="bar-graph bar-graph-horizontal bar-graph-one">
    <div className="bar-one">
        <span ><Typography variant='h6' align="left" className="language">C++ </Typography></span>
        <div className="bar" data-percentage="80%"></div>
    </div>
    <div className="bar-two">
        <span ><Typography variant='h6' align="left" className="language" >C# </Typography></span>
        <div className="bar" data-percentage="40%"></div>
    </div>
    <div className="bar-three">
        <span ><Typography variant='h6' align="left" className="language" >JS </Typography></span>
        <div className="bar" data-percentage="60%"></div>
    </div>
    <div className="bar-four">
        <span ><Typography variant='h6' align="left" className="language" >React  </Typography></span>
        <div className="bar" data-percentage="30%"></div>
    </div> 
    </section>
    <img src={`${process.env.PUBLIC_URL}/picture1.png`} width="450" height="300"  ></img>
          <div style={{marginTop: '30px'}}></div>
    <Typography variant='h5' align="center" > “Tell me and I forget, teach me and I may remember, involve me and I learn.”</Typography>
       <div style={{marginTop: '30px'}}></div>
       </div>
            )

}