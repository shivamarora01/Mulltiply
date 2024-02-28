import React from 'react';
import img1 from '../assets/f22.jpg'
import img2 from '../assets/f23.jpg'
import img4 from '../assets/f21.jpg'
import img5 from '../assets/f24.jpg'

function Footer4() {
  return (
    <div className="mx-auto grid grid-cols-2 items-center h-screen space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">












        <div
          className="relative aspect-[9/16] rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img1}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className=" mx-auto absolute bottom-10 text-center">
            <h1 className="mx-4 text-4xl font-semibold font-serif inline-flex items-center text-white lg: mx-12">Men Shoes</h1>
          </div>
          <div className="bottom-2 absolute text-center">
            <button className="ml-12 inline-flex font-serif cursor-pointer items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:text-center lg:mx-25">
              Shop Now &rarr;
            </button>
          </div>
        </div>























        <div
          className="relative aspect-[9/16] rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img2}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-10 text-center">
            <h1 className="text-4xl font-semibold font-serif inline-flex items-center text-white">Women Shoes</h1>
          </div>
          <div className="absolute bottom-4 text-center">
            <button className="mt-2 mx-24 inline-flex font-serif cursor-pointer items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now &rarr;
            </button>
          </div>
        </div><div
          className="relative aspect-[9/16] rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img5}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
         <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-10 text-center">
            <h1 className="text-4xl font-semibold font-serif inline-flex items-center text-white">Unisex Shoes</h1>
          </div>
          <div className="absolute bottom-4 text-center">
            <button className="mt-2 mx-24 inline-flex font-serif cursor-pointer items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now &rarr;
            </button>
          </div>
        </div><div
          className="relative aspect-[9/16] rounded-md md:aspect-auto md:h-[400px] group cursor-pointer overflow-hidden"
        >
          <img
            src={img4}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover duration-300 transform scale group-hover:scale-110 "
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className="absolute bottom-10 text-center">
            <h1 className="text-4xl font-semibold font-serif inline-flex items-center text-white">  Kids Shoes</h1>
          </div>
          <div className="absolute bottom-4 text-center">
            <button className="mt-2 mx-24 inline-flex font-serif cursor-pointer items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now &rarr;
            </button>
          </div>
        </div>
    </div>
  );
}

export default Footer4;