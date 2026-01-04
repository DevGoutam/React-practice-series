import React from 'react'
import { useState } from 'react';

const App = () => {

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    comment: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });


  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }
  console.log(formData);

  return (
    <div  className=' max-w-[80%] w-[1080px] mx-auto '>
    <form className='px-5 py-4 space-y-6'>
 <div>
     <label className='font-bold' htmlFor='firstName'>First Name</label>
    <br/>
      <input className='mt-1 w-full'
      onChange={changeHandler}
 type='text'
 placeholder='firstName'
 name='firstName'
 valu= {formData.firstName}
 id='firstName'
      />
 </div>
 <div>
     <label className='font-bold' htmlFor='lastName'>Last Name</label>
    <br/>
      <input className='mt-1 w-full'
      onChange={changeHandler}
 type='text'
 placeholder='lastName'
 name='lastName'
 valu= {formData.lastName}
 id='lastName'
      />
 </div>
 <div>
     <label className='font-bold' htmlFor='email'>Email</label>
    <br/>
      <input className='mt-1 w-full'
      onChange={changeHandler}
 type='text'
 placeholder='Email@#'
 name='email'
 valu= {formData.email}
 id='email'
      />
 </div>
   <label htmlFor="country" className='font-bold mr-2'>Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="">select</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Russia">Russia</option>
          <option value="Afganisthan">Afganisthan</option>
          <option value="USA">USA</option>
        </select>
    </form>
    </div>
  )
}

export default App
