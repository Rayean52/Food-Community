import Lottie from 'lottie-react';
import deliveryBoy from '../../assets/delivery_boy.json'

const OrderFood = () => {

    const cards = [
        {
            title: "Kacchi Biriyani",
            image:
                "https://i.ibb.co/NnQ0yzTd/indian-food-on-restaurant-table.jpg",
        },
        {
            title: "Chicken Fry",
            image:
                "https://i.ibb.co/0pshdt78/fried-chicken-wings-pub-food.jpg",
        },
        {
            title: "Mush-Pizza",
            image:
                "https://i.ibb.co/n88kH4t6/pub-food-spread.jpg",
        },
        {
            title: "Beef Curry with Bread",
            image:
                "https://i.ibb.co/nqzxjtGz/moroccan-meal-in-tagine.jpg",
        },
        {
            title: "Family Pack",
            image:
                "https://i.ibb.co/bRCgm6J8/greek-dinner-in-restaurant.jpg",
        },
        {
            title: "Fresh Vegetables",
            image:
                "https://i.ibb.co/JZmSvWX/colorful-fresh-vegetables-flatlay.jpg",
        },
        {
            title: "6 Flavours of Pastry",
            image:
                "https://i.ibb.co/fzw0zV2R/assortment-pieces-cake.jpg",
        },
        {
            title: "Chocolate Pastry",
            image:
                "https://i.ibb.co/x8f4hrNh/chocolate-brownie-cake-piece-stack-plate-homemade-pastries.jpg",
        },
        {
            title: "Thai Soup",
            image:
                "https://i.ibb.co/5WhDzPS5/red-lentil-soup-with-slice-lemon-breadcrumbs.jpg",
        },
        {
            title: "Beef Steak",
            image:
                "https://i.ibb.co/nsTQVvcF/fried-chicken-breast-with-vegetables.jpg",
        },
        {
            title: "Mush-Pasta",
            image:
                "https://i.ibb.co/prZh0PXD/sauteed-mushrooms-with-pumpkin-sweet-pepper.jpg",
        },
        {
            title: "Chicken Kabab",
            image:
                "https://i.ibb.co/N8msqW0/side-view-baked-potatoes-with-lamb-meat-vegetables-clay-bowl-black-table.jpg",
        },
    ];

    const getRandomHeight = () => {
        const heights = ["h-60", "h-72", "h-80", "h-96"];
        return heights[Math.floor(Math.random() * heights.length)];
    };

    return (
        <div className="max-w-6xl mt-25 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <h1 className='text-center text-4xl font-semibold my-10'>Order Whatever you want.</h1>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {cards.map((card, index) => (
                    <div  onClick={()=>document.getElementById('my_modal_5').showModal()} key={index} className="break-inside-avoid overflow-hidden rounded-xl shadow-md bg-white dark:bg-neutral-800">
                        <div className={`w-full ${getRandomHeight()} overflow-hidden`}>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-800 ">
                                {card.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-center mt-10'>Note : More feature coming soon on Order Page.....</h1>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Order has been confirmed!</h3>
                    <p className="py-4">Rider on the way to your home.</p>
                    <div className='flex justify-center items-center'>
                        <Lottie animationData={deliveryBoy} style={{ width: 250, height: 350 }}></Lottie>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-amber-500">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default OrderFood;