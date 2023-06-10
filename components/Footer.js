import React from "react"
import Image from "next/image"
import { AiOutlineHome, AiOutlineMail, 
    AiOutlinePhone, AiOutlineFacebook, 
    AiOutlineInstagram, AiOutlineTwitter} 
from 'react-icons/ai';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="w-full bg-[url('../public/img/prism.png')]">
                <div className="max-w-screen-xl mx-auto">   
                        <div className="w-full flex p-4">
                            <div className="w-1/3 text-white">
                                <h1 className="text-2xl">About Us</h1>
                                <p className="py-6 text-sm max-w-sm">
                                    Adipisicing elit, sed do eiusmod
                                    tempor incidunta utiai labore et
                                    dolore magna si aliqua quis.
                                </p>
                                <input type="text" placeholder="Email" className="py-2 p-2" />
                                <div className="mt-2 mb-2">
                                    <button className="border-2 border-yellow-600 text-wihite py-2 px-8">GET IN TOUCH</button>

                                </div>
                            </div>
                            <div className="w-1/3 text-white">
                                <h1 className="text-2xl">Link</h1>
                                <ul className="list-none mt-6">

                                    <li>About us</li>
                                    <li>Contact</li>
                                    <li>Term & Condition</li>
                                </ul>
                            </div>
                            <div className="w-1/3 opacity-100 bg-[url('../public/img/bg_ball.png')]">
                            
                               <div className="p-4 text-white">  
                                <Image
                                        src="/logo.png"
                                        width={200}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <p className="text-white text-sm mt-6 mb-4 max-w-sm">
                                        Consectetur adipisicing elit sedtado eiusmod dunt
                                        ut labore et dolore magna aliqua enim minim veniami
                                        quis nostrud.
                                    </p>
                                    <div className="flex space-x-2 items-center py-2">
                                        <AiOutlineHome size={30} color="yellow" /> <p className="ml-2">lorem ipsum </p>
                                    </div>
                                    <div className="flex space-x-2 items-center py-2">
                                        <AiOutlineMail size={30} color="yellow" /> <p className="ml-2">info@remontaa.com </p>
                                    </div>
                                    <div className="flex space-x-2 items-center py-2">
                                        <AiOutlinePhone size={30} color="yellow" /> <p className="ml-2">+628xxxxxxxxx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 flex justify-between px-2 py-1">
                            <p className="text-white">© 2023  |  Designed Remontada</p>
                            <div className="w-36  flex">
                                <AiOutlineFacebook size={30} color="white" />
                                <AiOutlineInstagram size={30} color="white" />
                                <AiOutlineTwitter size={30} color="white" />
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default Footer