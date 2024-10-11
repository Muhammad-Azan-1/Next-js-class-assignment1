"use client";
import styles from './page.module.css'
import Navbar from '../Components/Navbar/page';
import Link from 'next/link';
export default function Home() {

  return (
  <>
   <Navbar/>
   <div className={styles.container}>

    <h1 className={styles.heading}>
        WELCOME TO SERVICES
    </h1>
    <div className={styles.containers}>
    <Link href="/Serivces/GraphicDesign">CLICK HERE</Link>
    </div>
   </div>


    
  </>
  );
}
