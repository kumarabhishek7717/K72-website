import React, { Children } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stairs = (props) => {

   const currentPath =  useLocation().pathname
    
  const stairParentRef = useRef (null)
  const pageRef = useRef(null)


console.log(props.children);


  return (
    <div>
        
        <div ref = {stairParentRef}className='h-screen w-full  fixed z-10 top-0'>
       
      
     </div>
      <div ref={pageRef}>
         {props.children}
      </div>
    </div>
      
   
    
  )
}

export default Stairs
