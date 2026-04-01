import React from 'react';

const Products = ({tool}) => {
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-sm h-full">
  <div className="card-body">
    <div className='flex justify-between'>
        <div className='rounded-[50%] border border-gray-200 w-15 h-15'>
           <img className=' w-8 h-8 mx-auto my-3' src={tool.icon} alt="" />
        </div>
           <span className={`px-3 py-2.5 rounded-full font-medium text-sm ${tool.tag==='Popular'? 'badge badge-xs badge-warning' : ''}
           ${tool.tag==='New'? 'badge badge-xs badge-success' : ''} 
           ${tool.tag==='Best Seller'? 'badge badge-xs badge-info' : ''}`}>{tool.tag}</span>  
      
    </div>
    
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{tool.name}</h2>
      <p className='gray-color'>{tool.description}</p>
      <span className="text-base gray-color"><span className='textColor font-bold text-2xl'>${tool.price}</span>/{tool.period}</span>
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-base font-medium  gray-color grow">
      {tool.features.map(feature=><li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>{feature}</span>
      </li>)}
      
    </ul>
    <div className="mt-4">
      <button className="btn gradient btn-block font-bold text-white text-base rounded-full">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Products;