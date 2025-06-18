import React from 'react';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {


    const foods = useLoaderData();
    const {food_name, food_img, quantity, expiry_date, location, availability, notes, donor_name, donor_email} = foods;

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={food_img}
                        alt=""
                        className="object-cover w-full lg:absolute h-full lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    {/* <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div> */}
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        {food_name}
                    </h5>
                    <p className="mb-5 text-gray-800">
                       Expiry Date: {expiry_date}
                    </p>
                    <p className="mb-5 text-gray-800">
                       Location: {location}
                    </p>
                    <p className="mb-5 text-gray-800">
                       Quantity: {quantity}
                    </p>
                    <p className="mb-5 text-gray-800">
                        Availability: {availability}
                    </p>
                    <p className="mb-5 text-gray-800">
                        Donor Name : {donor_name}
                    </p>
                    <p className="mb-5 text-gray-800">
                        Donor Email : {donor_email}
                    </p>
                    <p className="mb-5 text-gray-800">
                        Donor's Comment : {notes}
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;