"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Accordion = ({ title, content, image, alt }) => {
  const [accState, setAccState] = useState({ isAccOpen: false });

  return (
    <div className="w-full bg-black mt-8">
      <div className="flex justify-between items-center w-full px-5">
        <h2 className="text-red-500 text-[4rem]">{title}</h2>
        <span className="text-[2rem] hover:cursor-pointer">{accState.isAccOpen ? '-' : '+'}</span>
      </div>
      <div className="flex justify-between items-center">
        <img src={image} alt={alt} />
        {accState.isAccOpen && <div>{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
