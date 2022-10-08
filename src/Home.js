import React from 'react'




export default function home() {
  return (
    <div >
        <div className="z-0 relative">
        

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

        <div className="z-10 absolute  top-1/3 right-16 left-20 bottom-0">
            <h3 className="font-bold text-lg">Top Mix</h3>
            <button className="font-regular text-sm" type='submit'>See all</button>

            <div>
                <img src="" alt="" />
            </div>
        </div>

        <div className="z-20 absolute  top-48 right-32  bottom-30 ">
            <h3 className="font-bold text-lg inline-block">Recently Played</h3>
            <button type=' font-regular text-lg submit text-purple-500'>See all</button>
        </div>

        <div>

        </div>

        
    </div>
    </div>
  )
}
