import React from 'react'

const Random = () => {

    function clickHandler(){
        console.log("clicked")
    }
  return (
    <div className='w-1/2 h-[450px] bg-green-500  rounded-xl border-2  border-white flex flex-col items-center mt-[15px] gap-y-6'>
      <h1 className='text-2xl underline uppercase font-bold'>a Random Gif</h1>
      {/* <img src={gif} width={450}/> */}
      <button className='w-10/12 bg-green-100 text-lg py-2 rounded-lg '  onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
