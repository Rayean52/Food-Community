import { useNavigate } from 'react-router';

const Banner = ({bottomRef}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="py-13 bg-[url('https://i.ibb.co/r2dTsqxC/rm141-nunny-02b.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="relative w-10/12 mx-auto overflow-hidden flex items-center">
                {/* Yellow shape background */}
                <div className="absolute top-0 right-0 hidden lg:flex md:w-[52%] h-full bg-gradient-to-t from-amber-400 to-amber-500 rounded-br-[5rem] rounded-tl-[5rem] z-0"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left side content */}
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Where Foodies Unite – Share, <span className='text-amber-500'>Discover</span> & Savor Together
                        </h1>
                        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                            Join a vibrant food community built for passionate eaters and home chefs. Explore mouthwatering recipes, request meals, and connect with food lovers from all around. Your next favorite dish starts here.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <button onClick={() => navigate('/available-food')} className="btn bg-amber-500 px-6 rounded-full hover:bg-amber-600 hover:text-white">
                                Available Foods
                            </button>
                            <button onClick={handleClick} className="btn btn-outline rounded-full">Paid Foods</button>
                        </div>
                    </div>


                    {/* Right side image */}
                    <div className="flex justify-center items-center relative p-15">
                        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8">

                            <div>
                                <img
                                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                    src="https://i.ibb.co/NgvVRBNp/front-view-tasty-meat-soup-with-potatoes-greens-dark-desk-meal-meat-dish-sauce.jpg"
                                    alt=""
                                />

                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                    src="https://i.ibb.co/p6pZXJYJ/fried-chicken-with-vegetables-herbs-aluminum-skillet.jpg"
                                    alt=""
                                />

                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                    src="https://i.ibb.co/0yDs2pLR/mixed-fried-meat-with-pomegranate-sauce.jpg"
                                    alt=""
                                />

                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                    src="https://i.ibb.co/NgPv8dNg/delicious-indian-food-tray.jpg"
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>

                </div>

                {/* Dinner Time Bottom Right */}
                <div className="absolute bottom-8 right-8 text-right hidden md:block z-10">
                    <h3 className="text-lg font-semibold">Get fresh foods</h3>
                    <p className="text-sm text-gray-600">24 Hours</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;