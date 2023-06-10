import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories'
export default function Home() {
  return (
    <>
    <NavBar />
      <div className='max-w-screen-xl mx-auto'>
         <Categories />
      </div>
    <Footer />
    </>
  )
}
