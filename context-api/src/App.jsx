import React, { useContext, useEffect } from 'react'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import Header from './components/Header'
import Spinner from './components/Spinner'
import { AppContext } from './context/AppContext'

const App = () => {
  const { fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
    <Blogs/>
    <Pagination/>


    </div>
  )
}

export default App
