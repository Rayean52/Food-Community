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
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#398747] uppercase rounded-full bg-teal-accent-400">
                        Featured Foods
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Discover the Most Loved Dishes Chosen by Our <span className="text-[#398747]">Food Community</span>
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
                                className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Best Seller Tag (optional) */}
                                {food.isBestSeller && (
                                    <div className="absolute bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
                                        Best Seller
                                    </div>
                                )}

                                {/* Food Image */}
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={food.food_img}
                                        alt={food.food_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-800">{food.food_name}</h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Chicken", "Egg", "Cheese"].map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#D3E8C5] text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{food.notes}</p>

                                    {/* Price + Button */}
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">
                                                $10
                                            </span>
                                            {food.oldPrice && (
                                                <span className="text-sm text-gray-400 line-through">
                                                    ${food.oldPrice}
                                                </span>
                                            )}
                                        </div>
                                        <button className="bg-[#398747] hover:bg-[#276634] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
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