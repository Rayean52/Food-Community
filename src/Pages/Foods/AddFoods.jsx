import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";


const AddFoods = () => {

    const { users } = use(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries());

        fetch('https://foodhub-community.vercel.app/foods', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                }

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="bg-[url('https://i.ibb.co/Gf8C3GW0/paper-leaflets-white-background.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="relative w-11/12 sm:w-10/12 md:w-9/12 mx-auto flex min-h-screen flex-col justify-center overflow-hidden sm:py-12 py-6 px-4">
                <div className="mx-auto w-full h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-6 h-full">
                        {/* Optional Image Section - commented out */}

                        <div className="p-4 sm:p-8 md:p-10 lg:p-14 lg:col-span-4">
                            <h2 className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 font-bold text-2xl sm:text-3xl md:text-4xl relative before:block before:absolute before:bg-amber-500 before:content-[''] before:w-14 sm:before:w-16 md:before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                                Share a Meal, Spread the Love
                            </h2>

                            <p className="mb-5 p-3 text-sm sm:text-base">
                                Add your extra or homemade food here to support those in need. <br />
                                Your small contribution can make a big difference in someone’s life.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Food Name"
                                            name="food_name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Food Image Url"
                                            name="food_img"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Food Quantity"
                                            name="quantity"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Pickup Location"
                                            name="location"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Expiry Date"
                                            type="date"
                                            name="expiry_date"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Donor's Name"
                                            name="donor_name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Donor's Email"
                                            name="donor_email"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Your Email"
                                            defaultValue={users.email}
                                            readOnly
                                            name="user_email"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                                            placeholder="Donor's Image Url"
                                            name="donor_img"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <select
                                            name="availability"
                                            className="py-4 bg-white border border-base-300 rounded-full px-6 placeholder:text-xs"
                                        >
                                            <option disabled={true}>Availability</option>
                                            <option>Available</option>
                                            <option>Not Available</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <textarea
                                        name="notes"
                                        className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                                        placeholder="Additional Notes"
                                        rows="6"
                                    ></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <input
                                        type="submit"
                                        value="Add"
                                        className="rounded-full bg-amber-500 font-bold py-4 px-6 min-w-40 hover:bg-amber-600 transition-all"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoods;