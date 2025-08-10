import { useEffect, useState } from "react";
import Loading from "../../Components/Loader/Loading";
import { useNavigate } from "react-router";


const FeaturedFoods = () => {

    const [foodsData, setFoodsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://foodhub-community.vercel.app/feature-foods')
            .then(res => res.json())
            .then(data => {
                setFoodsData(data)
            })
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className="py-16 mt-15 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#399918] uppercase rounded-full bg-teal-accent-400">
                        Featured Foods
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Discover the Most Loved Dishes Chosen by Our <span className="text-[#399918]">Food Community</span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Every week, we spotlight the meals that made the biggest impression — dishes added, shared, and celebrated by real food lovers like you. From comforting classics to bold new flavors, these featured picks are what everyone's talking about. Dive in and taste what’s trending!
                </p>
            </div>
            <div className="px-0 mx-0">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


                        {
                            foodsData.map((food) => <div
                                key={food._id}
                                className="bg-[#A8CD89] rounded-2xl shadow-lg p-5 w-64 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="flex justify-center">
                                    <div className="w-28 h-28 rounded-full border-4 border-[#399918] overflow-hidden">
                                        <img
                                            src={food.food_img}
                                            alt={food.food_name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                                    {food.food_name}
                                </h3>

                                {/* Description */}
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                    {food.notes}
                                </p>

                            </div>)
                        }
                    </div>

                </div>
                <div className="text-center py-5">
                    <button
                        onClick={()=> navigate('/available-food')}
                        className="inline-flex items-center font-semibold hover:cursor-pointer transition-colors duration-200"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoods;