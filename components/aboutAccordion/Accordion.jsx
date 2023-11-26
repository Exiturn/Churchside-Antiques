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
      className={`w-full overflow-hidden ${
        id === "2" || id === "3" ? "mt-0" : "mt-8"
      }`}
    >
      <div
        className={`flex justify-between items-center w-full px-5 py-2 border-b border-white bg-[#D7BB8E] ${
          id === "1" && "rounded-t-xl"
        }`}
      >
        <h2 className="text-white text-[3.5vh] lg:text-[4rem]">{title}</h2>
        <span
          className="text-[1.5rem] md:text-[3rem] hover:cursor-pointer"
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
        <div className="flex justify-between items-start p-[1rem] h-full">
          <img
            className="h-[10rem] lg:h-[25vw] rounded-xl"
            src={image.src}
            alt={alt}
          />
          <p className="text-[#D7BB8E] max-w-[50%]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
