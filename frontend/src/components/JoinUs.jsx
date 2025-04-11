import React from 'react'
// import JoinUsBenefits from './JoinUsBenefits'
import img1 from '../assets/image (1).png'
import img2 from '../assets/image (2).png'
import img3 from '../assets/image (3).png'
const JoinUs = () => {
  return (
    <div className='w-full h-auto bg-[#FFFFFF] flex flex-col md:flex-row border-b-[2px] scale-90 md:scale-100'>
        <div className='pt-[80px] pl-[50px] md:pl-[80px] md:p-[80px] md:pt-[442px] md:pb-[437px] jomolhari-light text-[51px] text-[#006A30] font-black  text-center '>
          Why join us?</div>
        <div className='ml-[80px] md:ml-[259px] mt-[100px] mb-[100px]'>
            <div className='w-[85vw] md:w-[680px] h-[293px] bg-[#00CC5C] mb-[19px] rounded-[20px] flex'>
              <img src={img1} alt="" className='w-[168px] h-[168px] translate-x-[-50%] mt-[38px]'/>
              <div>
                <h2 className='jomolhari-light text-[#FFFFFF] text-[44px] w-[329px] h-[108px] text-center mt-[29px] leading-tight'>
                  Market Price Tracking</h2>
                <ul className='list-disc mt-[11px] w-[399px] h-[95px]'>
                  <li className='joan-regular text-[20px] '>Show live market rates for crops and livestock.</li>
                  <li className='joan-regular text-[20px] '>Suggest the best time and place to sell produce.</li>
                </ul>
              </div>
            </div>
            <div className='w-[85vw] md:w-[680px] h-[293px] bg-[#00CC5C] mb-[19px] rounded-[20px] flex'>
              <img src={img2} alt="" className=' translate-x-[-50%] w-[153px] h-[153px] mt-[69px]'/>
              <div>
                <h2 className='jomolhari-light text-[#FFFFFF] text-[44px] w-[400px] h-[102px] text-center mt-[6px] leading-tight'>Community and Knowledge Sharing</h2>
                <ul className='list-disc  mt-[40px] w-[426px] h-[95px]'>
                  <li className='joan-regular text-[20px]'>Include a forum for farmers to exchange experiences.</li>
                  <li className='joan-regular text-[20px]'>Provide access to expert advice and best farming practices through blogs.</li>
                </ul>
              </div>
            </div>
            <div className='w-[85vw] md:w-[680px] h-[293px] bg-[#00CC5C] mb-[19px] rounded-[20px] flex'>
              <img src={img3} alt="" className=' translate-x-[-50%] w-[132px] h-[132px] mt-[69px]'/>
              <div>
                <h2 className='jomolhari-light text-[#FFFFFF] text-[44px] w-[400px] h-[102px] text-center mt-[6px] leading-tight'>Machinery and Equipment Rental</h2>
                <ul className='list-disc  mt-[33px] w-[426px] h-[95px]'>
                  <li className='joan-regular text-[20px]'>Connect farmers with nearby equipment rental services.</li>
                  <li className='joan-regular text-[20px]'>Allow sharing or renting out machinery within the community.</li>
                </ul>
              </div>
            </div>
        </div>

    </div>
  )
}

export default JoinUs

// import React from 'react';
// import img1 from '../assets/image (1).png';
// import img2 from '../assets/image (2).png';
// import img3 from '../assets/image (3).png';

// const JoinUs = () => {
//   return (
//     <div className="w-full h-auto bg-[#FFFFFF] flex flex-col items-center px-4">
//       <div className="text-[51px] text-[#006A30] font-black text-center py-16">
//         Why join us?
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Card 1 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex flex-col items-center p-6 max-w-full">
//           <img src={img1} alt="" className="w-[120px] h-[120px] mb-4" />
//           <h2 className="text-[#FFFFFF] text-[32px] text-center leading-tight">
//             Market Price Tracking
//           </h2>
//           <ul className="list-disc mt-4 text-[18px] text-white pl-5">
//             <li>Show live market rates for crops and livestock.</li>
//             <li>Suggest the best time and place to sell produce.</li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex flex-col items-center p-6 max-w-full">
//           <img src={img2} alt="" className="w-[120px] h-[120px] mb-4" />
//           <h2 className="text-[#FFFFFF] text-[32px] text-center leading-tight">
//             Community and Knowledge Sharing
//           </h2>
//           <ul className="list-disc mt-4 text-[18px] text-white pl-5">
//             <li>Include a forum for farmers to exchange experiences.</li>
//             <li>Provide access to expert advice and best farming practices.</li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex flex-col items-center p-6 max-w-full">
//           <img src={img3} alt="" className="w-[120px] h-[120px] mb-4" />
//           <h2 className="text-[#FFFFFF] text-[32px] text-center leading-tight">
//             Machinery and Equipment Rental
//           </h2>
//           <ul className="list-disc mt-4 text-[18px] text-white pl-5">
//             <li>Connect farmers with nearby equipment rental services.</li>
//             <li>Allow sharing or renting out machinery within the community.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;



// import React from 'react';
// import img1 from '../assets/image (1).png';
// import img2 from '../assets/image (2).png';
// import img3 from '../assets/image (3).png';

// const JoinUs = () => {
//   return (
//     <div className="w-full h-auto bg-[#FFFFFF] flex items-center px-4">
//       {/* Heading */}
//       <div className="text-[51px] text-[#006A30] font-black text-center py-16">
//         Why join us?
//       </div>

//       {/* Cards Container */}
//       <div className="flex flex-col items-center w-full max-w-[680px] space-y-5">
//         {/* Card 1 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex items-center p-6 w-full">
//           <img src={img1} alt="" className="w-[120px] h-[120px] mr-6" />
//           <div>
//             <h2 className="text-[#FFFFFF] text-[32px] text-left leading-tight">
//               Market Price Tracking
//             </h2>
//             <ul className="list-disc mt-2 text-[18px] text-white pl-5">
//               <li>Show live market rates for crops and livestock.</li>
//               <li>Suggest the best time and place to sell produce.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex items-center p-6 w-full">
//           <img src={img2} alt="" className="w-[120px] h-[120px] mr-6" />
//           <div>
//             <h2 className="text-[#FFFFFF] text-[32px] text-left leading-tight">
//               Community and Knowledge Sharing
//             </h2>
//             <ul className="list-disc mt-2 text-[18px] text-white pl-5">
//               <li>Include a forum for farmers to exchange experiences.</li>
//               <li>Provide access to expert advice and best farming practices.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-[#00CC5C] rounded-[20px] flex items-center p-6 w-full">
//           <img src={img3} alt="" className="w-[120px] h-[120px] mr-6" />
//           <div>
//             <h2 className="text-[#FFFFFF] text-[32px] text-left leading-tight">
//               Machinery and Equipment Rental
//             </h2>
//             <ul className="list-disc mt-2 text-[18px] text-white pl-5">
//               <li>Connect farmers with nearby equipment rental services.</li>
//               <li>Allow sharing or renting out machinery within the community.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;

