import React from 'react'




export default function home() {
  return (
    <div>
        <div className="z-0 relative">
        <div className='flex justify-end p-10'>
          <button className='hover:text-purple-500 text-lg' type="button">Skip</button>
        </div>

        <div className='flex justify-start'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>
        <div>
          remove later
        </div>

        

          <div className='flex justify-center z-0'>
            <div className=" mr-14 bg-purple-200 w-64 h-64 rounded-full blur-3xl z-0 "></div>
          </div>
 

        <div className='flex justify-end'>
          <div className="bg-purple-200 w-64 h-64 rounded-full blur-3xl "></div>
        </div>
        {/* updated comments */}

        <div>
            <h3 className="font-bold text-lg">Top Mix</h3>
            <button className="font-regular text-sm" type='submit'>See all</button>

            <div>
                <img src="" alt="" />
            </div>
        </div>

        <div>
            <h3 className="font-bold text-lg">Recently Played</h3>
            <button type=' font-regular text-lg submit'>See all</button>
        </div>

        <div>

        </div>

        
    </div>
    </div>
  )
}
