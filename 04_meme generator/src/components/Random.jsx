import React, { useEffect, useState } from 'react'
import axios from 'axios';
const API_KEY = import.meta.env .REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const [gif, setGif]= useState('')
  
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   const output = await axios.get(url);
   console.log(output);
    
  }

  useEffect (()=>{
    fetchData();

  },[])

    function clickHandler(){
        console.log("clicked")
    }
  return (
    <div className='w-1/2 h-[450px] bg-green-500  rounded-xl border-2  border-white flex flex-col items-center mt-[15px] gap-y-6'>
      <h1 className='text-2xl underline uppercase font-bold'>a Random Gif</h1>
      <img src={gif} width={450}/>
      <button className='w-10/12 bg-green-100 text-lg py-2 rounded-lg '  onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
