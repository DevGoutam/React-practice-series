import React from 'react'
import Random from './components/Random.jsx'
import Tag from './components/Tag.jsx' 

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col '>
    <h1 className='bg-gray-900 border-dashed border-white  border-2 text-white rounded-xl text-center py-4 w-11/12 mx-auto text-4xl font-bold mt-8  '>Random GIF Generator</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App


