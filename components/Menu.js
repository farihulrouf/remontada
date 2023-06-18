import React from 'react';
import Link from 'next/link';
const Menu = () => {
    return <div className="px-2 md:px-0 py-2 space-y-2 md:space-y-0 md:space-x-2 font-medium text-teal-200 text-sm">
        <a
            
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/">
                Home
            </Link>
        </a>
        <a
            
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/about">

                About
            </Link>
        </a>
        <a
            
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
                        <Link href="/contact">

            Contact Us
            </Link>
        </a>
        <a
            
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/term">

                Termn and Condition
            </Link>
        </a>
    </div>
}

export default Menu;