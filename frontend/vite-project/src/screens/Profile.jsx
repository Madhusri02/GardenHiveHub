import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
// import { GoogleLogin } from 'react-google-login';
import gd from './images/gardener.jpg';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const res = await axios.post("https://garden-hub-2.onrender.com/create-user", { username: name, password: password, email: email });
            console.log(res);
            setIsSubmitted(true);  
        } catch (error) {
            console.error("Error adding user:", error);
            setErrors({ general: 'Error adding user' });
        }
    };

    const handleGoogleSuccess = async (response) => {
        const { profileObj } = response;
        try {
            const res = await axios.post("https://garden-hub-2.onrender.com/create-user", { username: profileObj.name, password: 'google-oauth', email: profileObj.email });
            console.log(res);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error adding user:", error);
            setErrors({ general: 'Error adding user' });
        }
    };

   
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="relative flex w-[70%] bg-white rounded-xl shadow-lg ring-1 ring-black/5">
                    <img src={gd} alt="gardener" className="w-[45%] h-[25%] mt-[10%] ml-[3%] object-cover rounded-l-xl" />
                    <form onSubmit={handleSubmit} className="w-2/3 p-8">
                        <h2 className="text-2xl font-bold mb-6 ml-[35%]">Signup</h2>
                        {errors.general && <div className="error text-red-500 mb-4 ml-[15%]">{errors.general}</div>}
                        <div className="mb-4 flex items-center">
                            <label className="block text-black w-1/3">Username</label>
                            <input type="text" className="border-solid border-2 border-gray-500 w-100 h-9 p-2 rounded" onChange={(e) => setName(e.target.value)} />
                        </div>
                        {errors.name && <div className="error text-red-500 mb-4">{errors.name}</div>}
                        <div className="mb-4 flex items-center">
                            <label className="block text-black w-1/3">Email </label>
                            <input type="email" className="border-solid border-2 border-gray-500 w-100 h-9 p-2 rounded" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {errors.email && <div className="error text-red-500 mb-4">{errors.email}</div>}
                        <div className="mb-4 flex items-center">
                            <label className="block text-black w-1/3">Password </label>
                            <input type="password" className="border-solid border-2 border-gray-500 w-100 h-9 p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {errors.password && <div className="error text-red-500 mb-4">{errors.password}</div>}
                        <div className="flex flex-col space-y-4">
                            <button type="submit" className="bg-black text-white  px-6 py-2 rounded "><Link to='/landing'>Sign in</Link></button>
                            <div className="text-center">or</div>
                            <button type="button" className="bg-black text-white px-6 py-2 rounded">Sign in </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Profile;
