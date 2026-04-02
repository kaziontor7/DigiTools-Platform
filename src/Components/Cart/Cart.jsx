import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

const Cart = ({cartProduct,setCartProduct}) => {
    const totalPrice = cartProduct.reduce((sum,product)=>sum+product.price, 0)
    const deleteSelected = (cart)=>{
        const filteredCart = cartProduct.filter(filtered=>filtered.name!==cart.name)
        setCartProduct(filteredCart)
    }
    return (
        <div className='w-9/10 md:w-8/10 mx-auto'>
            <div className='rounded-2xl shadow p-10 mb-14 md:mb-28'>
                <h3 className='text-2xl textColor font-bold pb-6'>Your Cart</h3>
                
                {cartProduct.length === 0 ? <div className='text-center '>
                    <div className='flex items-center justify-center bg-gray-100 w-fit mx-auto rounded-[50%]'>
                        <FaShoppingBasket className='w-14 h-14 p-2.5 rotate-30 text-purple-400'></FaShoppingBasket>
                    </div>
                   
                   <p className='textColor text-2xl font-semibold py-3'>Your cart is empty!</p>
                   <p className='gray-color '>Looks like you haven't added anything to your cart yet</p>
                </div> : cartProduct.map(cart => {
                    return(
                        <div>
                    <div className='flex items-center md:justify-between justify-center max-sm:flex-col bg-[#F9FAFC] p-5 rounded-2xl mb-5 max-sm:gap-1.5'>
                     <div className='flex items-center gap-4'>
                        <span>
                         <div className='rounded-[50%] border border-gray-200 w-15 h-15 bg-white'>
           <img className=' w-8 h-8 mx-auto my-3' src={cart.icon} alt="" />
        </div>
                        </span>
                        <span>
                        <h3 className='font-semibold text-xl textColor'>{cart.name}</h3>
                        <p className='gray-color'>${cart.price}</p>
                        </span>
                    </div>
                    <div>
                        <button onClick={()=>deleteSelected(cart)} className='btn text-[#FF3980] font-bold btn-outline border-none '> Remove</button>
                    </div>
                    </div>
                    
                </div>
                    )
                })}
                {cartProduct.length !==0 && <div> <div className='flex items-center justify-between pb-6'>
                        <p className='gray-color'>Total:</p>
                        <p className='font-bold text-2xl'>${totalPrice}</p>
                    </div>
                    <button className='btn btn-block gradient font-bold text-white  rounded-full' >Proceed To Checkout</button> </div>}
                
            </div>
        </div>
    );
};

export default Cart;