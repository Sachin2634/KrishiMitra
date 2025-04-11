import React, { useState } from 'react';
import { Link } from 'react-router';
const faqData = [
  { question: 'How is commission calculated?', answer: 'Commission is calculated based on predefined percentage slabs agreed upon for each sale.' },
  { question: 'How do I receive payments?', answer: 'Payments are directly deposited into your bank account at the end of each billing cycle.' },
  { question: 'Are there any additional costs?', answer: 'No, there are no hidden charges. Everything is included in the initial agreement.' }
];

const Faq_Commisions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col items-center bg-[#00CC5C]/50'>
      <h1 className='text-[69px] text-[#006A30] mt-[59px] mb-[92px]'>FAQ Section</h1>
      <div className='mb-[115px]'>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-700 w-[748px] ${
                isOpen ? 'h-[153px] bg-[#00CC5C]' : 'h-[61px] bg-white'
              } text-[24px] joan-regular rounded-[19px] mb-[36px] pl-[33px] pt-[15px] cursor-pointer relative overflow-hidden`}
            >
              <div className="flex justify-between pr-[33px]">
                {faq.question}
                <button
                  className={`font-bold text-[20px] text-center p-0 rounded-[100%] w-[25px] h-[25px] ${
                    isOpen ? ' bg-green-500' : 'bg-green-500'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </button>
              </div>
              {isOpen && (
                <p className="mt-[20px] text-[18px] pr-[33px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <Link to='/faq'>
      <button className="p-[23px] pl-[51px] pr-[51px] bg-[#006A30] text-[29px] text-white rounded-[45px] cursor-pointer mb-[109px]">
        More Questions
      </button>
      </Link>
    </div>
  );
};

export default Faq_Commisions;
