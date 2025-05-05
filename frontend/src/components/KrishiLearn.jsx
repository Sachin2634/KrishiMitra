import React from 'react'
import BlogComp from './BlogComp'
import SearchBlog from './SearchBlog'

const KrishiLearn = () => {
  return (
    <div className='w-full ml-[90px] mt-[99px]'>
        <div className='text-center mb-[107px]'>
            <div className='text-[57px] jomolhari-regular text-[#006A30] mb-[31px]'>KrishiSammachar</div>
            <div className='flex text-[37px] joan-regular whitespace-pre justify-center'>Our latest <div className='text-[#006A30]'>News & Blogs</div> </div>
        </div>
        <div className='flex'>
            <BlogComp/>
            <SearchBlog/>
        </div>
    </div>
  )
}

export default KrishiLearn