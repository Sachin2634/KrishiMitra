// import React, { useState } from 'react';
// import SellerNavbar from '../components/SellerNavbar';
// import Footer from '../components/Footer';
// import Faqimg from '../assets/image (4).png';
// import Farmfaq from '../assets/Group 27.png';

// const faqData = [
//   "How do I create my account?",
//   "How do I list my crops for sale?",
//   "How can I update my farm location?",
//   "What payment methods are supported?",
//   "How do I get buyer contact details?",
//   "How secure is my data on KrishiMitra?",
//   "How can I reach customer support?",
//   "What are the delivery options?",
//   "How do I delete my account?",
// ];

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(prev => (prev === index ? null : index));
//   };

//   return (
//     <div>
//       <SellerNavbar />
//       <div>
//         <img src={Faqimg} alt="FAQ Banner" className='mt-[51px] ml-[5.52vw] mb-[91px] w-[89vw]' />
//         <div className='grid grid-cols-1 md:grid-cols-2 mb-[100px]'>
//           {/* FAQ List */}
//           <div className='max-w-[640px] h-[903px] ml-[7vw] md:ml-[6vw] mr-[2.26vw] mb-[40px] md:mb-0 bg-[#EDEDED] rounded-[19px] 
//               pl-[14px] pr-[14px] pt-[30px] pb-[53px] overflow-auto no-scrollbar'>

//             {faqData.map((question, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-500 w-[95.625%] ${openIndex === index ? 'h-[153px] bg-[#00cc5c]' : 'h-[61px] bg-white'} text-[24px] joan-regular rounded-[19px] mb-[36px] pl-[25px] pt-[15px] pr-[20px] cursor-pointer relative`}
//                 onClick={() => handleToggle(index)}
//               >
//                 <div className={`flex justify-between items-start pr-[10px]`}>
                  
//                   {question}
//                   <button className='text-black font-bold text-[20px]  text-justify-center p-0 bg-[#00CC5C] rounded-full w-[27px] h-[27px]'>
//                     {openIndex === index ? '–' : '+'}
//                   </button>
//                 </div>
//                 {openIndex === index && (
//                   <div className='mt-[15px] text-[18px] text-[#444]'>
//                     {/* Sample Answer - customize per question */}
//                     This is a sample answer for: "{question}". You can edit these responses according to your platform’s features.
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Ask a Question Form */}
//           <div className='max-w-[601px] h-[903px] ml-[10vw] md:ml-[2.26vw] shadow-xl flex flex-col justify-center'>
//             <img src={Farmfaq} alt="" className='mt-[48px] ml-[52px] h-[344px] mb-[63px]' />
//             <div className='text-[28px] font-semibold itim-regular text-center mb-[15px]'>ANY QUESTION</div>
//             <div className='text-[20px] joan-regular text-center mb-[66px]'>
//               You can ask anything you want to know about us
//             </div>
//             <div className='ml-[76px]'>
//               <div className='text-[22px] joan-regular'>Let me know</div>
//               <input
//                 type="text"
//                 placeholder='Enter Here'
//                 className='bg-[#E3E3E3] text-[#767676] w-[449px] h-[67px] p-[20px] text-[22px] rounded-[8px] inter-regular'
//               />
//             </div>
//             <button className='mt-[54px] w-[136px] h-[50px] rounded-[11px] bg-[#00CC5c] text-white ml-[230px] joan-regular text-[21px]'>Send</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from 'react';
import SellerNavbar from '../components/SellerNavbar';
import Footer from '../components/Footer';
import Faqimg from '../assets/image (4).png';
import Farmfaq from '../assets/Group 27.png';

const faqData = [
  "How do I create my account?",
  "How do I list my crops for sale?",
  "How can I update my farm location?",
  "What payment methods are supported?",
  "How do I get buyer contact details?",
  "How secure is my data on KrishiMitra?",
  "How can I reach customer support?",
  "What are the delivery options?",
  "How do I delete my account?",
];

const faqAnswers = [
  "To create your account, click on 'Sign Up' and fill in the required details such as your name, email, and password.",
  "Go to your dashboard, click on 'Add New Crop', enter the crop details, and hit submit.",
  "Navigate to your profile settings and update your farm location using the map or manual address entry.",
  "We support UPI, bank transfer, and major digital wallets for seamless transactions.",
  "Buyer contact details are visible after a confirmed interest in your listed crop.",
  "We use encrypted data storage and secure connections to ensure your personal and farming data is safe.",
  "You can reach us via the 'Help' section or email us at support@krishimitra.in.",
  "We offer pickup from farm, third-party logistics, and direct farmer-to-buyer delivery.",
  "Go to account settings and click on 'Delete Account'. Follow the confirmation steps to permanently remove your account.",
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      <SellerNavbar />
      <div>
        <img src={Faqimg} alt="FAQ Banner" className='mt-[51px] ml-[5.52vw] mb-[91px] w-[89vw]' />
        <div className='grid grid-cols-1 md:grid-cols-2 mb-[100px]'>
          {/* FAQ List */}
          <div className='max-w-[640px] h-[850px] ml-[7vw] md:ml-[6vw] mr-[2.26vw] mb-[40px] md:mb-0 bg-[#EDEDED] rounded-[19px] 
              pl-[20px] pr-[14px] pt-[30px] pb-[53px] overflow-auto no-scrollbar'>
              <div className='w-[612px] h-[740px] overflow-auto no-scrollbar'>
            {faqData.map((question, index) => (
              <div
                key={index}
                className={`transition-all duration-500 w-[95.625%] ${openIndex === index ? 'h-[153px] bg-[#00cc5c]' : 'h-[61px] bg-white'} text-[24px] joan-regular rounded-[19px] mb-[36px] pl-[25px] pt-[15px] pr-[20px] cursor-pointer relative`}
                onClick={() => handleToggle(index)}
              >
                <div className={`flex justify-between items-start pr-[10px]`}>
                  {question}
                  <button className='text-black font-bold text-[19px] text-justify-center p-0 bg-green-500 rounded-full w-[27px] h-[27px]'>
                    {openIndex === index ? '–' : '+'}
                  </button>
                </div>
                {openIndex === index && (
                  <div className='mt-[15px] text-[18px]'>
                    {faqAnswers[index]}
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>

          {/* Ask a Question Form */}
          <div className='max-w-[601px] h-[903px] ml-[10vw] md:ml-[2.26vw] shadow-xl flex flex-col justify-center'>
            <img src={Farmfaq} alt="" className='mt-[48px] ml-[52px] h-[344px] mb-[63px]' />
            <div className='text-[28px] font-semibold itim-regular text-center mb-[15px]'>ANY QUESTION</div>
            <div className='text-[20px] joan-regular text-center mb-[66px]'>
              You can ask anything you want to know about us
            </div>
            <div className='ml-[76px]'>
              <div className='text-[22px] joan-regular'>Let me know</div>
              <input
                type="text"
                placeholder='Enter Here'
                className='bg-[#E3E3E3] text-[#767676] w-[449px] h-[67px] p-[20px] text-[22px] rounded-[8px] joan-regular'
              />
            </div>
            <button className='mt-[54px] w-[136px] h-[50px] rounded-[11px] bg-[#006A30] text-white ml-[230px] joan-regular text-[21px]'>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
