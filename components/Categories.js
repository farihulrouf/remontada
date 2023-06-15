import React from "react"
import Image from "next/image"
const Categories = () => {

    return (
        <React.Fragment>
            <div className="relative">
                <img src="/assets/soccer.png" className="absolute left-0 lg:w-[283px] lg:h-[256px] w-[70px] h-[64px]" alt="soccer" />

                {/*
            <Image
                    className="absolute left-0"
                        src="/assets/soccer.png"
                        width={283}
                        height={256}
                        alt="Picture of the author"
                    />
    */ }
                <h2 className="text-4xl text-center">فئات</h2>
                <div className="flex flex-wrap justify-center lg:w-1/2 w-4/5 mx-auto gap-3 py-2">
                    <img src="/assets/icon/ucl.png" alt="ucl" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/uefa.png" alt="uefa" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/ipl.png" alt="ipl" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/blg.png" alt="blg" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/lag.png" alt="lag" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/seria.png" alt="seria" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/uero.png" alt="uero" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>
                    <img src="/assets/icon/wc.png" alt="wc" className="w-[60px] h-[50px] lg:w-[121px] lg:h-[100px]"/>



                    {/*
                    <Image
                        src="/assets/icon/ucl.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/uefa.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/ipl.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/blg.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/lag.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/seria.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/uero.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        src="/assets/icon/wc.png"
                        width={121}
                        height={100}
                        alt="Picture of the author"
                    />
*/}
                </div>

            </div>
        </React.Fragment>
    )

}
export default Categories