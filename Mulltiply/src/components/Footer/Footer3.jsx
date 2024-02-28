// import React from 'react'
// import img1 from '../assets/hori1.jpg'
// import img2 from '../assets/hori2.jpg'
// import img4 from '../assets/hori3.jpg'
// import img5 from '../assets/hori4.jpg'

// function Footer3() {
//   return (
//     <div className='grid grid-cols-2 h-screen'>
//       <div className='bg-red-400 h-1/2 w-full'>
//         <img src={img1} alt="" />
//       </div>
//       <div className='bg-blue-400 h-1/2 w-full'>
//         <img src={img2} alt="" />
//       </div>
//       <div className='bg-gray-400 h-1/2 w-full'>
//       <img src={img4} alt="" />
//       </div>
//       <div className='bg-green-400 h-1/2 w-full'>
//       <img src={img5} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Footer3

import React from 'react'
import img1 from '../assets/hori1.jpg'
import img2 from '../assets/hori2.jpg'
import img4 from '../assets/hori3.jpg'
import img5 from '../assets/hori4.jpg'

function Footer3() {
  return (
    <div className='grid grid-cols-2 grid-row-2 h-screen'>
      <div className='bg-red-400 w-full'>
        <img src={img1} alt="" />
      </div>
      <div className='bg-blue-400 w-full'>
        <img src={img2} alt="" />
      </div>
      <div className='bg-gray-400 w-full'>
      <img src={img4} alt="" />
      </div>
      <div className='bg-green-400 w-full'>
      <img src={img5} alt="" />
      </div>
    </div>
  )
}

export default Footer3