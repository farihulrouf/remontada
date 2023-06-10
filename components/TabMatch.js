import Image from "next/image"

import { AiOutlineArrowRight } 
from 'react-icons/ai';
const TabMatch = () => {
    return (
        <div className="w-full mt-8 mb-6 px-24">
            <div className="flex p-1">
                <div className="w-1/2">
                    <div className="flex space-x-2 justify-between px-6">
                        <div className="flex space-x-2">
                            <Image
                                src="/assets/flag/argentina.png"
                                width={36}
                                height={36}
                                alt="Argentina"
                            />
                           <p> Argentina</p>
                        </div>
                        <div>
                          <div className="bg-indigo-100 px-2 rounded-xl">
                            <p className="text-blue-500">1-2</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">

                           <p> Brazil</p>
                            <Image
                                src="/assets/flag/brazil.png"
                                width={36}
                                height={36}
                                alt="brazil"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                        <div className="w-full flex justify-between">
                            <div className="px-2 bg-pink-100 w-28 rounded-xl">
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
          
            
        </div>
    )
}
export default TabMatch