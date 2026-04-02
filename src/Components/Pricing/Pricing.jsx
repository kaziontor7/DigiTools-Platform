import React from 'react';

const Pricing = () => {
    return (
        <div className='w-9/10 md-8/10  mx-auto pb-12 md:pb-28'>
            <div className='text-center space-y-4 pt-14 md:pt-28 pb-5 md:pb-10'>
                <h2 className='md:text-5xl text-3xl font-extrabold textColor'>Simple, Transparent Pricing</h2>
                <p className='gray-color'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-7'>
            <div className="card bg-base-100 shadow-sm rounded-2xl">
  <div className="card-body">
    <div className="">
      <h2 className="text-2xl font-bold pb-2">Starter</h2>
      <p className='gray-color pb-6'>Perfect for getting started</p>
      <span className="text-xl gray-color"><span className='text-4xl font-bold textColor'>$0</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-base gray-color grow">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn gradient btn-block font-bold text-white text-base rounded-full">Get Started Free</button>
    </div>
  </div>
            </div>
            <div className="card bg-base-100 shadow-sm rounded-2xl gradient">
  <div className="card-body text-white ">
    <div className='flex items-center justify-center'>
        <span className="badge badge-xs text-[#BB4D00] absolute -top-2.5  bg-[#FEF3C6] font-medium text-sm px-3 py-2.5 rounded-full">Most Popular</span>
    </div>
    
    <div className="">
      <h2 className="text-2xl font-bold pb-2">Pro</h2>
      <p className='text-white/90 pb-6'>Best for professionals</p>
      <span className="text-xl"><span className='text-4xl font-bold'>$29</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-base">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-6 bg-white rounded-full">
      <button className="btn text-gradient btn-block font-bold  text-base rounded-full">Start Pro Trial</button>
    </div>
  </div>
            </div>
            <div className="card bg-base-100 shadow-sm rounded-2xl">
  <div className="card-body">
    <div className="">
      <h2 className="text-2xl font-bold pb-2">Enterprise</h2>
      <p className='gray-color pb-6'>For teams and businesses</p>
      <span className="text-xl gray-color"><span className='text-4xl font-bold textColor'>$99</span>/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-base gray-color grow">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn gradient btn-block font-bold text-white text-base rounded-full">Contact Sales</button>
    </div>
  </div>
            </div>
            </div>
        </div>
    );
};

export default Pricing;