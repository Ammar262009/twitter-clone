import React from 'react'
import './index.css'
import MenulLeft from './components/MenulLeft'
import Middle from './components/Middle'
import Right from './components/Right'

const App = () => {
  return (
    <div className='bg-black  h-full w-full'>
      <div className='m-auto overflow-x-hidden flex w-[95%] h-full'>

        <MenulLeft />
        <Middle />
        <Right />
      </div>
    </div>
  )
}

export default App