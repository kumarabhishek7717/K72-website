import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className=' text-white h-screen py-40 w-full absolute bg-amber-900'>
      <div className=''>
        <div className='link border-t-1 border-white'>
            <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>
              Projects  
            </h1>
          <div className='absolute flex '>
             <div className='flex overflow-auto items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Pour Tout voir </h2>
              <img className='h-36 rounded-full shrink-0 w-96 object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
               <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Pour Tout voir </h2>
              <img className='h-36 rounded-full shrink-0 w-96 object-cover ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />

            </div>
            </div>
           </div>
        </div>
      </div>
    
  )
}

export default FullScreenNav
