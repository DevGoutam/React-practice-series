import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const Random = () => {

  const [gif, setGif]= useState(null);
  const [loading, setLoading] = useState(false);

async function fetchData() {
  setLoading(true)
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  const imageSource = data.data.images.downsized_large.url;
  setGif(imageSource);
  setLoading(false)
}


  useEffect (()=>{
    fetchData();

  },[])

    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2  bg-gray-800  rounded-xl border  border-white flex flex-col items-center mt-[15px] gap-y-6'>
      <h1 className='text-2xl text-white underline uppercase font-bold mt-[15px]'>a Random Gif</h1>
     {
      loading ? <Spinner/> : <img src={gif} width="450"/>
     } 
      <button className='w-10/12 bg-green-100 text-lg py-2 rounded-lg  cursor-pointer mb-[20px]'  onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
