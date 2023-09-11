import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookMark = (blog) =>{
    console.log('Bookmark adding soon', blog);
    const newBookmarks = [...bookmarks, blog];
    setBookMarks(newBookmarks);
  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex p-4'>
      <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </div>
  )
}

export default App
