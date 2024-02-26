import React from 'react'

export function HomePage3() {
  return (
    <div className="mx-auto grid-cols-4 w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <div
          className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src='https://mulltiply.com/images/step1.png'
            alt="item1"
            className="z-0 w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Add products or service to the online catalog</h1>
            {/* <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button> */}
          </div>
        </div>
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src='https://mulltiply.com/images/step2.png'
            alt="item1"
            className="z-0 w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Create a link, image or PDF of your Catalog. You can choose any number of items.</h1>
            {/* <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button> */}
          </div>
        </div>
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src='https://mulltiply.com/images/step3.png'
            alt="item1"
            className="z-0 w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Share it with your customers through Whatsapp, FB, Insta or any medium</h1>
            {/* <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button> */}
          </div>
        </div>
        <div
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src='https://mulltiply.com/images/step4.png'
            alt="item1"
            className="z-0 w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Your customers can see the details and order from the link.</h1>
            {/* <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button> */}
          </div>
        </div>
    </div>
  )
}
