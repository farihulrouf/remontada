"use client"
import Image from "next/image"
import { pagematch } from "./data";
import { AiOutlineArrowRight }
    from 'react-icons/ai';
import { BiFootball } from 'react-icons/bi'
import { useRouter } from 'next/navigation';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabMatch = () => {
    const router = useRouter();

    const matchREdirect = () => {
        router.push('/login')

    }
    return (
        <div className="w-full mt-12 mb-24 lg:px-24 px-4">
            <div className="bg-yellow-500 p-2 mb-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <BiFootball size={32} color="white" />
                    <h2 className="lg:text-lg text-lg text-white">Footbal match</h2>
                </div>
                <button className="bg-blue-900 text-white px-5 py-1 flex space-x-4 items-center rounded-lg text-lg lg:text-lg" onClick={matchREdirect}><span>Guess  now</span>  <AiOutlineArrowRight color="white" className="text-gray-400" /></button>
            </div>
  
            {pagematch.map((match, index) =>
             index < 5 && (
                <>
                    <div className="flex flex-wrap items-center lg:p-4 p-0 mb-2 hover:bg-gray-200">
                        <div className="lg:w-1/2 w-full">
                            <div className="flex space-x-2 justify-between">
                                <div className="flex space-x-2">
                                    <Image
                                        src={match.img_1}
                                        width={36}
                                        height={36}
                                        alt="Argentina"
                                    />
                                    <p className="w-16 lg:w-36 text-left">{match.name1}</p>
                                </div>
                                <div>
                                    <div className="bg-indigo-100 px-2 rounded-xl">
                                        <p className="text-blue-500">{match.score}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <p className="w-16 lg:w-36 text-right"> {match.name2}</p>
                                    <Image
                                        src={match.img_2}
                                        width={36}
                                        height={36}
                                        alt="brazil"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="w-full flex items-center justify-between mt-2 lg:mb-0 mb-2">
                                <div className="px-2 bg-pink-100 rounded-xl lg:ml-4 ml-0">
                                    <p className="text-red-500 text-center lg:text-sm text-[10px]">Full - Time</p>
                                </div>
                                <div className="flex items-center lg:space-x-4 space-x-1 lg:text-sm text-[8px] px-2">
                                    <p className="bg-teal-500 text-center text-white px-2 rounded-xl">18 Dec 2023</p>
                                    <p className="bg-pink-500 text-center text-white px-2 rounded-xl">Alianz Arena </p>
                                    <p className="bg-indigo-700 text-center text-white px-2 rounded-xl">World Cup U-20 </p>
                                    <AiOutlineArrowRight className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            ))}


        </div>
    )
}
export default TabMatch