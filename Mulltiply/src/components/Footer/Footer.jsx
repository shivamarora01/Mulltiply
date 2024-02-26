import React from 'react'
import img1 from '../assets/men.jpg'


function Footer() {
  return (
    <div className='bg-black'>
      <div className=' bg-grey-900 flex flex-row h-screen'>
        {/* <img className='bg-red-400 h-96 w-48' src={img1} alt="" />
        <img className='bg-blue-400' src={img1}alt="" />
        <img className='bg-pink-400' src={img1} alt="" />
        <img className='bg-green-400' src={img1} alt="" /> */}
        <div className='bg-red-500 m-10 w-full flex flex-row'>
        <div className='bg-black m-10 w-full px-5 brightness-100 hover:brightness-50'>
          <img className = 'object-cover h-96 w-60' src={img1} alt="" />
          <div>
            Men Fashion
          </div>
        </div>
        <div className='bg-black m-10 w-full px-5'>
          <img className = 'object-cover h-96 w-60' src={img1} alt="" />
        </div>
        <div className='bg-black m-10 w-full px-5'>
          <img className = 'object-cover h-96 w-60'  src={img1} alt="" />
        </div>
        <div className='bg-black m-10 w-full px-5'>
          <img className = 'object-cover h-96 w-60' src={img1} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer