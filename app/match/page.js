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
            <div className="max-w-screen-xl mx-auto px-24 py-8">
                <div className="py-6">
                    <h3 className="text-xl text-center">مباريات اليوم</h3>
                    <div className="flex gap-4 items-center">
                          <input type="text" placeholder=" ترثع الأن" className="border p-2 w-24 rounded-sm" />
                          <input type="text" placeholder="059 x x x x x"  className="border p-2 rounded-sm" />
                          <p className="text-lg">رقم هوالة</p>

                    </div>
                </div>
                <div className="bg-yellow-500 p-2 mb-8 flex items-center">
                    <BiFootball size={36} />
                    <h2 className="text-lg">Footbal match</h2>
                </div>
                {pagematch.map((match, index) =>
                    <>
                        <div className="flex space-x-8 p-4 items-center hover:bg-gray-200">
                            <div className="w-2/5">
                                <div className="flex space-x-2 justify-between">
                                    <div className="flex space-x-2 justify-start w-36">
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
                                            <p className="text-blue-500">{match.score}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 w-36 justify-end">
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
                            <div className="w-3/5 flex space-x-8 items-center">
                                <div className="flex items-center space-x-2">
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                    <p className="text-[12px] text-gray-500">Prediction</p>
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <AiOutlineClockCircle size={32} />
                                    <p className="text-gray-700">5.00 PM</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MdOutlineStadium size={32} />
                                    <p className="text-gray-700">London</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image
                                        src="/assets/icon/cup.png"
                                        width={38}
                                        height={54}
                                        alt="World Cup"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-gray-700">Details</p>
                                    <BsArrowRight size={32} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </React.Fragment>
    )
}
export default MatchSoccer