"use client";
import { useRef, useState } from "react";
import styles from "./styles.module.css";

const Accordion = ({ title, paragraph, image, alt, id }) => {
  const [accState, setAccState] = useState({ isAccOpen: false });
  const contentHeight = useRef();

  const toggleAcc = () => {
    setAccState((prevState) => ({
      ...prevState,
      isAccOpen: !prevState.isAccOpen,
    }));
  };

  return (
    <div
      className={`${styles.accordionContainer} ${
        id === "2" || id === "3" ? "mt-0" : "mt-8"
      }`}
    >
      <div
        className={`${styles.accordionHeader} ${
          id === "1" && "rounded-t-xl"
        }`}
      >
        <h2 className={styles.accordionTitle}>{title}</h2>
        <span
          className={styles.accordionIcon}
          onClick={toggleAcc}
        >
          {accState.isAccOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`border-x border-[#D7BB8E] ${
          styles.accordionContent
        } ${id === "3" && "border-b rounded-b-xl"}`}
        ref={contentHeight}
        style={
          accState.isAccOpen
            ? { height: `${contentHeight.current.scrollHeight + 2 * 16}px` }
            : { height: "0px" }
        }
      >
        <div className={`${styles.accordionImageContainer}`}>
          <img
            className={`${styles.accordionImage} ${id === '3' ? 'w-[8rem] md:w-[30rem] h-[7.5rem] lg:h-[25vw]' : 'h-[10rem] lg:h-[25vw]'}`}
            src={image.src}
            alt={alt}
          />
          <p className={styles.accordionParagraphContainer}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
