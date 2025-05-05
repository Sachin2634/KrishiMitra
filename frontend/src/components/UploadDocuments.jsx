import React from "react";

const UploadDocuments = () => {
  return (
    <div className="max-w-[69.44vw] w-[69vw] pl-[1.39vw] pr-[1.39vw] pt-[2vw] pb-[2vw] ml-[9.03vw] mr-[9vw] mb-12 border shadow-xl">
      <div className="jomolhari-light text-[30px] border-b-[1px] w-[19vw] mb-[2vw]">
        Upload Documents
      </div>
      <div className="mt-[2.5vw]">
        <div className="joan-regular text-[23px] mb-[3vw]">
          Aadhar / ID Proof
        </div>
        <label className="block relative w-[23vw]">
          <input
            type="file"
            className="opacity-0 absolute left-0 top-0 h-full w-full cursor-pointer"
          />
          <div className="border-b-[2px] border-black w-[21vw] h-[2vw] cursor-pointer"></div>
        </label>
      </div>
    </div>
  );
};

export default UploadDocuments;