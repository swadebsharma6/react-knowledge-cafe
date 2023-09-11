import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-300 p-4 m-4 rounded'>
            <h3 className=''>{title}</h3>
        </div>
    );
};

export default Bookmark;