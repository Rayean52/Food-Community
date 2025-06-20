import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import Lottie from 'lottie-react';
import lottieSignIn from '../../assets/lottie_sign_in.json'

const SignIn = () => {

    const { signIn, setUsers, setLoading, googleSignIn } = use(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password).then((result) => {
            setUsers(result.user)
            setLoading(false)
            navigate(from, { replace: true });
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: 'An Error Occurred'
            });
        })

    }

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
        <div className="min-h-screen w-9/12 mx-auto flex md:flex-col lg:flex-row">
            {/* Left Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
                <div className="max-w-md w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-700">Sign In</h2>

                    <form onSubmit={handleSignIn} className="space-y-3">

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

                        <label htmlFor="Password" className='label text-sm'>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />

                        <Link className='text-sm mb-2 hover:underline hover:text-blue-600'>Forget Password</Link>

                        <button
                            type="submit"
                            className="w-full my-4 bg-black text-white py-3 rounded hover:opacity-90"
                        >
                            Sign In
                        </button>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5] hover:btn-primary">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Continue with Google
                        </button>
                    </form>

                    <p className="text-center mt-4">
                        First time exploring? Then join with us! {<Link to={'/sign-up'} className='text-blue-600 underline font-bold'>Sign Up</Link>}
                    </p>
                </div>

            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center">
                <Lottie animationData={lottieSignIn} style={{ width: 450, height: 750 }}></Lottie>
            </div>
        </div>

    );
};

export default SignIn;