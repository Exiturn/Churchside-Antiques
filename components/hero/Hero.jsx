import styles from "./styles.module.css";

const Hero = () => {

  const paddingTop = {
    paddingTop: 'calc(12.5vh + 1.5rem)'
  }

  return (
    <container className={styles.heroContainer} style={paddingTop}>
      <section className={styles.heroTopContainer}>
        <h1 className={styles.heroHeader}>
          Gold and Antiques: <br />
          What's In Your <br /> Treasure Chest?
        </h1>

        <div className={styles.heroListContainer}>
          <h2 className={styles.heroListHeader}>
            We Buy & Sell
          </h2>
          <ul className={styles.heroList}>
            <li>Scrap Gold & Silver</li>
            <li>Wrist & Pocket Watches</li>
            <li>Clocks</li>
            <li>Rolex, Omega etc.</li>
            <li>General Antiques</li>
            <li>Coins & Medals</li>
            <li>Old & Modern Jewellery</li>
          </ul>
        </div>
      </section>

      <section className={styles.heroCtaContainer}>
        <div className="w-[60%]">
          <p>
            We buy everything from a silver thimble to a grandfather clock. Just
            ask!
          </p>
          <button className={styles.heroCtaButton}>
            <a href="#About">Learn More</a>
          </button>
        </div>

        <div>
          <p>Thursdays: <span className="bold">9am - 3pm</span></p>
          <p>Saturdays: <span className="bold">9am - 4pm</span></p>
          <p className="mt-[1rem] font-medium">Nantwich Indoor Market</p>
        </div>
      </section>

      <section className="mt-4">
        <div className={styles.heroMobileListContainer}>
          <h2 className={styles.heroMobileListHeader}>
            We Buy & Sell
          </h2>
          <ul className={styles.heroMobileList}>
            <li>Scrap Gold & Silver</li>
            <li>Wrist & Pocket Watches</li>
            <li>Clocks</li>
            <li>Rolex, Omega etc.</li>
            <li>General Antiques</li>
            <li>Coins & Medals</li>
            <li>Old & Modern Jewellery</li>
          </ul>
        </div>
      </section>

      <section className={styles.heroContactContainer}>
        <div>
          <p className="bold">Mobile</p>
          <p>07976612247</p>
        </div>
        <div>
          <p className="bold">Telephone</p>
          <p>01270-780822</p>
        </div>
        <div className="mt-2 sm:mt-0 hidden md:block">
          <p className="bold">Email</p>
          <p>churchsideantiques@gmail.com</p>
        </div>
      </section>

      <img
        className={styles.heroBgLine}
        src="line.webp"
        alt="line"
      />
      <img
        className={styles.heroBg}
        src="GoldHandHD.webp"
        alt="Golden Hand"
      />
    </container>
  );
};

export default Hero;
