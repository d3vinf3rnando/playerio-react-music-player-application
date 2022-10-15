import React from 'react'
import Details from './Details'
import Control from './Control'



function Player() {
  return (
    <div className="">
        <div>
            <h4 className="text-purple-500">Playing Now</h4>
        </div>
        <br></br>

        <Details/>
       

      

        <audio controls className='mx-auto mt-20  '>
            <source src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" type="audio/mpeg" />
        </audio>

        <Control/>
        

        <div>
            <p>Next:{" "} <span>Next song</span></p>
        </div>
    </div>
  )
}

export default Player