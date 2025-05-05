import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className="w-[660px] mb-[100px]">
      <div className="w-[660px] h-[466px]">
        <img src={blog.img} alt="blog" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between mt-4 mb-4 w-[530px]">
        <div className='itim-regular text-[25px] tracking-tight'>{blog.source}</div>
        <div className='joan-regular text-[25px] tracking-normal'>{blog.uploadDate}</div>
      </div>

      <div className='joan-regular text-[36px] w-[634px]'>{blog.title}</div>
      <div className='joan-regular text-[25px] text-[#5e5e5e] w-[654px] mt-2 mb-2'>{blog.content}</div>
      <a className="text-[#00CC5C] mt-2 itim-regular text-[28px] cursor-pointer hover:underline" href={blog.link} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default Blog;
