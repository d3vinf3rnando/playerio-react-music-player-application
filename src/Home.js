import React from 'react'
import Profile from '../src/images/profile.png'
import Menu from '../src/images/menu.png'
import Song1 from '../src/images/song1.png'
import Song2 from '../src/images/song2.png'
import Song3 from '../src/images/song3.png'
import Song4 from '../src/images/song4.png'
import Song5 from '../src/images/song5.png'
import Song6 from '../src/images/song6.png'
import Song7 from '../src/images/song7.png'
import Cover from '../src/images/cover1.png'
import Song11 from '../src/images/song11.png'
import Song22 from '../src/images/song22.png'
import Song33 from '../src/images/song33.png'
import Song44 from '../src/images/song44.png'




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
        
        <div className=" z-20 absolute top-20 right-1/3">
          <img className='' src={Cover} />
          <p className="absolute top-56 left-8 text-white font-bold">Luis Fonsi</p>
          <br></br>
          <p className='absolute top-60 left-8 text-white'>1,322,799,000 Streams</p>
          <button className='absolute top-60 right-24 text-white bg-regal-blue rounded-3xl w-24 backdrop-blur-sm text-lg' type='submit '>Follow+</button>

          
          
        </div>

        

        <div className="z-20 absolute  top-32 right-10  bottom-30   flex space-x-32 ">
            <h3 className="font-bold text-lg inline-block">Recently Played</h3>
            <button className='text-purple-500 hover:text-purple-800' type='submit '>See all</button>

            
        </div>
        <div className="  z-20 absolute  top-48 right-48  bottom-30 ">
              <div className='flex space-x-5'>
                <img className='inline-block' src={Song1} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>

              <div className='flex space-x-5'>
                <img className='inline-block' src={Song2} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>
              <div className='flex space-x-5'>
                <img className='inline-block' src={Song3} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>

              <div className='flex space-x-5'>
                <img className='inline-block' src={Song4} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>
              <div className='flex space-x-5'>
                <img className='inline-block' src={Song5} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>

              <div className='flex space-x-5'>
                <img className='inline-block' src={Song6} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>
              <div className='flex space-x-5'>
                <img className='inline-block' src={Song7} />
                <div className='inline-block '>
                  <p className='  font-bold  flex space-x-5'>Never</p>
                  <p className='text-purple-500'>Heart . VEVO</p>
                </div>

                <div className='absolute left-72'>
                <svg className="h-8 w-8 text-purple-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>

              <br></br>

              
        </div>

        <div className='flex justify-end'>
          <img className=' absolute top-0 p-5' src={Profile} />
        </div>

        <div className='flex justify-start'>
          <a href="https://google.com" target="" rel="">
            <img className=' absolute top-0 p-5' src={Menu} />
          </a>
        </div>
        
        

        <div>

        </div>

        <div className="z-40 absolute  top-2/4 bottom-2 right-16 left-20 bottom-0  ">
            <h3 className="font-bold text-lg inline-block">Top Mix</h3>
            <button className="font-regular text-sm" type='submit'>See all</button>

            
        </div>

        <div>
          <img className='absolute bottom-32 left-44' src={Song11} />

        </div>

        <div>
          <img className='absolute bottom-32 left-1/4' src={Song22} />

        </div>

        <div>
          <img className='absolute bottom-32 right-1/2' src={Song33} />

        </div>

        <div>
          <img className='absolute bottom-32 right-1/3' src={Song44} />

        </div>

       




        
    </div>
    </div>
  )
}
