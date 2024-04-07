// "use client"
// import axios from 'axios'
// import { useState } from "react"
// import Link from 'next/link'
// const Form = () => {
//     const [formData, setFormData] = useState({
//     emailOrUsername: '',
//     password: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform actions with the form data, such as sending it to a server
//     console.log(formData);
//     setFormData({
//       emailOrUsername: '',
//       password: '',
//     });
//   };
//   return (
//     <div className="w-1/2">
//       <div className="login flex flex-col text-[#E5E5CB] items-center justify-center">
//         <h2 className="font-bold text-[48px]">Login</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
//         <div className="mb-4 justify-center">
//           <label htmlFor="name" className="block mb-2 ml-5 font-semibold text-[18px]">Email/Username</label>
//           <input placeholder='Enter your Username/Email'
//             type="text"
//             id="name"
//             name="name"
//             value={formData.emailOrUsername}
//             onChange={handleChange}
//             className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1 "
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2 ml-5 font-semibold text-[18px]">Password</label>
//           <input placeholder='Enter your Password'
//             type="email"
//             id="email"
//             name="email"
//             value={formData.password}
//             onChange={handleChange}
//             className=" border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1"
//             required
//           />
//         </div>
//         <button type="submit" className={`bg-[#E5E5CB] mt-6 text-[#121212] transition  font-bold text-[16px] py-2 rounded-[30px] w-[200px] hover:bg-[#e5e5cb9a]`}>
//           Sign in
//         </button>
        
//           <p className="mt-8   text-[#E5E5CB] font-light">Don't have an account? <Link href="/register" className="font-bold">Register</Link></p>
        

//       </form>
//       </div>
//       </div>
//   )
// }

// export default Form
"use client"
import { useState } from "react";
import axios from 'axios';
import Link from 'next/link';

const Form = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '', // Changed from emailOrUsername to match backend expectation
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Ensures the formData is updated correctly based on input name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Corrected the API request data structure
    axios.post('http://localhost:8080/api/auth/login', {
      usernameOrEmail: formData.usernameOrEmail, // Correct key as expected by backend
      password: formData.password
    })
    .then(function (response) {
      console.log(response);
      // Handle login success, e.g., saving the JWT, redirecting the user
      const { accessToken } = response.data.data;
      // Save the accessToken in localStorage
      localStorage.setItem('accessToken', accessToken);
    })
    .catch(function (error) {
      console.error(error);
      // Handle login failure, e.g., showing an error message
    });

    // Reset form data
    setFormData({
      usernameOrEmail: '',
      password: '',
    });
  };

  return (
    <div className="w-1/2">
      <div className="login flex flex-col text-[#E5E5CB] items-center justify-center">
        <h2 className="font-bold text-[48px]">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
          <div className="mb-4 justify-center">
            <label htmlFor="usernameOrEmail" className="block mb-2 ml-5 font-semibold text-[18px]">Email/Username</label>
            <input 
              placeholder='Enter your Username/Email'
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail" // Corrected to match the state key
              value={formData.usernameOrEmail}
              onChange={handleChange}
              className="border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 ml-5 font-semibold text-[18px]">Password</label>
            <input 
              placeholder='Enter your Password'
              type="password"
              id="password"
              name="password" // Matches the state key
              value={formData.password}
              onChange={handleChange}
              className="border-[#E5E5CB] bg-[#191919] border-[2px] focus:outline-none rounded-[30px] w-[350px] px-5 py-1"
              required
            />
          </div>
          <button type="submit" className="bg-[#E5E5CB] mt-6 text-[#121212] transition font-bold text-[16px] py-2 rounded-[30px] w-[200px] hover:bg-[#e5e5cb9a]">
            Sign in
          </button>
          <p className="mt-8 text-[#E5E5CB] font-light">Don't have an account? <Link href="/register" className="font-bold">Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Form;
