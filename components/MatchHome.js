import Image from "next/image";
const MatchHome = () => {
    return (
        <div className="bg-gray-200 px-24 flex justify-between p-2">
            <div className="flex space-x-4 items-center">
                <Image
                    src="/assets/club/city.png"
                    width={100}
                    height={100}
                    alt="City"
                />
                <h2 className="text-6xl">Man City</h2>

            </div>
            <div className="flex rounded-lg items-center relative  px-2">
                <p className="w-36 text-gray-700 absolute text-sm top-0 left-1/2 transform -translate-x-1/2">
                    Jun 10, 2023 | 22:00
                </p>
                <Image
                    className="absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/assets/icon/ucl.png"
                    width={35}
                    height={35}
                    alt="City"
                />
                <p className=" w-36 absolute text-gray-700 text-sm bottom-0 left-1/2 transform -translate-x-1/2">
                    Olimpiade Ataturk
                </p>
                <div className="bg-yellow-500 px-4 w-20">
                    <h1 className="text-6xl text-center">1</h1>
                </div>
                <div className="bg-gray-700 px-4 w-20">
                    <h1 className="text-6xl text-white text-center">0</h1>
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <h2 className="text-6xl">Inter</h2>
                <Image
                    src="/assets/club/inter.png"
                    width={100}
                    height={100}
                    alt="City"
                />
            </div>
        </div>
    )
}
export default MatchHome;