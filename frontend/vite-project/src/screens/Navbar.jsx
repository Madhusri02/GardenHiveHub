import React from 'react'
import { BiCart } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-white fixed w-full top-0 z-50'>
            <nav className='flex flex-row justify-between mx-10 text-#bacd92 h-16'>
                <div className='flex justify-center items-center text-3xl font-extrabold'>
                    GARDEN-HH
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-x-5 text-lg'>
                        <li><Link to='/landing'>Terrace</Link></li>
                        <li><Link to='/contest'>Contest</Link></li>
                        <li><Link to='/dashboard'>House</Link></li>
                        <li><Link to='/about'>Landline</Link></li>
                    </ul>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <Link to='/profile'><FaRegUserCircle className='w-6 h-6' /></Link>
                </div>
            </nav>
            <hr />
            <hr />
            <hr />
        </div>
    )
}

export default Navbar;
