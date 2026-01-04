import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
     <Link className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-14 pt-5 uppercase'>Project</Link>
      <Link  className='text-[6.5vw] leading-[6vw]  border-5 border-white rounded-full px-14 pt-5 uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
