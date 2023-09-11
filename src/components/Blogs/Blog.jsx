import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    // console.log(blog)
    const {id, title,cover_img, author_name, author_img, posted_date,
      hashtags,   reading_time} = blog;
    return (
        <div className='mb-10'>
            <img className='w-full rounded' src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center py-4'>
             <div className='flex items-center'>
             <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
             <div className='ml-6'>
             <h4 className='text-xl font-bold text-black'>{author_name}</h4>
             <h5 className='text-base text-gray-500 font-medium'>{posted_date}</h5>
             </div>
             </div>

             <div>
              <h5> <span>{reading_time} min read</span>
              <button onClick={()=> handleAddToBookMark(blog)} className='ml-4'>{<FaBookmark className='w-6 h-6 text-red-600'></FaBookmark>}</button>
              </h5>
              
             </div>
            </div>
           <h3 className='text-3xl font-bold text-black'>{title}</h3> 
           <h4>
           {
            hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span> )
           }
           </h4>
           <div className='my-5'>
           <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-blue-600 font-bold underline'>Mark as Read</button>
           </div>
        </div>
    );
};

export default Blog;