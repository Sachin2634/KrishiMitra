import React from 'react'
import phone from "../assets/Vector (1).png"
import whatsapp from "../assets/Vector (2).png"
import mail from "../assets/Vector (3).png"
import location from "../assets/Group.png"


const ContactUscomp = () => {
  return (
    <div className='bg-white'>
      <div style={
            {backgroundImage: "url('src/assets/Rectangle 55.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100vw'
        }} className='jomolhari-regular bg-center h-[343px] text-white text-[98px] text-center py-[146px] mb-[65px]'>
          Contact Us</div>

      <div className='flex flex-col md:flex-row'>
        <div className='bg-[#00CC5C] w-[580px] h-[1138px] ml-[80px] mr-[101px] mb-[260px] flex flex-col items-center'>
          <h1 className='itim-regular text-[51px] mt-[85px]'>
            Get in Touch</h1>
          <div>
            <h3 className='joan-regular text-[32px] mt-[59px] mb-[21px]'>
              Name</h3>
            <input type="text" className='w-[488px] h-[76px] bg-white'/>
          </div>
          <div>
            <h3 className='joan-regular text-[32px] mt-[28px] mb-[21px]'>
              Email</h3>
            <input type='email' className='w-[488px] h-[76px] bg-white'/>
          </div>
          <div>
            <h3 className='joan-regular text-[32px] mt-[28px] mb-[21px]'>
              Message</h3>
            <input type="text" className='w-[488px] h-[272px] bg-white'/>
          </div>
          <button className='joan-regular w-[220px] h-[76px] text-center text-[32px] bg-[white] mt-[90px] rounded-[32px]'>Send</button>
        </div>
        <div className='bg-white w-[601px] h-[766px] shadow-xl grid grid-cols-2'>
          <div className='w-[198px] h-[198px] ml-[49px] mr-[107px] mt-[138px] mb-[94px] bg-[#00CC5C] text-center'>
            <img src={phone} alt="" className='ml-[67px] mt-[23px] mb-[8px]'/>
            <div className='joan-regular text-[21px] font-extrabold'>
              Phone Number</div>
          </div>
          <div className='w-[198px] h-[198px] ml-[49px] mr-[107px] mt-[138px] mb-[94px] bg-[#00CC5C] text-center'>
            <img src={whatsapp} alt="" className='ml-[67px] mt-[23px] mb-[8px]'/>
            <div className='joan-regular text-[21px]'>
              Whatsapp</div>
          </div>
          <div className='w-[198px] h-[198px] ml-[49px] mr-[107px] mb-[138px] bg-[#00CC5C] text-center'>
          <img src={mail} alt="" className='ml-[73px] mt-[37px] mb-[8px]'/>
          <div className='joan-regular text-[21px]'>
            Gmail</div>
          </div>
          <div className='w-[198px] h-[198px] ml-[49px] mr-[107px] mb-[138px] bg-[#00CC5C] text-center'>
          <img src={location} alt="Mail" className='ml-[67px] mt-[23px] mb-[8px]'/>
          <div className='joan-regular text-[21px]'>
            Location</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUscomp