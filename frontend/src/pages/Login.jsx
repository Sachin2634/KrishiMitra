import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      // Store token, user, and user ID separately
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // Store whole user object
      localStorage.setItem('userId', data.user.id); // Store user ID specifically

      alert("Login Successful!");
      console.log(data);

      // Navigate based on user role
      if (data.user.role === "farmer") {
        navigate("/dashboard");
      } else if (data.user.role === "consumer") {
        navigate("/consumersearch");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="w-full bg-cover bg-center h-screen flex justify-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/farm 1.png')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-green-500/50 w-[852px] h-[622px] mt-[75px] mb-[123px] flex flex-col items-center"
      >
        <div className="w-[293px] h-[82px] bg-[#FFFFFF] rounded-[51.71px] text-center text-[38px] pt-[9.6px] mt-[64px]">
          Login
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black"
        />
        {error && <div className="text-red-500 mt-4">{error}</div>}
        <div>
          <button
            type="submit"
            className="mt-20 bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] rounded-[20px] text-[30px] hover:bg-white/80 cursor-pointer"
          >
            Proceed
          </button>
          <a
            href="/signup"
            className="text-white text-[20px] ml-[10px] hover:text-white/80"
          >
            Create Account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;