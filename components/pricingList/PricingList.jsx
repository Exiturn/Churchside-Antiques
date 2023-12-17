"use client";
import { useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import pricingItems from "../pricingList/pricingItems.js";
import styles from "./styles.module.css";

const PricingList = () => {
  const categories = ["All", "Gold", "Silver", "Watches", "Coins"];
  const [type, setType] = useState("All");
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <section className="w-full mt-[2.5vw]">
      <ul className="flex justify-start items-center flex-wrap">
        {categories.map((item, index) => (
          <li
            className={`text-[#D6B174] text-center rounded-[2rem] py-[0.5rem] px-[1.5rem] border-[1.25px] border-[#D6B174] hover:cursor-pointer hover:bg-[#D6B174] hover:text-white transition-colors duration-200 ease-in-out ${
              item === type && "bg-[#D6B174] text-white"
            }`}
            key={index}
            onClick={() => setType(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <div
        className="flex justify-start items-center py-[3rem] gap-x-4 overflow-x-scroll w-full list cursor-grab"
        ref={ref}
        {...events}
      >
        {pricingItems.map((item, index) => (
          <div
            className={`min-w-[30vh] md:min-w-[20vw] text-[#C69025] transition-all duration-200 ease-in-out ${
              item.type === type || type === "All" ? "block" : "hidden"
            }`}
            key={index}
          >
            <figure className="overflow-hidden">
              <img
                className="object-cover w-full min-h-[55vh] max-h-[55vh]"
                src={item.image.src}
                alt="item"
              />
            </figure>
            <h2 className="text-inherit mt-[1rem] bold">{item.name}</h2>
            <p className="text-inherit mt-[1rem]">
              {item.pricing}{" "}
              <span className="bold text-inherit">
                {item.price} / Any Condition
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingList;
