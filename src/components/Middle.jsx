import React from 'react'

const Middle = () => {
  return (
    <div className='bg-blue-900 h-full w-[44%] min-h-screen overflow-hidden border-r border-l border-white'>
      <div className='flex '>
        <div className='w-1/2 text-center relative font-medium bg-black text-white  border-r border-b text-medium py-2'>
          For you
          <div className='absolute hidden w-20 h-1.5 rounded-2xl bottom-0 left-1/2 translate-x-[-50%] bg-blue-400'></div>
        </div>

        <div className='w-1/2 text-center relative z-2 font-medium bg-black text-white  border-b text-medium py-2'>
        Following
        <div className='absolute w-20 h-1.5 rounded-2xl bottom-0 left-1/2 translate-x-[-50%] bg-blue-400'></div>
        </div>
      </div>
    </div>
  )
}

export default Middle