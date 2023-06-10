
"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
const NavBar = () => {

    const [select, setSelect] = useState("AE");
    const onSelect = (code) => setSelect(code);
    return (
        <React.Fragment>
            <nav className="flex items-center justify-between flex-wrap bg-black">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={50}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-full bg-teal-500 block flex-grow lg:flex lg:items-center lg:w-auto">

                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow space-x-4">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Term and condition
                        </a>
                    </div>
                    <div className="">
                        <ReactFlagsSelect
                            selected={select}
                            onSelect={onSelect}
                            showSelectedLabel={false}
                            countries={["AE", "US"]}

                        /*showSelectedLabel={showSelectedLabel}
                        selectedSize={selectedSize}
                        showOptionLabel={showOptionLabel}
                        optionsSize={optionsSize}
                        placeholder={placeholder}
                        searchable={searchable}
                        searchPlaceholder={searchPlaceholder}
                        alignOptionsToRight={alignOptionsToRight}
                        fullWidth={fullWidth}
                        disabled={disabled} */
                        />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default NavBar