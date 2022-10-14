import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Player from './Components/Player.js'
import { useState } from 'react';



function App() {
  const [songs] =useState([
    {
      title:"Never",
      artist:"ed",
      img_src:"/Users/devinfernando/playio/src/images/song1.png",
      src:"https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
    }
  ])

  return (
    <div className="App">
      <Player/>
    </div>
  );
}

export default App;
 