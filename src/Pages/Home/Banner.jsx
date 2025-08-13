import { useNavigate } from 'react-router';

const Banner = ({bottomRef}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="py-13 mt-25 bg-[#A8CD89] min-h-screen">
            <div className="relative w-10/12 mx-auto overflow-hidden flex items-center">
                <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Left side content */}
                    <div className="text-left space-y-6">
                        <img src="leaf.png" className="w-30" alt="" />
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Where Foodies Unite – Share, <span className="text-[#398747]">Discover</span> & Savor Together
                        </h1>
                        <p className="text-gray-600 max-w-md md:mx-0">
                            Join a vibrant food community built for passionate eaters and home chefs. Explore mouthwatering recipes, request meals, and connect with food lovers from all around. Your next favorite dish starts here.
                        </p>
                        <div className="flex flex-wrap justify-start gap-4">
                            <button
                                onClick={() => navigate('/available-food')}
                                className="btn bg-[#398747] px-6 rounded-full hover:bg-[#276634]"
                            >
                                Available Foods
                            </button>
                            <button
                                onClick={handleClick}
                                className="btn btn-outline rounded-full hover:bg-[#276634]"
                            >
                                Paid Foods
                            </button>
                        </div>
                    </div>

                    {/* Right side full-width image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://i.ibb.co.com/3ykxxDd8/Chat-GPT-Image-Aug-13-2025-12-22-27-PM-Picsart-Background-Remover.png"
                            alt="Hero Food"
                            className="w-full h-fullobject-cover"
                        />
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