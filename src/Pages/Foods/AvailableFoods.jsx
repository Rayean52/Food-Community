import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loader/Loading';
import { Link, useNavigate } from 'react-router';

const AvailableFoods = () => {
    const [foodsData, setFoodsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); // 🔍 new state
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://foodhub-community.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                setFoodsData(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    // 🔍 Filtered data based on search query
    const filteredFoods = foodsData.filter(food =>
        food.food_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-4 py-12 sm:py-16 mx-auto w-11/12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:px-6 md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-6 md:gap-10 mb-6 md:mb-10 lg:justify-between lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <h2 className="max-w-lg mb-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 group leading-tight">
                        <span className="inline-block mb-2 sm:mb-4">
                            Explore Our Fresh & Generously
                            <br className="hidden md:block" />
                            Shared Available Foods Today!
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>

                    <h2 className="text-sm sm:text-base">Search here by Food Name or Location</h2>
                    <input
                        type="text"
                        placeholder="Search by food name or location"
                        className="input input-bordered w-full max-w-xs mt-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <p className="text-gray-700 text-sm sm:text-base lg:max-w-md w-full lg:w-1/2">
                    Browse through a curated list of wholesome meals currently offered by kind-hearted donors. These foods are fresh, free, and waiting to be enjoyed—claim your share while supplies last!
                </p>
            </div>

            <div className="grid gap-6 row-gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {filteredFoods.map((food) => (
                    <button onClick={() => navigate(`/food-details/${food._id}`)} key={food._id}>
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-48 sm:h-56 md:h-64 xl:h-80"
                                src={food.food_img}
                                alt="Foods Image"
                            />
                            <div className="absolute inset-0 px-4 sm:px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-80">
                                <p className="mb-2 sm:mb-4 text-base sm:text-lg font-bold text-gray-100">
                                    Food Name: {food.food_name}
                                </p>
                                <p className="text-sm tracking-wide text-white">Location: {food.location}</p>
                                <p className="text-sm tracking-wide text-white">Quantity: {food.Quantity}</p>
                                <p className="text-sm tracking-wide text-white">Expiry Date: {food.expiry_date}</p>
                                <p className="text-sm tracking-wide text-white">Status: {food.availability}</p>
                                <p className="text-sm tracking-wide text-white">Donor's Comment: {food.notes}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>

    );
};

export default AvailableFoods;
