import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';



const MyFoodRequest = () => {

    const {users} = use(AuthContext);
    const [requestedFood, setRequestedFood] = useState([]);

    useEffect(()=>{
        fetch(`https://foodhub-community.vercel.app/requested-foods?email=${users.email}`,{
            credentials: "include"
        })
        .then(res => res.json())
        .then(data=> {
            setRequestedFood(data)
        })
    },[users?.email])

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="w-9/12 mx-auto mt-25">

                {/* Title & Description */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        📦<span className='text-[#399918]'> My Food Requests</span>
                    </h1>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        Here you can track all your requested food items from our donors.
                        Check the status, quantity, expiry dates, and request history in one place.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="table">
                        {/* Head */}
                        <thead className="bg-gray-100">
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Donor's Name</th>
                                <th>Expiry Date</th>
                                <th>Request Date</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestedFood.map((foods, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={foods.food_img}
                                                        alt={foods.food_name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{foods.food_name}</div>
                                                <div className="text-sm opacity-50">
                                                    Location: {foods.location}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{foods.donor_name || "N/A"}</td>
                                    <td>{foods.expiry_date || "N/A"}</td>
                                    <td>{foods.request_date || "N/A"}</td>
                                    <td>{foods.quantity}</td>
                                    <th>{foods.status || "N/A"}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyFoodRequest;