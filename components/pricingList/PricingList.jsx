"use client";

const PricingList = () => {
  const categories = ["All", "Gold", "Silver", "Watches", "Coins", "Pottery"];
  return (
    <section className="w-full mt-[3.5vw]">
      <ul className="flex justify-start items-center">{categories.map((item, index) => (
        <li className="text-[#D6B174] w-[5rem] text-center" key={index}>{item}</li>
      ))}</ul>
    </section>
  );
};

export default PricingList;
