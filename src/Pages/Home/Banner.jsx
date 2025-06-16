import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-[url('https://i.ibb.co/r2CV0Cgp/chicken-skewers-with-slices-sweet-peppers-dill.jpg')] bg-cover bg-center max-h-screen mt-15">
            <div className=" bg-opacity-40 w-full h-full">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">


                        {/* Left Side Text */}
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign up for updates
                                </h3>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className="block mb-2 font-medium">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="John"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="lastName" className="block mb-2 font-medium">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Doe"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 font-medium">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john.doe@example.org"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full h-12 px-6 font-medium text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none"
                                    >
                                        Subscribe
                                    </button>
                                    <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            </div>
                        </div>




                        {/* Right Side Form */}
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-white">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a <span className="text-teal-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-300 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                            <a
                                href="/"
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-600"
                            >
                                Learn more
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
                </div>
            </div>
        </div>

    );
};

export default Banner;