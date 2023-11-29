import styles from "./styles.module.css";

const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsBackground}>
        <h1 className={styles.reviewsHeader}>Reviews</h1>
      </div>

      <main className="pt-[13vw] text-[#C69025] flex flex-col justify-center items-start w-full">
        <h2 className="text-[#C69025] text-[4.5vh] md:text-[3.5vw]">
          See what our customers had to say...
        </h2>

        <ul className="w-full overflow-x-auto mt-[5vw]">
          <li className="w-[30vw]">
            <span className="text-[#C69025] bold text-[2.5vw]">“</span>
            <p className="text-[#C69025] text-[20px]">
               We went to the indoor market and were very impressed with the
              prices offered and the service provided. <span className="text-inherit bold text-[2.5vw]">”</span>
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Reviews;
