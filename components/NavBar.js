
"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import Link from 'next/link';
import Menu from './Menu';
const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (

        <nav className="bg-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4 relative">
                <div className="flex space-x-2 items-center font-bold tracking-wider text-white">
                     <img src='/logo.svg' className='sm:w-12 w-8 h-auto z-40' alt="logo" /> 

                </div>
                <div className="hidden md:block">
                    <Menu />
                </div>
                <button
                    type="button"
                    className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden">
                {showMobileMenu && <Menu />}
            </div>
        </nav>
    );

}
export default NavBar