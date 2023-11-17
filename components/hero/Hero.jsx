import styles from './styles.module.css'

const Hero = () => {
  return (
    <container className={styles.heroContainer}>
        <section className='flex justify-between items-start w-full'>
          <h1 className='text-[3.5rem] lg:text-[7.5vw] tracking-[-7px] xl:tracking-[-11.5px] leading-[85.28%]'>Gold and Antiques: <br />What's In Your <br /> Treasure Chest?</h1>

          <ul>
            <h2 className='underline underline-offset-4 text-[25px] mb-[1rem]'>We Buy & Sell</h2>
            <li>Scrap Gold & Silver</li>
            <li>Wrist & Pocket Watches</li>
            <li>Clocks</li>
            <li>Rolex, Omega etc.</li>
            <li>General Antiques</li>
            <li>Coins & Medals</li>
            <li>Old & Modern Jewellery</li>
          </ul>
        </section>

        <section className='flex justify-between items-top w-[50vw] mt-[3rem] xl:mt-[6rem] gap-10'>
          <div className='w-[60%]'>
            <p>We buy everything from a silver thimble to a grandfather clock. Just ask!</p>
            <button className='mt-[1rem] rounded-[30px] bg-white text-[#E9B139] px-[2.25rem] py-[0.75rem] tracking-[-1.5px] hover:cursor-pointer hover:bg-black hover:text-white transition-all'>Learn More</button>
          </div>

          <div>
            <p>Thursdays: 9am - 3pm</p>
            <p>Saturdays: 9am - 4pm</p>
            <p className='mt-[1rem] font-medium'>Nantwich Indoor Market</p>
          </div>
        </section>

        <section className='flex justify-between items-top w-[50vw] mt-[7vh] xl:mt-[4rem]'>
          <div>
            <p className='font-medium'>Mobile</p>
            <p>07976612247</p>
          </div>
          <div>
            <p className='font-medium'>Telephone</p>
            <p>01234567890</p>
          </div>
          <div>
            <p className='font-medium'>Email</p>
            <p>churchsideantiques@gmail.com</p>
          </div>
        </section>

        <img className="w-screen h-screen absolute top-0 left-0 -z-[2]" src="line.png" alt="" />
        <img className='w-[50vh] lg:w-[70vh] top-[50vh] xl:top-[45vh] left-0 absolute z-[2]' src="GoldHandHD.png" alt="Golden Hand" />
    </container>
  )
}

export default Hero
 