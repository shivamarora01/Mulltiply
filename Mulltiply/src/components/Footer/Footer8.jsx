import React from 'react'
import img1 from '../assets/f22.jpg'
import img2 from '../assets/f23.jpg'
import img4 from '../assets/f21.jpg'
import img5 from '../assets/f24.jpg'

function Footer8() {
  return (
    <div className='bg-black h-screen grid grid-rows-4 rounded-md'>
      <div className=' relative group bg-red-700 rounded-md mb-1'>
      <img
            src={img1}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 overflow-hidden"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="mx-20 absolute bottom-10 text-center">
            <h1 className="text-4xl font-semibold font-serif inline-flex items-center text-white">Men Shoes</h1>
          </div>
          <div className="absolute bottom-4 text-center">
            <button className="mt-2 mx-24 inline-flex font-serif cursor-pointer items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now &rarr;
            </button>
          </div>
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
            <img className='object-cover rounded-md h-full w-full' src={img2} alt="" />
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
            <img className='object-cover rounded-md h-full w-full' src={img4} alt="" />
      </div>
      <div className='bg-red-700 rounded-md mb-1'>
            <img className='object-cover rounded-md h-full w-full' src={img5} alt="" />
      </div>
    </div>
  )
}

export default Footer8
