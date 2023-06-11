import React from "react"
import { pagematch } from "@/components/data";
import { AiOutlineArrowRight }
    from 'react-icons/ai';
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
                <div className="bg-yellow-500 p-2 mb-8">
                    <h2 className="text-lg">Footbal match</h2>
                </div>
                {pagematch.map((match, index) =>
                <>
                    <div className="flex p-4">
                        <div className="w-1/2">
                            <div className="flex space-x-2 justify-between">
                                <div className="flex space-x-2">
                                    <Image
                                        src={match.img_1}
                                        width={36}
                                        height={36}
                                        alt="Argentina"
                                    />
                                    <p className="w-36 text-left">{match.name1}</p>
                                </div>
                                <div>
                                    <div className="bg-indigo-100 px-2 rounded-xl">
                                        <p className="text-blue-500">{match.score}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="w-36 text-right"> {match.name2}</p>
                                    <Image
                                        src={match.img_2}
                                        width={36}
                                        height={36}
                                        alt="brazil"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full flex justify-between">
                                <div className="px-2 bg-pink-100 w-28 rounded-xl ml-4">
                                    <p className="text-red-500 text-center">Full - Time</p>
                                </div>
                                <div className="flex space-x-4 text-sm">
                                    <p className="text-gray-400">18 December 2023</p>
                                    <p className="text-gray-400">Alianz Arena </p>
                                    <p className="text-gray-400">World Cup U-20 </p>
                                    <AiOutlineArrowRight size={24} className="text-gray-400" />
                                </div>
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