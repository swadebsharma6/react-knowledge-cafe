import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className='my-10 md:w-1/3 ml-10 '>
            <div className='text-center'>
            <h2 className='text-blue-600 font-semibold border text-2xl bg-gray-200 p-4 m-4 rounded'>Spent time on Read : {readingTime} min</h2>
            <h3 className='text-2xl font-medium bg-slate-400 m-4 p-4 rounded'>Bookmarks Blogs : {bookmarks.length}</h3>
            <div>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                    ></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

export default BookMarks;