import React from 'react'

import Logo from './logo.png'

import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

  import { Link } from "react-router-dom";


  import Home from "./Home";

export default function Login() {
  return (

   



    <div>

    
  

      <div className="z-0 relative">
        <div className='flex justify-end p-10'>
          <button className='hover:text-purple-500 text-lg' type="button">Skip</button>
        </div>

        <div className='flex justify-start'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>

        

          <div className='flex justify-center z-0'>
            <div className=" mr-14 bg-purple-200 w-64 h-64 rounded-full blur-3xl z-0 "></div>
          </div>
 

        <div className='flex justify-end'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>
        {/* updated comments */}

        
    </div>

      <div className=" z-10 my-5  ">
        <img className=' mx-auto max-w-full h-auto absolute  top-1/3 right-16 left-20 bottom-0  ' src={Logo} />
      </div>

      <div className="z-20">
        <h1 className="float-left	text-2xl p-10 absolute  bottom-24  font-bold">Playio.</h1>
       
        <p className="flex justify-start mt-20 p-10	absolute  bottom-2 text-lg text-gray-400 text-left">Playio supports artists with tools to create, <br></br>
          release, and measure music across a global<br></br> stage. </p>
      </div>
    </div>
  )
}
