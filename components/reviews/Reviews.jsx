import ReviewsList from "../reviewsList/ReviewsList";
import styles from "./styles.module.css";

const Reviews = () => {
  return (
    <div className={`sectionContainer border-t-[1px] border-[#D6B174]`} id="Reviews">
      <div className={`sectionBackground`}>
        <h1 className={`sectionHeader`}>Reviews</h1>
      </div>

      <main className="pt-[8vw] md:pt-[13vw] text-[#C69025] flex flex-col justify-center items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw] bold">
          See what our customers had to say...
        </h2>
      
        <ReviewsList />
      </main>
    </div>
  );
};

export default Reviews;
