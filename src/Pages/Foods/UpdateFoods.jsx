import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateFoods = () => {

    const foodsData = useLoaderData();
    const {_id, food_img, food_name, quantity, expiry_date, donor_email, availability, location, donor_name, notes} = foodsData;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());

        fetch(`https://food-share-server-5lo9nkaxg-abdullah-rayeans-projects.vercel.app/foods/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="w-9/12 mx-auto my-12 p-4">
            <form onSubmit={handleSubmit}>
                {/* Food Name */}
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        defaultValue={food_name}
                        type="text"
                        name="food_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=' '
                        required
                    />
                    <label
                        htmlFor="Food Name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food Name
                    </label>
                </div>

                {/* Food Image */}
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        defaultValue={food_img}
                        type="url"
                        name="food_img"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="Food Url"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food Image Url
                    </label>
                </div>

                {/* Food Quantity */}
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        defaultValue={quantity}
                        type="number"
                        name="quantity"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="quantity"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food Quantity
                    </label>
                </div>

                {/* Pickup Location */}
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            defaultValue={location}
                            type="text"
                            name="location"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Location"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Pickup Location
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            defaultValue={expiry_date}
                            type="date"
                            name="expiry_date"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Expiry Date"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Expiry Date
                        </label>
                    </div>
                </div>

                {/* Additional Note */}
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input  
                            defaultValue={donor_name}
                            type="text"
                            name="donor_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="donor name"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Donor Name
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            defaultValue={donor_email}
                            type="email"
                            name="donor_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Donor Email"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Donor Email
                        </label>
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            defaultValue={notes}
                            type="text"
                            name="note"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Additional Note"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Additional Note
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">

                        <select
                            defaultValue={availability}
                            name='status'
                            placeholder=" "
                            required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                            <option disabled={true}>Availability</option>
                            <option>Available</option>
                            <option>Not Available</option>
                            <option>Requested</option>
                        </select>
                        <label
                            htmlFor="Food Status"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Food Status
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className=" bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateFoods;