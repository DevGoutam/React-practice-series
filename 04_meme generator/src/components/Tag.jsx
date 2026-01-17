import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const Tag = () => {

  const [tag, setTag]= useState("")
//   const [gif, setGif]= useState(null);
//   const [loading, setLoading] = useState(false);

// async function fetchData() {
//   setLoading(true) 
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//   const { data } = await axios.get(url);
//   const imageSource = data.data.images.downsized_large.url;
//   setGif(imageSource);
//   setLoading(false)
// }


//   useEffect (()=>{
//     fetchData();

//   },[])

const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-blue-500  rounded-xl border  border-white flex flex-col items-center mt-[15px] gap-y-6'>
      <h1 className='text-2xl text-white underline uppercase font-bold mt-[15px]'>Random Gif</h1>
     {
      loading ? <Spinner/> : <img src={gif} width="450"/>
     } 
      <div className='flex flex-col w-full items-center gap-2 mt-2'>
   <input
        type='text'
        className='w-10/12 bg-green-100 text-lg py-2 rounded-lg  cursor-pointer text-center '
        onChange={ (event)=> setTag(event.target.value)}
        value={tag}
      />

      <button className='w-10/12 bg-green-100 text-lg py-2 rounded-lg  cursor-pointer mb-[20px]'  onClick={()=> fetchData(tag)}>Generate</button>
      </div>
   
    </div>
  )
}

export default Tag
