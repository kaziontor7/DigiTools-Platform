import React from 'react';
import Profile from '../../assets/profile.svg'
import Package from '../../assets/package.svg'
import Rocket from '../../assets/rocket.svg'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
        <div className='w-9/10 md:w-8/10 text-center  mx-auto'>
           <div>
              <h1 className='font-extrabold md:text-5xl text-3xl textColor pt-10 md:pt-20 pb-4'>Get Started in 3 Steps</h1>
              <p className='gray-color pb-5 md:pb-10'>Start using premium digital tools in minutes, not hours.</p>
       </div>
            <div className='grid md:grid-cols-3 gap-7 pb-12 md:pb-24'>
                  <div className=' p-5 bg-white rounded-2xl shadow'>
                    <div className='flex justify-between'>
                       <span></span>
                       <span className='gradient text-white p-2.5 rounded-[50%] text-sm font-bold'>01</span>
                    </div>
                    <div className='bg-purple-200 rounded-[50%] w-fit mx-auto mt-6'>
                   <img className='p-5' src={Profile} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl textColor text-center py-4'>Create Account</h2>
                    <p className='gray-color text-center pb-12'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' p-5 bg-white rounded-2xl shadow'>
                    <div className='flex justify-between'>
                       <span></span>
                       <span className='gradient text-white p-2.5 rounded-[50%] text-sm font-bold'>02</span>
                    </div>
                    <div className='bg-purple-200 rounded-[50%] w-fit mx-auto mt-6'>
                   <img className='p-5' src={Package} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl textColor text-center py-4'>Choose Products</h2>
                    <p className='gray-color text-center pb-12'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className=' p-5 bg-white rounded-2xl shadow'>
                    <div className='flex justify-between'>
                       <span></span>
                       <span className='gradient text-white p-2.5 rounded-[50%] text-sm font-bold'>03</span>
                    </div>
                    <div className='bg-purple-200 rounded-[50%] w-fit mx-auto mt-6'>
                   <img className='p-5' src={Rocket} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl textColor text-center py-4'>Start Creating</h2>
                    <p className='gray-color text-center pb-12'>Download and start using your premium tools immediately.</p>
                </div>
              
            </div>
        </div>
        </div>
    );
};

export default GetStarted;