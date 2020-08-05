import React from 'react';
import './App.css';
import picture from './Image folder-amico (1).png'

function App() {
  return (
    <div className="App">
      <h1>Lion Cloud Storage</h1>
      <p>Test our service for 2 months free trial and <br/>100GB of storage
      after that check some of <br/> our offers to see which one 
      fits you</p>
      <button>Get Started</button>
      <img src={picture} alt="img"/>

<a href="https://stories.freepik.com/work">Illustration by Stories by Freepik</a>
    </div>
  );
}

export default App;
