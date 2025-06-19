import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const FoodsTable = ({ myAddedFoodPromise }) => {

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
                fetch(`http://localhost:3000/foods/${id}`,{
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
                                {foods.expiry_date}
                            </td>
                            <td>{foods.quantity}</td>
                            <th>
                                <button onClick={()=> handleDelete(foods._id)} className="btn btn-ghost btn-xs">Delete</button>
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