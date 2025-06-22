import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';



const MyFoodRequest = () => {

    const {users} = use(AuthContext);
    const [requestedFood, setRequestedFood] = useState([]);

    useEffect(()=>{
        fetch(`https://food-share-server-5lo9nkaxg-abdullah-rayeans-projects.vercel.app/requested-foods?email=${users.email}`,{
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data=> {
            setRequestedFood(data)
        })
    },[users?.email])

    return (
        <div>
            <div className="overflow-x-auto w-9/12 mx-auto my-18">
            <table className="table">
                {/* head */}
                <thead>
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
                    {/* rows */}
                    {
                        requestedFood.map((foods, index) => <tr key={index}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={foods.food_img}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{foods.food_name}</div>
                                        <div className="text-sm opacity-50">Location: {foods.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {foods.donor_name || "N/A"}
                            </td>
                            <td>
                                {foods.expiry_date || "N/A"}
                            </td>
                            <td>
                                {foods.request_date || "N/A"}
                            </td>
                            <td>{foods.quantity}</td>
                            <th>
                                {foods.status || "N/A"}
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyFoodRequest;