import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const FoodsTable = ({ myAddedFoodPromise }) => {

    const navigate = useNavigate();

    const myFoods = use(myAddedFoodPromise);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://foodhub-community.vercel.app/foods/${id}`,{
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error=>{
                        console.log(error)
                    })


            }
        });
    }

    return (
        <div className=" mt-25 h-full py-12 px-4">
            <div className="w-9/12 mx-auto">

                {/* Title & Description */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        🍲 <span className='text-[#399918]'>My Added Foods</span>
                    </h1>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        Manage all the food items you’ve contributed to our community.
                        You can view their status, update details, or remove them if they’re no longer available.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="table">
                        {/* Table Head */}
                        <thead className="bg-gray-100">
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Expiry Date</th>
                                <th>Quantity</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.map((foods, index) => (
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
                                    <td>{foods.availability}</td>
                                    <td>{foods.expiry_date}</td>
                                    <td>{foods.quantity}</td>
                                    <th className="space-x-2">
                                        <button
                                            onClick={() => handleDelete(foods._id)}
                                            className="btn btn-ghost btn-xs text-red-500"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => navigate(`/update-foods/${foods._id}`)}
                                            className="btn btn-ghost btn-xs text-blue-500"
                                        >
                                            Update
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default FoodsTable;