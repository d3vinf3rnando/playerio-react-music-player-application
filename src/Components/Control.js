import React from 'react'

import { AiFillStepBackward } from "react-icons/ai";
import { AiFillPauseCircle} from "react-icons/ai";
import { AiFillStepForward} from "react-icons/ai";

function Control() {
  return (
    <div>
        <button><AiFillStepBackward/></button>
        <button><AiFillPauseCircle/></button>
        <button><AiFillStepForward/></button>
        
    </div>
  )
}

export default Control