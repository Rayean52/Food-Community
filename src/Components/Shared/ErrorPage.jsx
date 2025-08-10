import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#399918] mb-3">
                404 - Page Not Found
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mb-6">
                Oops! It looks like the page you’re trying to visit doesn’t exist.
                Maybe you mistyped the URL or the page has been moved.
                Let’s get you back to something tasty!
            </p>

            {/* Image */}
            <img
                className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md mb-6"
                src="https://i.ibb.co.com/m5S71d8D/pasted-image-0-2023-12-21-T171213-083.png"
                alt="404 Not Found"
            />

            {/* Back to Home Button */}
            <Link
                to="/"
                className="btn btn-primary text-black bg-[#399918] text-sm sm:text-base px-6 py-2 rounded-full shadow hover:scale-105 transition-transform duration-300"
            >
                🍽 Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;