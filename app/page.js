import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories'
import Rules from '@/components/Rules'
import TabMatch from '@/components/TabMatch'
import MatchHome from '@/components/MatchHome'
import SliderCarousel from '@/components/Carousel/SliderCarousel'
export default function Home() {
  return (
    <>
    <SliderCarousel />
      <div className='max-w-screen-xl mx-auto'>
        <MatchHome />
        <Rules />
         <Categories />
         <TabMatch />
      </div>
    </>
  )
}