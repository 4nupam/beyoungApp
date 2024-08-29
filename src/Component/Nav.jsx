import React, { useState } from 'react';
import Logo from '../Assest/Logo.svg'; // Make sure the path is correct
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { cart } = useSelector(state => state.cart);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false); 
    };

    return (
        <nav className='flex items-center justify-between p-3.5 bg-gray-100 relative z-20'>
            <div className="left flex items-center gap-4 ml-8">
                <div className="md:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" onClick={() => handleNavigation("/")} />
                <ul className={`md:flex items-center gap-7 font-semibold hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Mens")}>
                        MEN
                        <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                            <b>Top Wear</b>
                            <li className='p-2 hover:bg-yellow-200'>T-Shirts</li>
                            <li className='p-2 hover:bg-yellow-200'>Shirts <span className='bg-green-200 p-1 rounded-lg text-white font-semibold'>New</span></li>
                            <li className='p-2 hover:bg-yellow-200'>Jeans</li>
                            <b>Bottom Wear</b>
                            <li className='p-2 hover:bg-yellow-200'>Shorts</li>
                            <li className='p-2 hover:bg-yellow-200'>Trousers</li>
                        </ul>
                    </li>
                    <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Women")}>
                        WOMEN
                        <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                            <li className='p-2 hover:bg-yellow-200'>Dresses</li>
                            <li className='p-2 hover:bg-yellow-200'>Tops</li>
                            <li className='p-2 hover:bg-yellow-200'>Skirts</li>
                        </ul>
                    </li>
                    <li className='p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Electronics")}>ELECTRONICS</li>
                    <li className='p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Jewelery")}>JEWELRY</li>
                    <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation('/NewArrivals')}>
                        NEW ARRIVALS
                        <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                            <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Summer Collection <span className='text-red-500 p-1'>Coming Soon</span></li>
                            <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Winter Collection <span className='text-red-500 p-1'>Coming Soon</span></li>
                            <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Sale <span className='text-red-500 p-1'>Coming Soon</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="right flex items-center gap-3 text-2xl font-extrabold mr-8">
                <div flex items-center gap-1>

                <CiHeart className='cursor-pointer' aria-label="Liked Items" onClick={() => handleNavigation('/Liked')} />
                </div>
                <div className='flex items-center gap-1'>
                    <CiShoppingCart className='cursor-pointer' aria-label="Shopping Cart" onClick={() => handleNavigation("/Cart")} />
                    {cart.length > 0 && <p className="text-xs  text-red-400">({cart.length})</p>}
                </div>
            </div>
            {/* Mobile Menu */}
            <ul className={`absolute top-full left-0 w-full bg-gray-100 p-4 flex flex-col items-center gap-4 font-semibold md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Mens")}>
                    MEN
                    <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                        <b>Top Wear</b>
                        <li className='p-2 hover:bg-yellow-200'>T-Shirts</li>
                        <li className='p-2 hover:bg-yellow-200'>Shirts <span className='bg-green-200 p-1 rounded-lg text-white font-semibold'>New</span></li>
                        <li className='p-2 hover:bg-yellow-200'>Jeans</li>
                        <b>Bottom Wear</b>
                        <li className='p-2 hover:bg-yellow-200'>Shorts</li>
                        <li className='p-2 hover:bg-yellow-200'>Trousers</li>
                    </ul>
                </li>
                <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Women")}>
                    WOMEN
                    <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                        <li className='p-2 hover:bg-yellow-200'>Dresses</li>
                        <li className='p-2 hover:bg-yellow-200'>Tops</li>
                        <li className='p-2 hover:bg-yellow-200'>Skirts</li>
                    </ul>
                </li>
                <li className='p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation("/Electronics")}>ELECTRONICS</li>
                <li className='p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation('/Jewelery')}>JEWELRY</li>
                <li className='relative group p-4 cursor-pointer hover:bg-yellow-300' onClick={() => handleNavigation('/NewArrivals')}>
                    NEW ARRIVALS
                    <ul className='absolute w-40 p-3 z-30 hidden group-hover:block bg-white shadow-md mt-2'>
                        <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Summer Collection <span className='text-red-500 p-1'>Coming Soon</span></li>
                        <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Winter Collection <span className='text-red-500 p-1'>Coming Soon</span></li>
                        <li className='p-2 hover:bg-yellow-200 flex items-center gap-2'>Sale <span className='text-red-500 p-1'>Coming Soon</span></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
