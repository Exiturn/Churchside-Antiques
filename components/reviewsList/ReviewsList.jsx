"use client";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const ReviewsList = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div
      className={`flex justify-start items-center flex-row overflow-x-scroll mt-[5vw] gap-x-[1.25rem] w-full pb-10 list`}
      ref={ref}
      {...events}
    >
      <li className="w-full min-w-[75%] md:min-w-[35vw] flex flex-col justify-center md:items-start text-[#C69025]">
        <p className="text-inherit text-[16px] md:text-[18px] w-[70%]">
          {" "}
          <span className="text-inherit md:text-[1.5rem] bold">“ </span>
          We went to the indoor market and were very impressed with the prices
          offered and the service provided.{" "}
          <span className="text-inherit bold md:text-[1.5rem]"> ”</span>
        </p>
        <h2 className="text-inherit italic md:mt-[2rem]">- John Huntbach</h2>
      </li>
      <li className="w-full min-w-[75%] md:min-w-[35vw] flex flex-col justify-center md:items-start text-[#C69025]">
        <p className="text-inherit text-[16px] md:text-[18px] w-[70%]">
          {" "}
          <span className="text-inherit md:text-[1.5rem] bold">“ </span>
          Simon kindly came over to Chester and bought my Rolex watch - he paid more than the 2 previous offers we had had from Chester jewellers. Very Pleased!{" "}
          <span className="text-inherit bold md:text-[1.5rem]"> ”</span>
        </p>
        <h2 className="text-inherit italic md:mt-[2rem]">- M. Edwards</h2>
      </li>
      <li className="w-full min-w-[75%] md:min-w-[35vw] flex flex-col justify-center md:items-start text-[#C69025]">
        <p className="text-inherit text-[16px] md:text-[18px] w-[70%]">
          {" "}
          <span className="text-inherit md:text-[1.5rem] bold">“ </span>
          Very patient, polite and impressive service!{" "}
          <span className="text-inherit bold md:text-[1.5rem]"> ”</span>
        </p>
        <h2 className="text-inherit italic md:mt-[2rem]">- L. Dang</h2>
      </li>
      <li className="w-full min-w-[75%] md:min-w-[35vw] flex flex-col justify-center md:items-start text-[#C69025]">
        <p className="text-inherit text-[16px] md:text-[18px] w-[70%]">
          {" "}
          <span className="text-inherit md:text-[1.5rem] bold">“ </span>
          5/5 Star Service{" "}
          <span className="text-inherit bold md:text-[1.5rem]"> ”</span>
        </p>
        <h2 className="text-inherit italic md:mt-[2rem]">- Gwen Jones</h2>
      </li>
    </div>
  );
};

export default ReviewsList;
