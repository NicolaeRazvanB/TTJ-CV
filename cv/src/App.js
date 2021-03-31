import './App.css';
import Hero from "./Components/Hero"
import Skills from './Components/Skills';
import Particles from 'react-particles-js';
import Hobbies from './Components/Hobbies';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <div className="App">
    <Particles className='particles'
          params={particlesOptions}
          
         
    />
    <Hero />
    <div style={{marginTop: '30px'}}></div>
    <Skills />
    <Hobbies/>
    </div>
  );
}

export default App;
