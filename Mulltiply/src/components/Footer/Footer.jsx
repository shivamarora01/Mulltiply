import React from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

function Footer() {
  return (
    <div className="mx-auto grid h-screen w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img1}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-lg font-semibold text-white">Men Shoes</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img2}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-lg font-semibold text-white">Women Shoes</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div><div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img5}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-lg font-semibold text-white">Unisex Shoes</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div><div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img4}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-lg font-semibold text-white">Kids Shoes</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
    </div>
  );
}

export default Footer;


// import React from 'react'
// import img1 from '../assets/men.jpg'
// import img2 from '../assets/women.jpg'
// import img4 from '../assets/kids.jpg'
// import img3 from '../assets/unisex.jpg'


// function Footer() {
//   return (
//         <div className='w-full grid grid-col-4 gap-4'>
//         <div className='z-0 h-screen w-full px-5 relative group hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img1} alt="" />
//           <div className='absolute inset-0 flex justify-center items-center text-4xl text-white invisible group-hover:visible'>
//             <h1 className='text-white font-bold group-hover:z-50'>Men</h1>
//           </div>
//         </div>
//         <div className='bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'z-0 object-cover h-96 w-60' src={img2} alt="" />
//           <div className=' z-30 absolute inset-0 flex justify-center items-center font-5xl text-white invisible group-hover:visible'>
//             Women
//           </div>
//         </div>        
//         <div className=' z-0 bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img3} alt="" />
//           <div className='z-10 absolute inset-0 flex justify-center items-center font-bold text-white invisible group-hover:visible'>
//             Unisex
//           </div>
//         </div>        
//         <div className=' z-0 bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img4} alt="" />
//           <div className='z-10 absolute inset-0 flex justify-center items-center font-bold text-white invisible group-hover:visible'>
//             Kids
//           </div>
//           </div>
//     </div>
//   )
// }

// export default Footer



// import React from 'react'
// import img1 from '../assets/men.jpg'
// import img2 from '../assets/women.jpg'
// import img4 from '../assets/kids.jpg'
// import img3 from '../assets/unisex.jpg'


// function Footer() {
//   return (
//     <div className='bg-black'>
//       <div className=' bg-grey-900 flex flex-row h-screen'>
//         <div className='bg-red-500 m-10 w-full flex flex-row'>
//         <div className='z-0 bg-black m-10 w-full px-5 relative group hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img1} alt="" />
//           <div className='absolute inset-0 flex justify-center items-center text-4xl text-white invisible group-hover:visible'>
//             <h1 className='text-white font-bold group-hover:z-50'>Men</h1>
//           </div>
//         </div>
//         <div className='bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'z-0 object-cover h-96 w-60' src={img2} alt="" />
//           <div className=' z-30 absolute inset-0 flex justify-center items-center font-5xl text-white invisible group-hover:visible'>
//             Women
//           </div>
//         </div>        
//         <div className=' z-0 bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img3} alt="" />
//           <div className='z-10 absolute inset-0 flex justify-center items-center font-bold text-white invisible group-hover:visible'>
//             Unisex
//           </div>
//         </div>        
//         <div className=' z-0 bg-black m-10 w-full px-5 relative group brightness-100 hover:brightness-50'>
//           <img className = 'object-cover h-96 w-60' src={img4} alt="" />
//           <div className='z-10 absolute inset-0 flex justify-center items-center font-bold text-white invisible group-hover:visible'>
//             Kids
//           </div>
//           </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Footer