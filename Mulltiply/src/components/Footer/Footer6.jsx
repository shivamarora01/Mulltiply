import React from 'react'
import img1 from '../assets/f22.jpg'
import img2 from '../assets/f23.jpg'
import img4 from '../assets/f21.jpg'
import img5 from '../assets/f24.jpg'


function Footer6() {
  return (
    <div className='grid grid-cols-2 h-screen lg:h-screen'>
      <div className='group relative overflow-hidden'>
        <div className='h-full rounded-md'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img1} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Men</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>
      <div className='group relative overflow-hidden'>
        <div className='h-full rounded-md'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img2} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Women</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>
      <div className='group relative overflow-hidden'>
        <div className='h-full rounded-md'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img4} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Unisex</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>
      <div className='group relative overflow-hidden'>
        <div className='h-full rounded-md'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img5} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Kids</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>
      {/* <div className='group relative'>
        <div className='h-full'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img2} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Women</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>      
      <div className='group relative'>
        <div className='h-full'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img4} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Unisex</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div>      
      <div className='group relative'>
        <div className='h-full'>
        <img className='z-0 w-full h-full object-cover rounded-md transition duration-200 transform group-hover:scale-110' src={img5} alt="image not found" />
        </div>
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50'></div>
        <div className='absolute w-full bottom-8'>
            <h1 className='mx-auto text-4xl font-serif font-bold text-center text-white lg:text-6xl'>Kids</h1>
            <p className='my-2 mx-auto font-serif font-bold text-center cursor-pointer opacity-0 text-white lg:group-hover:opacity-100'>Shop Now &rarr;</p>
        </div>
      </div> */}
      </div>
  )
}

export default Footer6