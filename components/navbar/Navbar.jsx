import styles from './styles.module.css'

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
            <p className={styles.navText}>Menu</p>
        </div>
    </nav>
  )
}

export default Navbar