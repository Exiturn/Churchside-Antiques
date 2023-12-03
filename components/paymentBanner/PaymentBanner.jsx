import styles from './styles.module.css'
import * as images from '../../public/antiqueAssets.js'

const PaymentBanner = () => {
  return (
    <div className={`${styles.banner} sectionContainer`}>
        <img className={styles.image} src={images.paymentBanner.src} alt="" />
        <h1 className={`bold ${styles.header}`}>Flexible Payment Options via</h1>
        <p className={styles.paragraph}>
            <span className={styles.text}>Bank Transfer</span>
            <span className={styles.text}>Instant Cash</span>
            <span className={styles.text}> or Cheque</span>
        </p>
    </div>
  )
}

export default PaymentBanner