import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = ({toolsPromise}) => {
    const tools = use(toolsPromise);
    const [btnState,setBtnState]= useState('products')
    return (
     <div>
        <div className='space-y-2 md:space-y-4 md:mt-28 mt-14 md:mb-10 mb-5'>
            <h1 className='textColor md:text-5xl text-3xl font-extrabold text-center'>Premium Digital Tools</h1>
            <p className='gray-color text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
            <div className='bg-white rounded-full p-0.5 drop-shadow-lg w-fit my-5 flex items-center mx-auto'>
                <button onClick={()=>setBtnState('products')} className={`${btnState === 'products' ? 'btn gradient py-3.5 px-6 font-bold text-white rounded-full' : 'btn bg-white border-none w-fit rounded-full shadow-none py-0.5 px-6 font-medium text-black' }`}>Products</button>
                <button onClick={()=>setBtnState('cart')} className={`${btnState === 'cart' ? 'btn gradient py-3.5 px-6 font-bold text-white rounded-full' : 'btn bg-white border-none w-fit rounded-full shadow-none py-0.5 px-6 font-medium text-black' }`}>Cart(2)</button>
            </div>
        </div>
        <div>
            {
                btnState === 'products' ?<div className='grid md:grid-cols-2 lg:grid-cols-3 md:w-8/10 w-9/10 gap-6 mx-auto'>{tools.map(tool=><Products  tool={tool}></Products>)} </div> : <Cart></Cart>
            }
        </div>

    </div>
    );
};

export default Shop;