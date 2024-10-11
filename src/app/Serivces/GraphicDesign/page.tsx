
import styles from './Graphic.module.css'
import Navbar from '../../Components/Navbar/page';

export default function Home() {
  return (
  <>
   <Navbar/>
   <div className={styles.container}>

    <h1 className={styles.heading}>
        WELCOME TO OUR GRAPHIC DESIGN SERVICES PAGE
    </h1>
   </div>
    
  </>
  );
}
