import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
   const navigate =useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showsPassword, setShowsPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");


  function submitHandler(event) {
  event.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  setIsLoggedIn(true);
  toast.success("Account Created");

  const accountData = {
    ...formData,
    accountType
  };
  


  console.log("printing account data");
  console.log(accountData);

  navigate("/dashboard");
}


  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      {/* student instructor tab */}
<div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
  <button
    type="button"
    className={` cursor-pointer ${accountType === "student"
      ? "bg-richblack-900 text-richblack-5"
      : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("student")}
  >
    Student
  </button>

  <button
    type="button"
    className={` cursor-pointer ${accountType === "instructor"
      ? "bg-richblack-900 text-richblack-5"
      : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("instructor")}
  >
    Instructor
  </button>  
</div>


      <form onSubmit={submitHandler} className=" space-y-4">
        {/* firstname and lastname  */}
        <div className="flex  justify-between gap-x-5 ">
          <label className="w-full">
            <p  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
               className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            />
          </label>

          <label className="w-full">
            <p  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
               className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            />
          </label>
        </div>
        {/* email add  */}
        <div>
        <label>
          <p  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address "
            value={formData.email}
             className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
          />
        </label>

        </div>
        {/* createPassword and confirm password  */}
        <div className="  flex justify-between gap-x-5">
          <label className=" w-full relative">
            <p  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password "
              value={formData.password}
               className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            />
            <span className=" absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEye  fontSize={24} fill='#AFB2BF'  /> : <AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'  />}
            </span>
          </label>
          <label className="  w-full relative ">
            <p  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showsPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password "
              value={formData.confirmPassword}
               className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            />
        <span className=" absolute right-3  top-[38px]  cursor-pointer" onClick={() => setShowsPassword((prev) => !prev)}>
              {showsPassword ? <AiOutlineEye  fontSize={24} fill='#AFB2BF'  /> : <AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'  />}
            </span>
          </label>
        </div>
        {/* create account button */}
        <button  className="cursor-pointer w-full  bg-yellow-50 font-medium text-richblack-900 rounded-[8px] px-[12px] py-[8px] mt-6" >Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
