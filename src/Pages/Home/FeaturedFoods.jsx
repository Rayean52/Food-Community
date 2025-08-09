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
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Featured Foods
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Discover the Most Loved Dishes Chosen by Our <span className="text-amber-500">Food Community</span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Every week, we spotlight the meals that made the biggest impression — dishes added, shared, and celebrated by real food lovers like you. From comforting classics to bold new flavors, these featured picks are what everyone's talking about. Dive in and taste what’s trending!
                </p>
            </div>
            <div className=" bg-[url('https://i.ibb.co/6c0J9XmP/7711fe50-a630-44ef-9ad7-19b3720e3786.jpg')] bg-cover bg-center bg-no-repeat px-0 mx-0">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


                        {
                            foodsData.map((food) => <div key={food._id} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <img src="https://i.ibb.co/ZCxTFqT/food.png" alt="" />
                                    </div>
                                    <p className="mb-2 font-bold">{food.food_name}</p>
                                    <p className="text-sm leading-5 text-gray-900">{food.notes}</p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
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