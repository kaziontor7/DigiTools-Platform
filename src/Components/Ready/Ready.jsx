import React from 'react';

const Ready = () => {
    return (
        <div className='gradient'>
            <div className='text-white text-center py-14 md:py-28'>
                <h1 className='text-3xl font-extrabold md:4xl'>Ready to Transform Your Workflow?</h1>
                <p className='text-white/90 pt-4 pb-10 w-9/10 mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                <div className='flex gap-2 items-center justify-center pb-4'>
                    <div className=' bg-white rounded-full w-fit'>
                    <button className='btn text-gradient font-bold  text-base rounded-full'>Explore Products</button>
                    
                    </div>
                    <button className='btn btn-outline font-bold  text-base rounded-full'>View Pricing</button>
                    
                </div>
                <p className='text-white/80 w-9/10 mx-auto'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Ready;