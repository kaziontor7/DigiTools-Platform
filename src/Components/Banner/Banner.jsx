import React from 'react';
import Circle from '../../assets/circle.svg'
import Play from '../../assets/play.png'
import Hero from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='md:w-8/10 mx-auto flex items-center max-sm:flex-col gap-3.5 my-9 md:my-20 w-9/10'>
           <div className='space-y-4'>
            <span className='flex items-center gap-1 bg-[#E1E7FF] w-fit py-2 px-4 rounded-[1000px] font-medium'>
                <img src={Circle} alt="" />
                <p className='text-gradient'>New: AI-Powered Tools Available</p>
            </span>
            <h1 className='md:text-7xl text-4xl font-extrabold textColor'>Supercharge Your Digital Workflow</h1>
            <p className='text-lg gray-color '>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today
            Explore Products</p>
            <div className='flex items-center gap-3'>
                <button className="btn gradient text-base font-bold text-white rounded-[10000px] py-5">Explore Products</button>
                <div className='p-0.5 gradient rounded-full w-fit '>
                    <div className='bg-white rounded-full px-5 py-2 flex items-center gap-1 hover:bg-gray-100 hover:cursor-pointer'>
                    <img src={Play} alt="" />
                    <button className="text-gradient font-bold ">Get Started</button>
                    </div>
                </div>
             </div>
         </div>
         <div>

         </div>
          <img src={Hero} alt="" />
        </div>
    );
};

export default Banner;