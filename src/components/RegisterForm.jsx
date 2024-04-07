"use client"
import { useState } from "react"
import Link from 'next/link'
const RegisterForm = () => {
    const [formData, setFormData] = useState({
      username: '',
      email:'',
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
      username: '',
      email:'',
      password: '',
    });
  };
  return (
    <div className="w-1/2">
      <div className="login flex flex-col text-[#E5E5CB] items-center justify-center">
        <h2 className="font-bold text-[48px]">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <div className="mb-4 justify-center">
          <label htmlFor="name" className="block mb-2 ml-5 font-semibold text-[18px]">Username</label>
          <input placeholder='Enter your Username'
            type="text"
            id="name"
            name="name"
            value={formData.username}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[18px]">Email</label>
          <input placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 ml-5 font-semibold text-[18px]">Password</label>
          <input placeholder='Enter your Password'
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
          Sign up
        </button>
        <p className="text-[#E5E5CB] mt-8">Already have an account? <Link href="/login" className="text-[#E5E5CB] font-bold">Sign in</Link></p>
      </form>
      </div>
      </div>
  )
}

export default RegisterForm
