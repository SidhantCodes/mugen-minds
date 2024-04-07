"use client"
import { useState } from "react"
import Image from "next/image"
import { loginreg } from "../../../public"

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data, such as sending it to a server
    console.log(formData);
    setFormData({
      emailOrUsername: '',
      password: '',
    });
  };
  return (
    <main className="flex text-center items-center">
      <div className="flex overflow-y-hidden h-screen w-1/2">
        <Image src={loginreg} alt="login" />
        <div className="absolute text-[#E5E5CB] top-80 left-[12.5%]">
          <h2 className="text-[58px] flex font-marcellus">MugenMinds</h2>
          <p className="font-light absolute font-outfit w-[650px] text-center text-[22px] -left-36">
            Dive into a treasure trove of study resources - from question papers to detailed notes and bonus materials.
          </p>
        </div>
      </div>
      <div className="w-1/2">
      <div className="login flex flex-col text-[#E5E5CB] items-center justify-center">
        <h2 className="font-bold text-[48px]">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <div className="mb-4 justify-center">
          <label htmlFor="name" className="block mb-2 ml-5 font-semibold text-[18px]">Email/Username</label>
          <input placeholder='Enter your Name'
            type="text"
            id="name"
            name="name"
            value={formData.emailOrUsername}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[18px]">Password</label>
          <input placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            value={formData.password}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1"
            required
          />
        </div>
        <button type="submit" className={`bg-[#E5E5CB] mt-6 text-[#121212] transition  font-bold text-[16px] py-2 rounded-[30px] w-[200px] hover:bg-[#e5e5cb9a]`}>
          Sign in
        </button>
      </form>
      </div>
      </div>
    </main>
  )
}

export default Login
