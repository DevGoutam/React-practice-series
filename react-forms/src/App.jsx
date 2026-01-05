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
    address: "",
    city: "",
   province: "",
   zipCode: "",
  });

  async function submithandler(){
      console.log("Saving data:", formData);

  }

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
  // console.log(formData);

  return (
    <div  className=' max-w-[80%] w-[1080px] mx-auto shadow-xl mt-20 '>
    <form className='px-5 py-4 space-y-6' onSubmit={submithandler} >
 <div>
     <label className='font-bold' htmlFor='firstName'>First Name</label>
    <br/>
      <input className='mt-1 w-full border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='text'
 placeholder='firstName'
 name='firstName'
 value= {formData.firstName}
 id='firstName'
      />
 </div>
 <div>
     <label className='font-bold' htmlFor='lastName'>Last Name</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='text'
 placeholder='lastName'
 name='lastName'
 value= {formData.lastName}
 id='lastName'
      />
 </div>
 <div>
     <label className='font-bold' htmlFor='email'>Email</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
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
        className=' border-gray-400 border py-1 px-2'
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

         <div>
     <label className='font-bold' htmlFor='address'>Street Address</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='text'
 placeholder='address'
 name='address'
 value= {formData.address}
 id='address'
      />
 </div>
          <div>
     <label className='font-bold' htmlFor='city'>City</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='text'
 placeholder='city'
 name='city'
 value= {formData.city}
 id='city'
      />
 </div>
          <div>
     <label className='font-bold' htmlFor='province'>State / Province</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='text'
 placeholder='province'
 name='province'
 value= {formData.province}
 id='province'
      />
 </div>

          <div>
     <label className='font-bold' htmlFor='zipCode'>ZIP / Postal code</label>
    <br/>
      <input className='mt-1 w-full  border-gray-400 border py-1 px-2'
      onChange={changeHandler}
 type='number'
 placeholder='zipCode'
 name='zipCode'
 value= {formData.zipCode}
 id='zipCode'
      />
 </div>

     <button type='submit' className="px-5 py-2 bg-blue-500 font-bold text-white rounded-sm mb-5 cursor-pointer">Save</button>
    </form>
    </div>
  )
}

export default App
