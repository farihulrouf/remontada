import React from "react"
import Image from "next/image"
const Rules = () => {
    return (
        <React.Fragment>
            <div className="p-4 flex justify-center gap-4 mb-8">
                <div className="w-72 bg-blue-900 flex items-center space-x-4 p-4">
                    <Image
                        src="/assets/rubik_2.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
                    <p className="text-white text-xl w-48">مباريات يوم التخمين</p>
                </div>
                <div className="w-72 bg-blue-900 flex items-center space-x-4 p-4">
                    <Image
                        src="/assets/rubik_1.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
                    <p className="text-white text-xl w-48">اربح الكثير من الجوائز</p>
                </div>
                <div className="w-72 bg-blue-900 flex items-center space-x-4 p-4">
                    <Image
                        src="/assets/rubik_3.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
                    <p className="text-white text-xl w-48">كن جزءا من اللعبة</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Rules