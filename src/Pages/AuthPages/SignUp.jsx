import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import Lottie from 'lottie-react';
import lottieSignUp from '../../assets/lottie_sign_up.json'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from 'axios';

const SignUp = () => {

    const { signUp, setUsers, googleSignIn, setLoading } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }



    const handleSignUp = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
                footer: 'An Error Occurred'
            });

        }

        try {
            const result = await signUp(email, password);
            const user = result.user;

            // Update profile
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });

            // Firebase ID Token
            const idToken = await user.getIdToken();

            // Send token to backend to set HTTP-only cookie
            await axios.post(
                "https://food-share-server-5lo9nkaxg-abdullah-rayeans-projects.vercel.app/api/auth",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`,
                    },
                    withCredentials: true,
                }
            );

            // Update state, navigate
            setUsers(user);
            setLoading(false);
            navigate(location.state ? location.state : "/");

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: "An Error Occurred"
            });
        }
    };


    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
            setUsers(result.user)
            setLoading(false)
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: 'An Error Occurred'
            });
        })
    }



    return (
        <div className="min-h-screen w-11/12 sm:w-10/12 md:w-9/12 mx-auto flex flex-col lg:flex-row">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">Sign Up</h2>

                    <form onSubmit={handleSignUp} className="space-y-3">
                        <label htmlFor="Name" className='label text-sm'>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />

                        <label htmlFor="Email" className='label text-sm'>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />

                        <label htmlFor="Photo_Url" className='label text-sm'>
                            Photo Url
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="live image Url"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />

                        <div className='relative'>
                            <label htmlFor="Create Password" className='label text-sm'>
                                Create Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Create password"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                            <span
                                onClick={togglePassword}
                                className="absolute right-4 bottom-0.5 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600"
                            >
                                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="w-full my-4 bg-black text-white py-3 rounded hover:opacity-90"
                        >
                            Sign Up
                        </button>

                        <div className="divider">OR</div>

                        <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5] hover:btn-primary">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continue with Google
                        </button>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?{' '}
                        <Link to={'/sign-in'} className='text-blue-600 underline font-bold'>Sign In</Link>
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center justify-center lg:pl-8">
                <Lottie animationData={lottieSignUp} style={{ width: '100%', maxWidth: 500, height: 850 }} />
            </div>
        </div>
    );
};

export default SignUp;