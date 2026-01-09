import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing the formdata ");
    console.log(formData);
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className=" w-full">
        <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
        />
      </label>
      <label className="w-full relative">
        <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
        />

        <span className="' absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF' /> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
        </Link>
      </label>

      <button className="cursor-pointer  bg-yellow-50 font-medium text-richblack-900 rounded-[8px] px-[12px] py-[8px] mt-6   ">Sign In</button>
    </form>
  );
};

export default LoginForm;
