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
    <div>
    <Header/>
    <Blogs/>
    <Pagination/>


    </div>
  )
}

export default App
