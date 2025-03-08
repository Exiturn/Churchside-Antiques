import styles from "./styles.module.css";

export const metadata = {
  title: "Churchside Antiques",
  url: "https://churchsideantiques.org.uk",
  siteName: "Churchside Antiques, Nantwich Gold Buyer",
  description:
    "Antique Buying & Selling based in Nantwich | We buy everything from a silver thimble to a grandfather clock. Just ask! Nantwich based gold buyer & seller.",
  googleSiteVerification: "wX0p2TC1gErEQjTVy5s3V419NxOJY9L0kXzq4nOyffE",
  keywords: [
    "antique",
    "nantwich gold seller",
    "nantwich antiques",
    "nantwich gold buyer",
    "antique gold buyer",
    "jewellery dealer",
    "dealer",
    "churchside antiques",
  ],
};

const Hero = () => {
  const paddingTop = {
    paddingTop: "calc(12.5vh + 1.5rem)",
  };

  return (
    <container className={styles.heroContainer} style={paddingTop}>
      <section className={styles.heroTopContainer}>
        <h1 className={styles.heroHeader}>
          Gold and Antiques: <br />
          What's In Your <br /> Treasure Chest?
        </h1>

        <div className={styles.heroListContainer}>
          <h2 className={styles.heroListHeader}>We Buy & Sell</h2>
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
          <p>
            Tuesdays: <span className="bold">9am - 2pm</span>
          </p>
          <p>
            Thursdays: <span className="bold">9am - 3pm</span>
          </p>
          <p>
            Saturdays: <span className="bold">9am - 4pm</span>
          </p>
          <p className="mt-2 font-medium">Nantwich Indoor Market</p>

          <div className="mt-[2rem]">
            <p>
              Thursdays: <span className="bold">9am - 3pm</span>
            </p>
            <p>
              Fridays: <span className="bold">9am - 3pm</span>
            </p>
            <p>
              Saturdays: <span className="bold">9am - 3pm</span>
            </p>
            <p className="font-medium mt-2">Sandbach Market</p>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className={styles.heroMobileListContainer}>
          <h2 className={styles.heroMobileListHeader}>We Buy & Sell</h2>
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
          <p className="bold">Nantwich Line</p>
          <p>07976-612247</p>
        </div>
        <div>
          <p className="bold">Sandbach Line</p>
          <p>07533-769054</p>
        </div>
        <div className="mt-2 sm:mt-0 hidden md:block">
          <p className="bold">Email</p>
          <p>churchsideantiques@gmail.com</p>
        </div>
      </section>

      <img className={styles.heroBgLine} src="line.webp" alt="line" />
      <img className={styles.heroBg} src="GoldHandHD.webp" alt="Golden Hand" />
    </container>
  );
};

export default Hero;
