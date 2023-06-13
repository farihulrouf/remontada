import Image from "next/image"
import { pagematch } from "./data";
import { AiOutlineArrowRight }
    from 'react-icons/ai';
import { BiFootball } from 'react-icons/bi'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabMatch = () => {
    return (
        <div className="w-full mt-12 mb-24 sm:px-24 px-4">
            <div className="bg-yellow-500 p-2 mb-8 flex items-center">
                <BiFootball size={32} />
                <h2 className="text-lg">Footbal match</h2>
            </div>
           
            {pagematch.map((match, index) =>
                <>
                    <div className="flex flex-wrap items-center sm:p-4 p-0">
                        <div className="sm:w-1/2 w-full">
                            <div className="flex space-x-2 justify-between">
                                <div className="flex space-x-2">
                                    <Image
                                        src={match.img_1}
                                        width={36}
                                        height={36}
                                        alt="Argentina"
                                    />
                                    <p className="w-16 sm:w-36 text-left">{match.name1}</p>
                                </div>
                                <div>
                                    <div className="bg-indigo-100 px-2 rounded-xl">
                                        <p className="text-blue-500">{match.score}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="w-16 sm:w-36 text-right"> {match.name2}</p>
                                    <Image
                                        src={match.img_2}
                                        width={36}
                                        height={36}
                                        alt="brazil"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="sm:w-1/2 w-full">
                            <div className="w-full flex items-center justify-between mt-2 mb-2">
                                <div className="px-2 bg-pink-100 rounded-xl sm:ml-4 ml-0">
                                    <p className="text-red-500 text-center sm:text-sm text-[10px]">Full - Time</p>
                                </div>
                                <div className="flex items-center sm:space-x-4 space-x-1 sm:text-sm text-[10px] px-2">
                                    <p className="bg-teal-500 text-white px-2 rounded-xl">18 Dec 2023</p>
                                    <p className="bg-pink-500 text-white px-2 rounded-xl">Alianz Arena </p>
                                    <p className="bg-indigo-700 text-white px-2 rounded-xl">World Cup U-20 </p>
                                    <AiOutlineArrowRight className="text-gray-400" />
                                </div>
                            </div>
                        </div>
            
                    </div>
                </>
            )}
            

        </div>
    )
}
export default TabMatch