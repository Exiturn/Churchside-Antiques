import styles from "./styles.module.css";
import Accordion from "../aboutAccordion/Accordion";
import accordionData from "../aboutAccordion/accordionData.js";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className="w-full h-auto absolute top-0 left-0 z-[-1]">
        <h1 className="text-[#D6B174] italic text-[25vw] text-opacity-20 mt-[-1rem] md:mt-[-5rem]">
          About Us
        </h1>
      </div>

      <main className="pt-[13vw] text-[#C69025] flex flex-col justify-start items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw]">
          Free Service. Free Valuations.{" "}
          <span className="underline text-inherit underline-offset-[0.5rem] md:underline-offset-[1rem] bold">
            No Obligation.
          </span>
        </h2>

        <div className="flex justify-between items-start w-full text-[#C69025] mt-[5vw] gap-x-[5vw]">
          <div className="max-w-[40vw]">
            <p className="text-[#C69025]">
              Simon Thompson was born in Nantwich and has been an auctioneer and
              dealer for over 30 years. Specialising in Jewellery, watches,
              coins and medals.
            </p>
            <br />
            <p className="text-[#C69025]">
              Simon can now be found at our large new stand inside Nantwich
              Market. <br /><span className="text-inherit bold">Open on Thursday 9am-3pm and Saturday 9am- 4pm.</span>
            </p>
          </div>
          <div className="text-[#C69025] max-w-[40vw]">
            <p className="text-inherit">We are now paying incredibly high prices for scrap gold and silver.
            Tangled chains, odd earrings, broken bits, foreign gold, we
            guarantee to buy it all! If your items are too numerous or fragile
            or you would prefer a home visit.</p>
            <br />
            <p className="text-inherit">Simon will be pleased to oblige.
            <span className="bold text-inherit"> Even higher prices for items that can be resold.</span> </p>
          </div>
        </div>

        <Accordion />
      </main>
    </div>
  );
};

export default About;
