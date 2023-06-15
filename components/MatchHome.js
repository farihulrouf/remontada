import Image from "next/image";
const MatchHome = () => {
    return (
        <div className="bg-gray-200 lg:px-24 px-4 flex justify-between p-2">
            <div className="flex space-x-4 items-center">
            <img src="/assets/club/city.png" alt="ucl" className="w-[25x] h-[25px] lg:w-[100px] lg:h-[100px]"/>

                {/*<Image
                    src="/assets/club/city.png"
                    width={100}
                    height={100}
                    alt="City"
                />
    */}
                <h2 className="lg:text-6xl text-lg">Man City</h2>

            </div>
            <div className="flex rounded-lg items-center relative  px-2">
                {/*<p className="w-36 text-gray-700 absolute text-lg top-0 left-1/2 transform -translate-x-1/2">
                    Jun 10, 2023 | 22:00
                </p>
                */}
                {/*<img src="/assets/icon/ucl.png" alt="ucl" className="w-[20x] h-[20px] lg:w-[35px] lg:h-[35px] lg:block hidden"/> */}

                {/*<Image
                    className="absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/assets/icon/ucl.png"
                    width={35}
                    height={35}
                    alt="City"
            />*/}
                {/*
                <p className="w-36 absolute text-gray-700 text-lg bottom-0 left-1/2 transform -translate-x-1/2">
                    Olimpiade Ataturk
                </p>
                */}
                <div className="bg-yellow-500 px-4 lg:w-20 w-10">
                    <h1 className="lg:text-6xl text-xl text-center">1</h1>
                </div>
                <div className="bg-gray-700 px-4 lg:w-20 w-10">
                    <h1 className="lg:text-6xl text-xl text-white text-center">0</h1>
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <h2 className="lg:text-6xl text-lg">Inter</h2>
                <img src="/assets/club/inter.png" alt="ucl" className="w-[25px] h-[25px] lg:w-[100px] lg:h-[100px]"/>

                {/*<Image
                    src="/assets/club/inter.png"
                    width={100}
                    height={100}
                    alt="City"
                />*/}
            </div>
        </div>
    )
}
export default MatchHome;