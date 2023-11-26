"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Accordion = ({ title, paragraph, image, alt, id }) => {
  const [accState, setAccState] = useState({ isAccOpen: false });

  useEffect(() => {
    console.log(image);
  })

  return (
    <div className={`w-full lg:w-[60%] ${id === '2' || id === '3' ? 'mt-0' : 'mt-8'}`}>
      <div className={`flex justify-between items-center w-full px-5 py-2 border-b border-white bg-[#D7BB8E] ${id === '1' && 'rounded-t-xl'}`}>
        <h2 className="text-white text-[2rem] lg:text-[4rem]">{title}</h2>
        <span className="text-[1.5rem] md:text-[3rem] hover:cursor-pointer">{accState.isAccOpen ? '-' : '+'}</span>
      </div>
      {accState.isAccOpen && <div className={`flex justify-between items-start border-x border-[#D7BB8E] py-4 px-4 ${id === '3' && 'border-b rounded-b-xl'}`}>
        <img className="ml-[2rem] max-w-[20rem] rounded-xl" src={image.src} alt={alt} />
        <p className="text-[#D7BB8E] max-w-[50%]">{paragraph}</p>
      </div>}
      
    </div>
  );
};

export default Accordion;
