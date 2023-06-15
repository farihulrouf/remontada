"use client"
import { pagematch } from "@/components/data";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react"


{/*
export const getStaticPaths = async () => {
    const paths = pagematch.map(itemData => ({
        params: { id: itemData.id.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}

export const getInitialProps = async (context) => {
    const id = context.params.id
    const data = pagematch.filter(p => p.id.toString() === id)
    return {
        props: {
            itemData: JSON.parse(JSON.stringify(data[0])),
        },
    }
}
*/}


const getMatchDetails = async (id) => {
    const data = pagematch.filter(p => p.id.toString() === id)
    return data

};
const DetailMatch = async ({ params }) => {
    // console.log(params.id.toString())
    //const data = await getMatchDetails(params.id)

    const [startDate, setStartDate] = useState(new Date());

    const [file, setFile] = useState();
    const [file_2, setFile_2] = useState();
    const [file_3, setFile_3] = useState();
    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleChange_uploud = (e) => {
        console.log(e.target.files);
        setFile_2(URL.createObjectURL(e.target.files[0]));
    }
    const handleChange_stadium = (e) => {

        console.log(e.target.files);
        setFile_3(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <React.Fragment>
            <div className="max-w-screen-xl mx-auto sm:px-24 px-8 sm:py-8 py-4">
                <div className='w-full bg-teal-500 shadow-md flex flex-col p-6 font-play'>
                    <div className='flex space-x-2 py-2'>
                        <input type='text' placeholder='Club 1' className='px-2 border py-1' /> <input type='text' placeholder='score' className='w-12 py-1 border' />
                    </div>
                    {/*
                    <div className='py-2 flex items-center justify-between space-x-2 text-[12px]'>

                        <input type="file" onChange={handleChange_uploud} />
                        <img className='w-32 h-auto' src={file_2} />
                    </div>
    */}
                    <div className='flex space-x-2 py-2'>
                        <input type='text' placeholder='Club 2' className='px-2 border py-1' /> <input type='text' placeholder='score' className='w-12 py-1 border' />
                    </div>
                    {/*
                    <div className='py-2 flex items-center justify-between space-x-2 text-[12px]'>

                        <input type="file" onChange={handleChange} />
                        <img className='w-32 h-auto' src={file} />
                    </div>
*/}

                    <div className='py-2'>
                        <input type='text' placeholder='Name Stadium' className='px-2 py-1 border w-full' />
                    </div>
                    <div className='py-2'>
                        <input type='text' className='w-full px-2 py-1 border' placeholder='Name of copetition' />
                        <div className='py-2 text-[12px]'>

                            <input type="file" onChange={handleChange_stadium} />
                            <img className='w-32 h-auto' src={file_3} />
                        </div>
                    </div>
                    <div className='py-2 space-x-4 items-center'>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border px-2 py-1' />

                        {/* <TimePicker onChange={onChange} value={value} /> */}

                    </div>
                    <buton className="bg-yellow-500 px-2 py-1 rounded-lg w-32">Save</buton>
                    {/*
                    <div className='flex space-x-2'>
                        <div className=''>
                            <input type="file" className='' onChange={handleChange} />
                            <img className='w-16 h-16' src={file} />
                        </div>
                        <div className=''>
                            <input type="file" className='' onChange={handleChange} />
                            <img className='w-16 h-16' src={file} />
                        </div>
                    </div>
                            */}


                </div>
            </div>

        </React.Fragment>
    )
}

export default DetailMatch
