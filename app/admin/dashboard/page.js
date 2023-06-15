import React from "react"
import { pagematch } from "@/components/data";
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineEdit, AiOutlineDelete, AiOutlineFileAdd }
    from 'react-icons/ai';
import { MdOutlineStadium } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { BiFootball } from 'react-icons/bi'
import Image from "next/image"

const Dashboard = () => {
    return (
        <div className="container max-w-screen-xl mx-auto">
            <div className="px-24 mb-4">
                <div className="bg-yellow-500 p-2 mb-2 mt-6  flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <BiFootball size={32} color="white" />
                        <h2 className="sm:text-lg text-sm text-white">Footbal match</h2>
                    </div>
                    <button className="bg-blue-900 text-white px-5 py-1 flex space-x-4 items-center rounded-lg text-sm sm:text-lg" ><span>Add Match</span>  <AiOutlineArrowRight color="white" className="text-gray-400" /></button>
                </div>
                {pagematch.map((match, index) =>
                    <>
                        <div className="flex flex-wrap gap-2 py-2 mb-4 sm:mb-0 items-center hover:bg-gray-200">
                            <div className="sm:w-2/5 w-full">
                                <div className="flex space-x-2 justify-between">
                                    <div className="flex space-x-2 justify-start w-24">
                                        <Image
                                            src={match.img_1}
                                            width={36}
                                            height={36}
                                            alt="Argentina"
                                        />
                                        <p className="text-left">{match.name1}</p>
                                    </div>
                                    <div className="">
                                        <div className="bg-indigo-100 px-2 rounded-xl">
                                            <p className="text-blue-500 text-sm">vs</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 w-28 justify-end">
                                        <p className="text-right"> {match.name2}</p>
                                        <Image
                                            src={match.img_2}
                                            width={36}
                                            height={36}
                                            alt="brazil"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:w-7/12 w-full flex flex-wrap gap-4 items-center justify-end">
                                {/*
                                <div className="flex justify-center items-center space-x-2 sm:w-40 w-full">
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                    <p className="text-[12px] text-gray-500">Prediction</p>
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                </div>
                                */}

                                <div className="flex items-center space-x-2 bg-blue-700 px-1 rounded-xl">
                                    <AiOutlineClockCircle color="white" size={24} />
                                    <p className="text-white text-[12px]">5.00 PM</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MdOutlineStadium size={24} />
                                    <p className="text-gray-700 text-[12px]">London</p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Image
                                        src="/assets/icon/cup.png"
                                        width={24}
                                        height={40}
                                        alt="World Cup"
                                    />
                                </div>

                                <div className="flex items-center space-x-2 px-4">
                                    {/*<p className="text-gray-700 text-sm">Details</p> */}
                                    <AiOutlineEdit />
                                    <AiOutlineDelete />
                                    <BsArrowRight />

                                </div>

                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Dashboard