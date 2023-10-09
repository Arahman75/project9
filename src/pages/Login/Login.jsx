import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // if (password !== password) {
        //     toast.error("password dose not match.")
        //     return
        // }
        // else if (email !== email) {
        //     toast.error("email dose not match.")
        //     return
        // }

        loginUser(email, password)
            .then(result => {
                toast.success('User login successfully');

                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                toast.success('User login successfully');
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-gray-200 ">
                    <form onSubmit={handleLogin} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-secondary">Login</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleLogin} type='submit' className="btn btn-primary">Google</button>
                        </div>
                        <p className='text-center text-lg mt-4 '>Don not have an account? Please <Link className='text-green-600 font-bold' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;