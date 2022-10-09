import React from 'react'
import Profile from '../src/images/profile.png'
import Menu from '../src/images/menu.png'
import Song1 from '../src/images/song1.png'




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

        <div className="z-20 absolute  top-32 right-10  bottom-30   flex space-x-32 ">
            <h3 className="font-bold text-lg inline-block">Recently Played</h3>
            <button className='text-purple-500 hover:text-purple-800' type='submit '>See all</button>

            
        </div>
        <div className=" inline-block z-20 absolute  top-48 right-72  bottom-30 ">
              <div className='inline-block'>
                <img className='inline-block' src={Song1} />
                <p>text</p>
              </div>
        </div>

        <div className='flex justify-end'>
          <img className=' absolute top-0 p-5' src={Profile} />
        </div>

        <div className='flex justify-start'>
          <a href="https://google.com" target="" rel="">
            <img className=' absolute top-0 p-5' src={Menu} />
          </a>
        </div>
        <div className='flex justify-start'>
          <a href="https://google.com" target="" rel="">
            <img className=' absolute top-0 p-5' src={Menu} />
          </a>
        </div>
        

        <div>

        </div>

        
    </div>
    </div>
  )
}
