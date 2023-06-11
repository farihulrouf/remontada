"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./index.css";
import Image from 'next/image';
export default class SliderCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false} >
          <div className='relative'>
            <img src="assets/splash/splash.png" alt="image1" />
            <p className='absolute px-2 py-2 bottom-40 right-20 bg-indigo-500 bg-opacity-100 rounded-xl text-4xl text-white'>يخمن  مباراة</p>
            <p className='absolute px-2 py-2 bottom-20 right-20 bg-yellow-500 bg-opacity-100 rounded-xl text-4xl text-white'>خمن الآن</p>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <img src="assets/splash/kick.png" alt="image1" />
            </div>

          </div>
          <div>

            <img src="assets/splash/splash.png" alt="image1" />
           

          </div>
          <div>

            <img src="assets/splash/splash.png" alt="image1" />
           

          </div>

        </Carousel>
      </div>
    );
  }
};
