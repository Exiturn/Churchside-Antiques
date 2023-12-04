import React from "react";

const Contact = () => {
  return (
    <div className="sectionContainer h-screen">
      <div className={`sectionBackground`}>
        <h1
          className={`text-[#D6B174] italic text-opacity-20 mt-[-1rem] lg:mt-[-3.5rem] xl:mt-[-3rem] text-[20vw]`}
        >
          Contact Us
        </h1>
      </div>

      <main className="pt-[8vw] md:pt-[10vw] text-[#C69025] flex flex-col justify-center items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw] bold">
          Want to book a home visit?
        </h2>
      </main>
    </div>
  );
};

export default Contact;
