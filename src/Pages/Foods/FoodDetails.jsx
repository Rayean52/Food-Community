import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const FoodDetails = () => {

    const { users } = use(AuthContext);

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD
        setCurrentDate(today);
    }, []);


    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const requestedData = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/requests`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(requestedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    document.getElementById('my_modal_4').close();
                    toast.success('You have requested this food Successfully!');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }



    const foods = useLoaderData();
    const { food_name, food_img, quantity, expiry_date, location, availability, notes, donor_name, donor_email } = foods;

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
                    <button
                        className="btn bg-amber-500"
                        onClick={() => document.getElementById('my_modal_4').showModal()}
                    >
                        Request Food
                    </button>

                </div>

            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-full sm:w-11/12 lg:max-w-5xl max-h-[90vh] overflow-y-auto p-8">
                    <h3 className="font-bold text-lg my-5">Request this food</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Food Name */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                defaultValue={food_name}
                                readOnly
                                type="text"
                                name="food_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=' '
                                required
                            />
                            <label
                                htmlFor="Food Name"
                                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Food Name
                            </label>
                        </div>

                        {/* Food Image */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                defaultValue={food_img}
                                readOnly
                                type="url"
                                name="food_img"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="Food Url"
                                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Food Image Url
                            </label>
                        </div>

                        {/* Food Quantity */}
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                defaultValue={quantity}
                                readOnly
                                type="number"
                                name="quantity"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="quantity"
                                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Food Quantity
                            </label>
                        </div>

                        {/* Pickup Location */}
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    defaultValue={location}
                                    readOnly
                                    type="text"
                                    name="location"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Location"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Pickup Location
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    defaultValue={expiry_date}
                                    readOnly
                                    type="date"
                                    name="expiry_date"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Expiry Date"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                    readOnly
                                    type="text"
                                    name="donor_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="donor name"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Donor Name
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    defaultValue={donor_email}
                                    readOnly
                                    type="email"
                                    name="donor_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Donor Email"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Donor Email
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    defaultValue={users.email}
                                    readOnly
                                    type="email"
                                    name="user_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Users Email"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Your Email
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    defaultValue={currentDate}
                                    readOnly
                                    type="date"
                                    name="request_date"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Requested Date"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Request Date
                                </label>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="note"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="Additional Note"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Add Additional Notes here
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">

                                <select
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
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Food Status
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Request

                        </button>

                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className='btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default FoodDetails;