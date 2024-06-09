import React from 'react'
import { BiCart } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
// import { Dashboard } from './dashboard';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-white sticky top-0'>
        <nav className='  flex flex-row justify-between mx-10 my-4 text-#bacd92' > 
            <div className='flex justify-center items-center text-3xl font-extrabold ' >
                GARDEN-HH
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-x-[20px] text-lg'>
                    <li className=' '> <Link to= '/' > Terrace </Link></li>
                    <li><Link to= '/contest' > Contest </Link></li>
                    <li> <Link to= '/dashboard'> House </Link></li>
                    <li><Link to ='/about' >Landline  </Link></li>
                </ul>
            </div>
            <div className='flex justify-start items-center bg-[#f0f0f0] w-27 h-[48px] rounded-full px-6'>
                <IoSearchOutline className='w-[24px] h-[24px] text-[#909090]' />
                <input type="text" placeholder='Search for products...' className='bg-transparent px-4 py-2 w-full' />
            </div>
            <div className='flex gap-4 justify-center items-center left-0 margin-0'>
                {/* <BiCart className='w-[30px] h-[24px]' /> */}
                <Link to= '/profile' ><FaRegUserCircle className='w-[24px] h-[24px]' /> </Link>
            </div>
        </nav>
        <hr />
        <hr />
        </div>
    )
}

export default Navbar