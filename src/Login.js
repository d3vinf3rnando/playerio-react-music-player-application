import React from 'react'

import Logo from './logo.png'

export default function Login() {
  return (
    <div>
        <div className='flex justify-end p-10'>
          <button className='hover:text-purple-500 text-lg' type="button">Skip</button>
        </div>

        <div className='flex justify-start'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>

        <div className=''>

          <div className='flex justify-center z-0'>
            <div className=" mr-14 bg-purple-200 w-64 h-64 rounded-full blur-3xl z-0 "></div>
          </div>

          <div className="mx-auto">
            <img className='z-20  mx-auto max-w-full h-auto ' src={Logo} />
          </div>

        </div>

        <div className='flex justify-end'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>

        
    </div>
  )
}
