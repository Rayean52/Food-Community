import React, { use } from 'react';
import { Link } from 'react-router';

const FoodsTable = ({ myAddedFoodPromise }) => {

    const myFoods = use(myAddedFoodPromise);

    console.log(myFoods)

    return (
        <div className="overflow-x-auto w-9/12 mx-auto my-18">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Expiry Date</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        myFoods.map((foods, index) => <tr key={index}>
                            <th>
                                {index+1}
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
                                {foods.expiry_date}
                            </td>
                            <td>{foods.quantity}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                                <Link className="btn btn-ghost btn-xs">Update</Link>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FoodsTable;