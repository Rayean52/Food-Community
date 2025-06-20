import React from 'react';

const PaidFoods = ({bottomRef}) => {
    return (
        <div ref={bottomRef} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        Order Delicious 
                        <br className="hidden md:block" />
                         Meals Prepared Just for You...
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
                <p className="text-gray-700 lg:text-sm lg:max-w-md">
                    "Explore a curated collection of paid food offerings crafted by talented home cooks and food creators in our community. Whether you're craving a hearty homemade dish or a special treat, you can place your order directly and enjoy fresh, flavorful meals delivered with care."
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://i.ibb.co/5WhDzPS5/red-lentil-soup-with-slice-lemon-breadcrumbs.jpg"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                A warm and comforting bowl of flavorful broth filled with tender vegetables and spices.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://i.ibb.co/nsTQVvcF/fried-chicken-breast-with-vegetables.jpg"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                A juicy, perfectly grilled cut of beef with a rich, savory flavor.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://i.ibb.co/prZh0PXD/sauteed-mushrooms-with-pumpkin-sweet-pepper.jpg"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                 A fresh and earthy mix of marinated mushrooms, crisp greens, and tangy dressing.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://i.ibb.co/N8msqW0/side-view-baked-potatoes-with-lamb-meat-vegetables-clay-bowl-black-table.jpg"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                Tender, spiced chicken pieces grilled on skewers for a smoky, mouthwatering taste.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <a
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200"
                >
                    Order Now
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default PaidFoods;