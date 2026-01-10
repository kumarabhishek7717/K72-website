import React, { useRef } from 'react'

const Navbar = () => {

    const navGreenRrf = useRef (null)




  return (
    <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
     
<div onMouseEnter={()=>{
    navGreenRrf.current.style.height ='100%'
}}

onMouseLeave={()=>{
    navGreenRrf.current.style.height = '0%'
}}

className='h-16 bg-black relative w-[16vw]'>
    
     <div ref={navGreenRrf} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full '></div>
     <div className=' relative '></div> 


</div>

    </div>
  )
}

export default Navbar
