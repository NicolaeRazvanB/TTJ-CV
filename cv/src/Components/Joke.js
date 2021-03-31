import React , {useState, useEffect} from 'react';
import './Joke.css';
import { Button, Typography } from '@material-ui/core';

export default function Joke(){

    const [joke, setJoke] = useState({});
    const generator =() =>{
                        fetch('https://official-joke-api.appspot.com/jokes/random')
                        .then((response)=>response.json())
                        .then((data)=>setJoke(data))
                        }
    useEffect(()=>{
        generator();
    }, []);
    

    return (
      <div >
      <Typography variant='h3' align='center' >Who doesn't like a good joke? </Typography>
      <div className='BigBox'>
          <div className='JokeBox'>
              <div className='Joke'>{joke.setup}</div>
              <div className='Joke'>{joke.punchline}</div>
              <Typography variant='h4' > <button onClick={generator} id='JokeButton'>Get a Bad Joke</button></Typography>
          </div>
      </div>
       </div>
            )

}

