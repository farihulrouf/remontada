"use client"
import React, { useState } from 'react';
import { pagematch } from "@/components/data";
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineEdit, AiOutlineDelete, AiOutlineFileAdd }
    from 'react-icons/ai';
import { MdOutlineStadium } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { BiFootball } from 'react-icons/bi'
import Image from "next/image"
import Popup from "reactjs-popup";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    BarElement,
    Filler,
    Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    BarElement,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Guess Line Chart',
        },
    },
};

export const options_bar = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Win lost Bar Chart',
      },
    },
  };
  
  
  

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Guess Chart',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const data_bar = {
    labels,
    datasets: [
      {
        label: 'Win',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'lost',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    return (
        <React.Fragment>
            <div className="container max-w-screen-xl mx-auto">
                <div className="px-24 mb-4">
                    <div className='flex space-x-2'>
                        <div className='sm:w-1/2 w-full'>
                            <Line options={options} data={data} />
                        </div>
                        <div className='sm:w-1/2 w-full'>
                                 <Bar options={options_bar} data={data_bar} />;
                        </div>
                    </div>
                    <div className="bg-yellow-500 p-2 mb-2 mt-6  flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <BiFootball size={32} color="white" />
                            <h2 className="sm:text-lg text-sm text-white">Footbal match</h2>
                        </div>
                        <button className="bg-blue-900 text-white px-5 py-1 flex space-x-4 items-center rounded-lg text-sm sm:text-lg" onClick={() => setOpen(!open)} ><span>Add Match</span>  <AiOutlineArrowRight color="white" className="text-gray-400" /></button>
                    </div>
                    {pagematch.map((match, index) =>
                        <>
                            <div className="flex flex-wrap gap-2 py-2 mb-4 sm:mb-0 items-center hover:bg-gray-200">
                                <div className="sm:w-2/5 w-full">
                                    <div className="flex space-x-2 justify-between">
                                        <div className="flex space-x-2 justify-start w-24">
                                            <Image
                                                src={match.img_1}
                                                width={36}
                                                height={36}
                                                alt="Argentina"
                                            />
                                            <p className="text-left">{match.name1}</p>
                                        </div>
                                        <div className="">
                                            <div className="bg-indigo-100 px-2 rounded-xl">
                                                <p className="text-blue-500 text-sm">vs</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 w-28 justify-end">
                                            <p className="text-right"> {match.name2}</p>
                                            <Image
                                                src={match.img_2}
                                                width={36}
                                                height={36}
                                                alt="brazil"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:w-7/12 w-full flex flex-wrap gap-4 items-center justify-end">
                                    {/*
                                <div className="flex justify-center items-center space-x-2 sm:w-40 w-full">
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                    <p className="text-[12px] text-gray-500">Prediction</p>
                                    <input type="text" placeholder="-" className="border w-12 rounded-lg" />
                                </div>
                                */}

                                    <div className="flex items-center space-x-2 bg-blue-700 px-1 rounded-xl">
                                        <AiOutlineClockCircle color="white" size={24} />
                                        <p className="text-white text-[12px]">5.00 PM</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MdOutlineStadium size={24} />
                                        <p className="text-gray-700 text-[12px]">London</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src="/assets/icon/cup.png"
                                            width={24}
                                            height={40}
                                            alt="World Cup"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2 px-4">
                                        {/*<p className="text-gray-700 text-sm">Details</p> */}
                                        <AiOutlineEdit />
                                        <AiOutlineDelete />
                                        <BsArrowRight />

                                    </div>

                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='md:w-[678px] w-[350px] bg-white shadow-md flex flex-col items-center p-6 font-play'>
                    ok

                </div>
            </Popup>
        </React.Fragment>
    )
}
export default Dashboard