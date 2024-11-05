import styles from './page.module.css'
import Navbar from '../Components/Navbar/navbar';
export default function Home() {
  return (
  <>
   <Navbar/>
   <div className={styles.container}>

    <h1 className={styles.heading}>
        WELCOME TO ABOUT US
    </h1>
   </div>
    
  </>
  );
}
