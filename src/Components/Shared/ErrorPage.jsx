import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto justify-center items-center min-h-screen space-y-5 text-center px-4'>
            <h1 className='text-2xl text-gray-700 sm:text-3xl font-semibold'>Page Not Found</h1>
            <img
                className='rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
                src="https://i.ibb.co/jPC6nVV1/oops-404-error-with-broken-robot-concept-illustration-114360-5529.jpg"
                alt=""
            />
            <Link to={'/'} className='btn btn-primary text-sm sm:text-base'>
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;