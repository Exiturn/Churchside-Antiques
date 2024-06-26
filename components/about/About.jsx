import styles from "./styles.module.css";
import Accordion from "../aboutAccordion/Accordion";
import accordionData from "../aboutAccordion/accordionData.js";
import * as images from "../../public/antiqueAssets.js";

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

const About = () => {
  return (
    <div className={`sectionContainer`} id="About">
      <div className={`sectionBackground`}>
        <h1 className={`sectionHeader`}>About Us</h1>
      </div>

      <main className={styles.aboutContentContainer}>
        <h2 className={`${styles.abouth2} bold`}>
          Free Service. <br className="md:hidden" /> Free Valuations.{" "}
          <br className="md:hidden" />
          <span className={`bold italic ${styles.abouth2_highlight}`}>
            No Obligation.
          </span>
        </h2>

        <div className={styles.aboutContent}>
          <div className="max-w-[40vw]">
            <p className="text-[#C69025]">
              Simon Thompson was born in Nantwich and has been an auctioneer and
              dealer for over 30 years. Specialising in Jewellery, watches,
              coins and medals.
            </p>
            <br />
            <p className="text-[#C69025]">
              Simon can now be found at our large new stand inside Nantwich
              Market. <br /> <br />
              <span className="text-inherit bold">
                Open on Thursday 9am-3pm and Saturday 9am- 4pm.
              </span>
            </p>
          </div>
          <div className="text-[#C69025] max-w-[40vw]">
            <p className="text-inherit">
              We are now paying incredibly high prices for scrap gold and
              silver. Tangled chains, odd earrings, broken bits, foreign gold,
              we guarantee to buy it all! <br /> <br /> If your items are too
              numerous or fragile or you would prefer a home visit, Simon will
              be pleased to oblige.
            </p>
            <br />
            <p className="text-inherit">
              <span className="bold text-inherit">
                {" "}
                Even higher prices for items that can be resold.
              </span>{" "}
            </p>
          </div>
        </div>

        <section className={styles.aboutAccordionContainer}>
          {accordionData.map(({ title, image, imageAlt, paragraph, id }) => (
            <Accordion
              key={id}
              id={id}
              title={title}
              image={image}
              alt={imageAlt}
              paragraph={paragraph}
            />
          ))}
        </section>

        <section className="py-6 flex justify-center items-center w-full ">
          <figure className="overflow-hidden w-[40vw]">
            <img className="block" src={images.market.src} alt="market stall" />
          </figure>
        </section>
      </main>
    </div>
  );
};

export default About;
