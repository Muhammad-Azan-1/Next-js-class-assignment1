"use client"
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>

     
    <div className={`${styles.outerNavbox}`}>
       
      <div className={`${styles.innerNavbox}`}>
      <ul>
        <li>
              <Link href="/">
                   Home
              </Link>
        </li>
        <li>
              <Link href="/Aboutus">
                     About Us
              </Link>
        </li>
        <li>
              <Link href="/Serivces">
                   Services
              </Link>
        </li>
        <li>
              <Link href="/Contactus">
                 Contact Us
              </Link>
        </li>
        <li>
              <Link href="/Projects">
                 Projects
              </Link>
        </li>
      </ul>
      </div>
    </div>
  
  </nav>
  )
}

export default Navbar