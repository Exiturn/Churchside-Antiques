import styles from './styles.module.css'
import Menu from '../navMenu/Menu'

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <img className={styles.navImg} src="LogoWhite.webp" alt="Logo" />

        <ul className={styles.navList}>
            <li className={styles.navText}>About</li>
            <li className={styles.navText}>Reviews</li>
            <li className={styles.navText}>Pricing</li>
            <li className={styles.navText}>Contact Us</li>
        </ul>

        <div>
            {/* <p className={styles.navText}>Menu</p> */}
            <Menu />
        </div>
    </nav>
  )
}

export default Navbar