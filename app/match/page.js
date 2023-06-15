import React from "react"
import { pagematch } from "@/components/data";
import { AiOutlineArrowRight, AiOutlineClockCircle }
    from 'react-icons/ai';
import { MdOutlineStadium } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { BiFootball } from 'react-icons/bi'
import Image from "next/image"
const MatchSoccer = () => {
    return (
        <React.Fragment>
            <div className="mb-2">
                <Image
                    src="/assets/splash/splash_match.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    alt="pic"
                />
            </div>
            <div className="max-w-screen-xl mx-auto lg:px-24 px-8 lg:py-8 py-4">
                <div className="py-6">
                    <h3 className="text-xl text-center py-1">مباريات اليوم</h3>
                    <div className="flex gap-4 items-center">
                          <input type="text" placeholder=" ترثع الأن" className="border p-2 w-24 rounded-lg" />
                          <input type="text" placeholder="059 x x x x x"  className="border p-2 rounded-lg lg:w-48 w-36" />
                          <p className="lg:text-lg text-lg">رقم هوالة</p>

                    </div>
                </div>
                <div className="bg-yellow-500 p-2 lg:mb-8 mb-2 flex items-center">
                    <BiFootball size={36} />
                    <h2 className="lg:text-lg text-lg">Footbal match</h2>
                </div>
                
                {pagematch.map((match, index) =>
                     index < 5 && (
                    <>
                        <div className="flex flex-wrap gap-2 py-2 mb-4 lg:mb-0 items-center hover:bg-gray-200">
                            <div className="lg:w-2/5 w-full">
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
                                            <p className="text-blue-500 text-lg">vs</p>
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
                            
                            <div className="lg:w-7/12 w-full flex flex-wrap gap-4 items-center">
                                <div className="flex justify-center items-center space-x-2 lg:w-40 w-full">
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                    <p className="text-[12px] text-gray-500">Prediction</p>
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                </div>
                                
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
                                
                                <div className="flex items-center space-x-2">
                                    <p className="text-gray-700 text-lg">Details</p>
                                    <BsArrowRight />
                                </div>
                                
                            </div>
                            
                        </div>
                    </>
                ))}
                
            </div>
        </React.Fragment>
    )
}
export default MatchSoccer