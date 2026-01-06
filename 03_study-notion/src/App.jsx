
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import React, { useState } from 'react'


const App = () => {
const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
      <Routes>

<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/login' element={<Signup/>} />
<Route path='/login' element={<Dashboard/>} />





</Routes>     
    </div>
  )
}

export default App
