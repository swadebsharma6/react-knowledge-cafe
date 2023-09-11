import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleAddToBookMark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    }, [])

  return (
    <div className='my-10 md:w-2/3'>
      <div>
      {
        blogs.map(blog => <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookMark={handleAddToBookMark}
            ></Blog>)
      }
      </div>
    </div>
  )
}

export default Blogs
