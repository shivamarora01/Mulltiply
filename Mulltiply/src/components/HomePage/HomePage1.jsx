import React from 'react'
// import image1 from '../assets/image1.png'

function HomePage1() {
  return (
    <div className='bg-sky-950 h-screen'>
    <div className='flex flex-col sm:flex-row '>
      <div className='h-screen w-full flex flex-col justify-center ml-9 mr-5'>
        <h1 className=' text-6xl font-bold text-white'>Take Control</h1>
        <h2 className=' text-4xl font-semibold text-white'>of Your Business</h2>
        <p className='text-sky-700 pt-3 pb-3'>Seamlessly Manage Your Small Business Online</p>
        <p className='text-zinc-500'>Discover Multiply India: Your all-in-one POS and commission-free ordering solution. Boost your business online and in-store while effortlessly handling inventory and customer data for full operational control.</p>
       <div className=''>
        <button
        type='button'
        className='rounded-md bg-gray-900 text-white p-2'
        >Google Play</button>
        <button
        type='button'
        className='rounded-md bg-gray-900 text-white p-2 m-3'>Play Store</button>
       </div>
      </div>
      <div className=' h-screen w-full flex justify-center pt-20 sm: w-full'>
        <img className='object-contain sm:h-64 w-full mt-20' src={image1} alt="HomePage Image 1" />
      </div>
      </div>
    </div>
  )
}

export default HomePage1