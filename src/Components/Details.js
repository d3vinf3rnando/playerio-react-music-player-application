import React from 'react'
import Song1 from './Raataan-Lambiyan-Lyrics.jpeg'

function Details() {
  return (
    <div>
        <div className='px-5'>
            <img className=" object-cover w-140 h-80 rounded-lg 	mx-auto" src={Song1} alt=''/>
        </div>


        <div className='mr-[420px] pt-8 px-5'>
          <h3 className="font-bold">Raataan Lambiyan</h3>
          <h3 className='font-regular text-sm mr-11 text-gray-400'>Tanishk Bagchi</h3>
        </div>
        

    </div>
  )
}

export default Details