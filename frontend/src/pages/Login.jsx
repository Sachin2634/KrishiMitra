import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="w-full bg-cover bg-center h-screen flex justify-center bg-fixed bg-no-repeat" 
        style={
            {backgroundImage: "url('src/assets/farm 1.png')"
        }}>

        <div className='bg-green-500/50 w-[852px] h-[622px] mt-[75px] mb-[123px]   flex flex-col items-center '>
                <div className='w-[293px] h-[82px] bg-[#FFFFFF] rounded-[51.71px] text-center text-[38px] pt-[9.6px] mt-[64px] '>
                    Login</div>
                <input type="text" placeholder='Username' 
                className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'/>
                <input type="password" placeholder='Password' 
                className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'/>
                <div>
                <Link to="/dashboard">
                <button className='mt-20 bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] rounded-[20px]  text-[30px] hover:bg-white/80 cursor-pointer'>
                Proceed</button>
                </Link>
                <a href="/signup" className='text-white text-[20px] ml-[10px] hover:text-white/80'>Create Account?</a>
                </div>
                
        </div> 
    </div>
  )
}

export default Login