const AboutUs = () => {
    return (
        <div className="min-h-screen mt-16">
            {/* About Us Section */}
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        About Our Food Community
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Bringing together generous donors and grateful recipients, our mission is to reduce food waste
                        and share fresh, healthy meals with everyone in need.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
                            alt="Food Community"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Right: Text */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Who We Are
                        </h2>
                        <p className="text-gray-700 mb-4">
                            FoodShare is a community-driven platform that connects people who have surplus food
                            with those who need it the most. We aim to make sharing easy, safe, and impactful —
                            one meal at a time.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-700">
                            We believe that no food should go to waste and no person should go hungry. Through
                            collaboration, compassion, and innovation, we are building a network where kindness
                            and sustainability go hand in hand.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
