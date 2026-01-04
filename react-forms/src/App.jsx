import React from 'react'
import { useState } from 'react';

const App = () => {

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  return (
    <div >
      
    </div>
  )
}

export default App
