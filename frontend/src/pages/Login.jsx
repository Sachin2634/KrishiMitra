import React from 'react'

const Login = () => {
  return (
    <div className="w-full bg-cover bg-center h-screen flex justify-center bg-fixed bg-no-repeat" 
        style={
            {backgroundImage: "url('src/assets/farm 1.png')"
        }}>

        <div className='bg-green-500/50 w-[852px] h-[622px] mt-[75px] mb-[123px]   flex flex-col items-center '>
                <div className='w-[293px] h-[82px] bg-[#FFFFFF] rounded-[51.71px] text-center text-[38px] pt-[9.6px] mt-[64px] '>
                    Login</div>
                <input type="text" placeholder='Username' className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'/>
                <input type="password" placeholder='Password' className='w-[550px] h-auto pl-[42px] mt-[39px] pb-[18px] text-white text-[29px] placeholder-white border-b-[3px] border-b-black'/>
        </div> 
    </div>
  )
}

export default Login