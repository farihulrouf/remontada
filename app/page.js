import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories'
import Rules from '@/components/Rules'
export default function Home() {
  return (
    <>
    <NavBar />
      <div className='max-w-screen-xl mx-auto'>
        <Rules />
         <Categories />
      </div>
    <Footer />
    </>
  )
}
