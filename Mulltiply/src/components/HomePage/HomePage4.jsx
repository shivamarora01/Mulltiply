import React from 'react'
// import image1 from '../assets/image1.png'

function HomePage4() {
  return (
    <div className='bg-sky-950 h-screen w-full'>
    <div className='flex flex-col sm:flex-row '>
      <div className='bg-red-200 h-screen w-full flex flex-col justify-center ml-9 mr-5'>
        <h1 className='text-6xl font-bold bg-green-600 text-white'>Take Control</h1>
        <h2 className='bg-yellow-600 text-4xl font-bold text-white'>of Your Business</h2>
        <p className='bg-pink-400 text-sky-700 pt-3 pb-3'>Seamlessly Manage Your Small Business Online</p>
        <p className='bg-gray-600 text-zinc-500'>Discover Multiply India: Your all-in-one POS and commission-free ordering solution. Boost your business online and in-store while effortlessly handling inventory and customer data for full operational control.</p>
       <div className='bg-red-400'>
        <button
        type='button'
        className='rounded-md bg-gray-900 text-white p-2'
        >Google Play</button>
        <button
        type='button'
        className='rounded-md bg-gray-900 text-white p-2 m-3'>App Store</button>
       </div>
      </div>
      <div className='bg-blue-300 h-screen w-full ml-9 mr-9 pt-20 sm: w-full'>
        <img className='bg-red-500 object-cover justify-center mx-auto my-20 h-48 w-96 sm:h-64 w-full' src={image1} alt="HomePage Image 1" />
      </div>
      </div>
    </div>
  )
}

export default HomePage4
