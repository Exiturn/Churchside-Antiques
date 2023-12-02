"use client";

const PricingList = () => {
  const categories = ["All", "Gold", "Silver", "Watches", "Coins", "Pottery"];
  return (
    <section className="w-full mt-[3.5vw]">
      <ul className="flex justify-start items-center">{categories.map((item, index) => (
        <li className={`text-[#D6B174] text-center rounded-[2rem] py-[0.5rem] px-[1.5rem] border-[1.25px] border-[#D6B174] hover:cursor-pointer ${index === 0 && 'bg-[#D6B174] text-white'}`} key={index}>{item}</li>
      ))}</ul>
    </section>
  );
};

export default PricingList;
