import { use, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { users, signOutUser } = use(AuthContext);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    const links = <>
        <li><NavLink to={'/'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
        >Home</NavLink></li>
        <li><NavLink to={'/available-food'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
        >Available Foods</NavLink></li>
        <li><NavLink to={'/about-us'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
        >About Us</NavLink></li>
        

        {
            users ?
                <>
                    <li><NavLink to={'/manage-foods'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200">My Foods</NavLink></li>
                    <li><NavLink to={'/add-foods'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
                    >Add Foods</NavLink></li>
                    <li><NavLink to={'/food-request'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
                    >Request Foods</NavLink></li>
                    <li><NavLink to={'/order-food'} className="font-medium tracking-wide text-gray-900 transition-colors duration-200"
                    >Order Food</NavLink></li>
                </>
                : ''
        }
    </>

    const authLinks = <>
        {
            users ? <>
                <section className="bg-gray-2 dark:bg-dark">
                    <div className="container">
                        <div className="flex justify-center">
                            <div className="relative inline-block">
                                <button
                                    ref={trigger}
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex gap-2 items-center text-left"
                                >
                                    <span className="text-base font-medium lg:text-white">
                                        {users.displayName}
                                    </span>
                                    <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
                                        <img
                                            src={users.photoURL}
                                            alt="avatar"
                                            className="h-full w-full rounded-full object-cover object-center"
                                        />
                                        <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
                                    </div>
                                </button>
                                <div
                                    ref={dropdown}
                                    onFocus={() => setDropdownOpen(true)}
                                    onBlur={() => setDropdownOpen(false)}
                                    className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-gray-200 p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
                                >
                                    <button
                                        onClick={signOutUser}
                                        className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </> : <><li><NavLink to={'/sign-in'} className="font-medium tracking-wide lg:text-white transition-colors duration-200"
            >Sign In</NavLink></li>
                <li><NavLink to={'/sign-up'} className="font-medium tracking-wide lg:text-white transition-colors duration-200"
                >Sign Up</NavLink></li></>
        }
    </>

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#399918] shadow-lg">
            <div className="px-4 py-6 w-10/12 mx-auto sm:w-full md:w-full lg:max-w-screen-full md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img
                                className="w-10"
                                src="https://i.ibb.co/xKGK5S8w/restaurant-5651546.png"
                                alt=""
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                FoodHub
                            </span>
                        </a>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            {links}
                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {authLinks}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-green-200"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img
                                                    className="w-8"
                                                    src="https://i.ibb.co/xKGK5S8w/restaurant-5651546.png"
                                                    alt=""
                                                />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    FoodHub
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 
                          c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3
                          c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
                          c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3
                          C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            {links}
                                            {authLinks}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};