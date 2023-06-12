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
          <div className='relative'>
            <img src="assets/splash/splash.png" alt="image1" />
            <p className='absolute px-8 py-2 bottom-40 right-20 bg-indigo-500 bg-opacity-100 rounded-xl text-4xl text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute px-4 py-2 bottom-20 right-20 bg-yellow-500 bg-opacity-100 rounded-xl text-4xl text-white flex items-center'>خمن الآن <BsArrowRight size={36} /></p>
              </Link>
            
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <img src="assets/splash/kick.png" alt="image1" />
            </div>

          </div>
          <div className='relative'>

            <img src="assets/splash/splash_2.png" alt="splash2" />
            <p className='absolute px-8 py-2 bottom-40 left-40 bg-indigo-500 bg-opacity-100 rounded-xl text-4xl text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute px-4 py-2 bottom-20 left-40 bg-yellow-500 bg-opacity-100 rounded-xl text-4xl text-white flex items-center'>خمن الآن <BsArrowRight size={36} /></p>
              </Link>


          </div>
          <div className='relative'>

            <img src="assets/splash/splash_3.png" alt="ucl" />
            <p className='absolute px-8 py-2 bottom-40 right-20 bg-indigo-500 bg-opacity-100 rounded-xl text-4xl text-white'>يخمن  مباراة</p>
            
              <Link href="/login">
                <p className='absolute px-4 py-2 bottom-20 right-20 bg-yellow-500 bg-opacity-100 rounded-xl text-4xl text-white flex items-center'>خمن الآن <BsArrowRight size={36} /></p>
              </Link>


          </div>

        </Carousel>
      </div>
    );
  }
};
