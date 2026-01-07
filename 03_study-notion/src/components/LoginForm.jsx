import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"

const LoginForm = () => {
  const [formData , setFormData] = useState({email: "", password:"" })

  function changeHandler(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.vlaue
    }))

    const [showPassword, setShowPassword] = useState(false);

  }

  return (
    <form>
      <lable>
        <p>Email Address<sup>*</sup></p>

        <input
            required
            type='text'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
        />
      </lable>
      <lable>
        <p>Password<sup>*</sup></p>

        <input
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
        />

        <span>
          {showPassword ? (AiOutlineEye) : (AiOutlineEyeInvisible)}
        </span>
      </lable>
    </form>
  )
}

export default LoginForm
