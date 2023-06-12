"use client"
import React, { useState } from "react"
import Image from "next/image"
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const [password, setPassword] = useState('');
    const user = {
        name: "farihul rouf",
        username: "farihul",
        passwrod: "12345"
    }
    const matchSoccer = (val) => {
        setPassword(val.target.value);
        //console.log(password)
    }
    const matchREdirect = () => {
        if(password === "12345") {
            router.push('/match')

            //console.log("redirect")
        }
        else {
            router.push('/notmatch')
        }
    }
    return (
        <React.Fragment>
            <div className="mb-2">
                <Image
                    src="/assets/splash/splash_login_soccer.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    alt="keypic"
                />
            </div>
            <div className="max-w-screen-xl mx-auto px-24 py-8">
                <div className="w-full flex">
                    <div className="w-1/2">
                        <h3 className="text-2xl text-center mt-8">ابدأ في تخمين مباريات اليوم</h3>
                        <div className="w-full bg-gray-200 flex flex-col p-24 mt-6 h-72 relative">
                            <input type="password" className="p-2 px-4 border w-full mb-2 rouonded-xl" placeholder="أدخل كلمة المرور هنا" onChange={matchSoccer} />
                            <button className="bg-yellow-400 px-2 w-36 py-2 mt-2 mb-2 rounded-xl flex justify-center items-center space-x-3" onClick={matchREdirect}><label>ابدأ التخمين</label> <BsArrowRight size={24} /></button>
                            <div className="absolute right-10 bottom-5">
                                <Image
                                    src="/assets/splash/key 1.png"
                                    width={100}
                                    height={100}
                                    alt="key"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image
                            src="/assets/splash/bg_login.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login