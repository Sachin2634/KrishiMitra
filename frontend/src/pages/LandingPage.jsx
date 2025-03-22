import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';

const LandingPage = () => {
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    
    const handleClick = (selectedRole) => {
        setRole(selectedRole);
    };

    
    
    const isFarmer = role === "Farmer";
    const isConsumer = role === "Consumer";

    return (
    <>
        {/* Background */}
        <div className="w-full bg-cover bg-center h-screen flex justify-center bg-fixed bg-no-repeat" 
        style={
            {backgroundImage: "url('src/assets/farm 1.png')",
            backgroundPosition: "top 20%",
        }} >
            {/* Heading Div */}
                <h1 className='absolute bg-green-600 p-[1.94vh] pl-[8.68%] pr-[8.68%] mt-[6vh] sm:mt-[7vh] md:mt-[9vh] text-[4vh] sm:text-[5vh] md:text-[5.72vh] text-white rounded-[42px]'>You are a </h1>
                
                <div className="absolute grid grid-cols-1 md:grid-cols-2 gap-8 mt-[27vh] w-full place-items-center ">
                    {/* Farmer */}
                    <div className={`h-[380px] w-[290px] bg-green-600 flex flex-col pt-6 items-center rounded-[16px] cursor-pointer
                     hover:bg-green-800 transition-all duration-300 hover:shadow-2xl hover:shadow-white
                     ${isFarmer ? 'bg-green-800' : 'bg-green-600'}`}
                    onClick={() => handleClick("Farmer")}>
                        <img src="src/assets/Mask group.png" alt="" className="w-[241px] h-[241px] object-contain" onClick={() => handleClick("Farmer")}/>
                        <h1 className='mt-[45px] text-[40px] text-white' onClick={() => handleClick("Farmer")}>Farmer</h1>
                    </div>
                    {/* Consumer */}
                    <div className={`h-[380px] w-[290px] bg-green-600 flex flex-col pt-6 items-center rounded-[16px] cursor-pointer 
                    hover:bg-green-800 transition-all duration-300 hover:shadow-2xl hover:shadow-white 
                    ${isConsumer ? 'bg-green-800' : 'bg-green-600'}`}
                    onClick={() => handleClick("Consumer")}>
                        <img src="src/assets/Mask group (1).png" alt="" className="w-[241px] h-[241px] object-contain" onClick={() => handleClick("Consumer")}/>
                        <h1 className='mt-[45px] text-[40px] text-white' onClick={() => handleClick("Consumer")}>Consumer</h1>
                    </div>
                </div>
                <button disabled={!role} 
                className={`absolute p-[1.94vh] pl-[4%] pr-[4%] mt-[82vh] text-[5vh] rounded-[42px] cursor-pointer hover:shadow-2xl hover:shadow-white 
                    ${role ? 'bg-white text-green-600' : 'bg-[rgb(150,150,150)] text-[rgb(200,200,200)] cursor-not-allowed'}`}
                    onClick={() => {
                        if (isFarmer) navigate("/farmerhomepage");
                    if (isConsumer) navigate("/consumerhomepage");
                    }}
                    >Start</button>

        </div>
    </> 
    
  )
}

export default LandingPage