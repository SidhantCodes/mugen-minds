"use client"
import Image from "next/image"
import { useState } from 'react';
import { line } from '../../public';
const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <h1 className='font-outfit font-bold text-[55px] text-[#E5E5CB] mt-40'>Contact us</h1>
    <main className="flex items-center justify-center rounded-2xl gap-x-10 mt-5 mb-5 bg-[#191919] w-[1200px]  text-[#E5E5CB]">
      <div className='max-w-56 text-[30px] font-outfit text-center font-light'>
        <p >
          Feel free to reach out to us with any questions, comments, or inquiries - we're here to help!
        </p>
      </div>
      <div className="line">
        <Image src={line} alt="line" height={300} width={4}/>
      </div>
      <div className='flex flex-col justify-center items-center mt-[30px] ml-12 mr-12 mb-16'>      
      <div className='flex flex-col justify-center'> 
          
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 ml-5 font-semibold text-[18px]">Name</label>
          <input placeholder='Enter your Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[500px] px-5 py-1 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[18px]">Email:</label>
          <input placeholder='Enter your Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[500px] px-5 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 ml-5 font-semibold text-[18px]">Message:</label>
          <textarea placeholder='Enter your Message'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-[#E5E5CB] bg-[#191919] border-[2px]  rounded-[30px] h-32 w-[500px] px-5 py-2 focus:outline-none"
            
          />
        </div>
        <button type="submit" className={`bg-[#E5E5CB] mt-6 text-[#121212] transition  font-bold text-[16px] py-2 rounded-[30px] w-[200px] hover:bg-[#e5e5cb9a]`}>
          Submit
        </button>
      </form>
      </div>

      </div>
    </main>
    </>
  );
}

export default ContactUs;