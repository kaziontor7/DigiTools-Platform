import React from 'react';

const Stats = () => {
    return (
       <div className='gradient flex items-center justify-center gap-4 md:gap-10 divide-x divide-white/50 md:py-14 py-8'>
        <div className="text-white md:pr-10 pr-4">
    <p className='font-extrabold md:text-6xl text-2xl'>50K+</p>
    <p className='font-medium text-xl md:text-2xl'>Active Users</p>
    
  </div>
        <div className="text-white md:pr-10 pr-4">
    <p className='font-extrabold md:text-6xl text-2xl'>200+</p>
    <p className='font-medium text-xl md:text-2xl'>Premium Tools</p>
  </div>
        <div className="text-white">
    <p className='font-extrabold md:text-6xl text-2xl'>4.9</p>
    <p className='font-medium text-xl md:text-2xl'>Rating</p>
  </div>
      </div>
    );
};

export default Stats;