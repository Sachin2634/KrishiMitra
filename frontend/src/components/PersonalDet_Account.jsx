import React from 'react'

const PersonalDet_Account = () => {
  return (
    <>
      <div className='max-w-[69.44vw] w-[69vw] pl-[1.39vw] pt-[1.46vw] pr-[18.82vw] pb-[4.58vw] ml-[9.03vw] mr-[9vw] border shadow-xl'>
        <div className='jomolhari-light text-[30px] border-b-[1px] w-[15.21vw] mb-[3.05vw]'>
          Personal Details
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className='text-[25px] joan-regular'>First Name</div>
            <input
              type="text"
              placeholder='First Name'
              className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'
            />
          </div>
          <div>
            <div className='text-[25px] joan-regular'>Last Name</div>
            <input
              type="text"
              placeholder='Last Name'
              className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'
            />
          </div>
          <div>
            <div className='text-[25px] joan-regular'>Phone Number</div>
            <input
              type="text"
              placeholder='Phone Number'
              className='border-b-[1px] mr-[17.43vw] joan-regular text-[17px] w-[15.90vw]'
            />
          </div>
          <div>
            <div className='text-[25px] joan-regular'>Email Id</div>
            <input
              type="email"
              placeholder='Email Id'
              className='border-b-[1px] mr-[17.43vw] joan-regular text-[17px] w-[15.90vw]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDet_Account