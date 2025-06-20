import React from 'react';

const States = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Be</span>
          </span>{' '}
            Part of a Food Movement That Gives, Shares & Enjoys
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Whether you're looking for a warm meal, sharing what you can, or ordering a delicious dish — our food community brings everyone together. Join a system built on kindness, connection, and real flavor. Explore the roles below to see how you can take part.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img className='w-14' src="https://i.ibb.co/gMmN8x1j/cloche-10204857.png" alt="" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Need a Meal? We've Got You Covered</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            If you're in need, our community is here to help. Browse available meals offered by kind donors and caring home chefs. With just a few clicks, you can request food delivered to your doorstep — no questions asked.
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img className='w-14' src="https://i.ibb.co/2DFvB97/food-15841137.png" alt="" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Share a Meal. Spread Kindness.</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Have extra food or love to cook for others? Become a donor and make a real difference. Your contribution can brighten someone’s day and reduce food waste — one plate at a time. Giving has never tasted this good.
          </p>
          
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img className='w-14' src="https://i.ibb.co/m5N5pCv8/fast-food-11782928.png" alt="" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Order Meals Made with Heart</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Want something special? Our community offers unique, homemade meals crafted with care. Order from passionate cooks near you and enjoy food that’s authentic, affordable, and full of flavor.
          </p>
          
        </div>
      </div>
    </div>
    );
};

export default States;