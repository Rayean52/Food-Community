import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loader/Loading';
import { Link, useNavigate } from 'react-router';

const AvailableFoods = () => {

    const [foodsData, setFoodsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => {
                setFoodsData(data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    console.log(foodsData)

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        There is no must in art
                        <br className="hidden md:block" />
                        because art is free.
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
                <p className="text-gray-700 lg:text-sm lg:max-w-md">
                    "Class is dead", says Foucault; however, according to Reicher, it is
                    not so much class that is dead, but rather the absurdity, and some
                    would say the paradigm, of class. However, the subject is interpolated
                    into a postpatriarchialist dialectic theory that includes
                    consciousness as a totality.
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">


                {
                    foodsData.map((food)=> <button onClick={()=> navigate(`/food-details/${food._id}`)} key={food._id}>
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={food.food_img}
                            alt="Foods Image"
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-80">
                            <p className="mb-4 text-lg font-bold text-gray-100">Food Name: {food.food_name}</p>
                            <p className="text-sm tracking-wide text-white">Location: {food.location}</p>
                            <p className="text-sm tracking-wide text-white">Quantity: {food.Quantity}</p>
                            <p className="text-sm tracking-wide text-white">Expiry Date: {food.expiry_date}</p>
                            <p className="text-sm tracking-wide text-white">Status: {food.availability}</p>
                            <p className="text-sm tracking-wide text-white">Donor's Comment: {food.notes}</p>
                        </div>
                    </div>
                </button>)
                }

                
            </div>
        </div>
    );
};

export default AvailableFoods;