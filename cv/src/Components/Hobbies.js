import React from 'react';
import { Typography } from '@material-ui/core';
import './Hobbies.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Hobbies(props){
    return (
      <div   >
       <Typography variant='h3'>My Hobbies </Typography>
       <div style={{marginTop: '30px'}}></div>

       <Carousel id="carousel">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      className="size"
      src={`${process.env.PUBLIC_URL}/Guitar.jfif`}
      
      alt="Guitar"
    />
    <Carousel.Caption>
      <h3>Playing Guitar</h3>
      <p>Music is the wine that fills the cup of silence</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img 
      className="d-block w-100"
      className="size"
      src={`${process.env.PUBLIC_URL}/BoardGame.jfif`}
      
      alt="Board Game"
    />
    <Carousel.Caption>
      <h3>Board Games</h3>
      <p>Improves strategy, logic and critical thinking </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="size"
      src={`${process.env.PUBLIC_URL}/Travel.jfif`}
      
      alt="Travelling"
    />
    <Carousel.Caption>
      <h3>Travelling</h3>
      <p>If we were meant to stay in one place, we’d have roots instead of feet</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
            )

}