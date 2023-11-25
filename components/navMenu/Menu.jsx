"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const Menu = () => {
  const [menuState, setMenuState] = useState({ isMenuOpen: false });

  const toggleMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  return (
    <div>
      <div onClick={toggleMenu}>
        <AiOutlineMenu size={25} className="cursor-pointer"/>
      </div>
      

      <div
        className={`flex justify-center items-center flex-col w-full md:w-[35rem] h-screen bg-[#D7BB8E] fixed top-0 right-0 z-10 transition-transform will-change-transform duration-500 ease-in-out ${
          menuState.isMenuOpen
            ? "translate-x-[0]"
            : "translate-x-[100%]"
        }`}
      >
        <div className="w-full flex justify-between items-center px-[1rem] md:px-[5rem] fixed top-0 py-2 md:py-5">
          <img
            className="w-[7.5rem] sm:w-[10rem] md:w-[15rem] lg:w-[12rem]"
            src="LogoWhite.webp"
            alt="Logo"
          />
          <IconContext.Provider
            value={{
              color: "black",
              size: "25px",
              className: "hover:cursor-pointer",
            }}
          >
            <div onClick={toggleMenu}>
              <AiOutlineClose />
            </div>
          </IconContext.Provider>
        </div>

        <ul className="flex justify-center items-center flex-col">
          <h2 className="hover:cursor-pointer hover:text-[#C69025] transition duration-150 ease-in-out text-[2.25rem] lg:text-[5rem] italic">
            About
          </h2>
          <h2 className="hover:cursor-pointer hover:text-[#C69025] transition duration-150 ease-in-out text-[2.25rem] lg:text-[5rem] italic">
            Reviews
          </h2>
          <h2 className="hover:cursor-pointer hover:text-[#C69025] transition duration-150 ease-in-out text-[2.25rem] lg:text-[5rem] italic">
            Pricing
          </h2>
          <h2 className="hover:cursor-pointer hover:text-[#C69025] transition duration-150 ease-in-out text-[2.25rem] lg:text-[5rem] italic">
            Contact Us
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
