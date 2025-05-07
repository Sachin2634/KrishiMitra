import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'farmer' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div className="w-full bg-cover bg-center h-screen flex justify-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/farm 1.png')" }}>

      <form
        onSubmit={handleSubmit}
        className='bg-green-500/50 w-[852px] h-[622px] mt-[75px] mb-[123px] flex flex-col items-center'>

        <div className='w-[293px] h-[82px] bg-[#FFFFFF] rounded-[51.71px] text-center text-[38px] pt-[9.6px] mt-[64px]'>
          Sign Up
        </div>

        <input
          type="text"
          name="name"
          placeholder="Username"
          value={formData.name}
          onChange={handleChange}
          className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className='w-[550px] mt-[30px] pl-[42px] text-[29px] bg-transparent text-white border-b-[3px] border-b-black'>
          <option value="farmer" className='text-black'>Farmer</option>
          <option value="consumer" className='text-black'>Consumer</option>
        </select>

        <div>
          <button
            type="submit"
            className='mt-12 bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] rounded-[20px] text-[30px] hover:bg-white/80 cursor-pointer'>
            Proceed
          </button>
          <a href="/login" className='text-white text-[20px] ml-[10px] hover:text-white/80'>Already an user?</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
