import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='py-5 border-b-4 border-indigo-500'>
         <div className='flex justify-between items-center px-4 gap-5'>
          <h1 className='text-3xl font-bold'>Knowledge Cafe</h1> 
         <div>
         <img src={profile} alt="" />
        </div>
       </div>
        </div>
    );
};

export default Header;