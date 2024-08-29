import React from 'react';

const Footer1 = () => {
  return (
    <div className='sm:flex flex-col  items-center gap-2 justify-center bg-orange-600 text-white p-6 '>
      <span className='text-center text-sm font-semibold italic'>
        Get updates from basic styles to the latest fashion! Enjoy extra savings, exclusive coupons, and tons of everyday deals DIRECTLY to your inbox.
      </span>
      <div className='flex flex-col gap-2 md:flex-row items-center w-full max-w-md'>
        <input
          type="text"
          placeholder='Enter your email address here'
          className='w-full text-black md:w-3/4 p-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        <button className='w-full  md:w-1/4 bg-yellow-400 text-white border border-yellow-400 p-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300'>
          I'm In
        </button>
      </div>
    </div>
  );
}

export default Footer1;
