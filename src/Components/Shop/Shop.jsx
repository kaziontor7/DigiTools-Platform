import React, { use } from 'react';

const Shop = ({toolsPromise}) => {
    const tools = use(toolsPromise);
    console.log(tools)
    return (
     <div>
        <div className='space-y-2 md:space-y-4'>
            <h1 className='textColor md:text-5xl text-3xl font-extrabold text-center'>Premium Digital Tools</h1>
            <p className='gray-color text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity. </p>
            <div className='bg-white rounded-full p-0.5 drop-shadow-lg w-fit my-5 flex items-center mx-auto'>
                <button className='btn gradient py-3.5 px-6 font-bold text-white rounded-full'>Products</button>
                <button className='  py-0.5 px-6 font-medium text-black '>Cart(2)</button>
            </div>
        </div>
    </div>
    );
};

export default Shop;