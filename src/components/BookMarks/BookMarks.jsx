import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({bookmarks}) => {
    return (
        <div className='my-10 md:w-1/3 ml-10 '>
            <div className='text-center'>
            <h3 className='text-2xl font-medium bg-slate-400 m-4 p-4 rounded'>Bookmarks Blogs : {bookmarks.length}</h3>
            <div>
            {
                bookmarks.map(bookmark => <Bookmark
                    bookmark={bookmark}
                    key={bookmark.id}
                    ></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

export default BookMarks;