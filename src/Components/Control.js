import React from 'react'

import { AiFillStepBackward } from "react-icons/ai";
import { AiFillPauseCircle} from "react-icons/ai";
import { AiFillStepForward} from "react-icons/ai";

function Control() {
  return (
    <div>
        <button className='text-purple-300 text-3xl'><AiFillStepBackward/></button>
        <button className='text-purple-600 text-3xl'><AiFillPauseCircle/></button>
        <button className='text-purple-300 text-3xl'><AiFillStepForward/></button>
        
    </div>
  )
}

export default Control