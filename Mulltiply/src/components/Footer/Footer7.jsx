import React from 'react'
import img1 from '../assets/f22.jpg'
import img2 from '../assets/f23.jpg'
import img4 from '../assets/f21.jpg'
import img5 from '../assets/f24.jpg'

function Footer7() {
  return (
    <div className='bg-black h-screen grid grid-rows-4 rounded-md'>
      <div className='bg-red-700 rounded-md mb-1'>
        <div className='h-full'>
            <img className='object-cover rounded-md h-full w-full' src={img1} alt="" />
        </div>
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
        <div className='h-full'>
            <img className='object-cover rounded-md h-full w-full' src={img2} alt="" />
        </div>
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
        <div className='h-full'>
            <img className='object-cover rounded-md h-full w-full' src={img4} alt="" />
        </div>
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
        <div className='h-full'>
            <img className='object-cover rounded-md h-full w-full' src={img5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer7
