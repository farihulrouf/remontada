import React from "react"
import Image from "next/image"
const Categories = () => {

    return (
        <React.Fragment>
            <div className="">
                <h2 className="text-4xl text-center">فئات</h2>
                <div className="flex flex-wrap justify-center w-1/2 mx-auto gap-3 py-2">
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
                </div>

            </div>
        </React.Fragment>
    )

}
export default Categories