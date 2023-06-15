"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./index.css";
import Image from 'next/image';
import { Li } from 'react-flags-select';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs'
export default class SliderCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false} autoPlay={true} >
          {/*
          <div className='relative'>
            <img src="assets/splash/splash.png" alt="image1" />
            <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:right-20 right-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:right-20 right-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>Guess Now<BsArrowRight className='lg:block hidden' size={36} /></p>
              </Link>
            
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <img src="assets/splash/kick.png" alt="image1" />
            </div>

          </div>
    */}
          <div className='relative'>

            <img src="assets/splash/splash_2.png" alt="splash2" />
            <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-sm text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute sm:px-4 px-2 sm:py-2 py-1 sm:bottom-20 bottom-10 sm:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl sm:text-4xl text-sm text-white flex items-center'>Guess Now<BsArrowRight className='sm:block hidden' size={36} /></p>
              </Link>
            


          </div>
          <div className='relative'>

            <img src="assets/splash/splash_3.png" alt="ucl" />
            <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:right-20 right-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>
            
            <Link href="/login">
              <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:right-20 right-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>Guess Now<BsArrowRight className='lg:block hidden' size={36} /></p>
            </Link>


          </div>
          <div className='relative'>

            <img src="assets/splash/splash_4.png" alt="ucl" />
            <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>Guess Now<BsArrowRight className='lg:block hidden' size={36} /></p>
              </Link>

          </div>
          <div className='relative'>

            <img src="assets/splash/splash_5.png" alt="ucl" />
            <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>
            
            <Link href="/login">
              <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>Guess Now<BsArrowRight className='lg:block hidden' size={36} /></p>
            </Link>
          

          </div>

        </Carousel>
      </div>
    );
  }
};
