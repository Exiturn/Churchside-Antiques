import PricingList from "../pricingList/PricingList";

const Pricing = () => {
  return (
    <div className={`sectionContainer border-t-[1px] border-[#D6B174]`}>
      <div className={`sectionBackground`}>
        <h1 className={`sectionHeader`}>Pricing</h1>
      </div>

      <main className="pt-[8vw] md:pt-[13vw] text-[#C69025] flex flex-col justify-center items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw] bold">
          What we pay
        </h2>

        <PricingList />
      </main>
    </div>
  );
};

export default Pricing;
