"use client";
import { useState } from "react";
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
        <AiOutlineMenu size={25} className="cursor-pointer" />
      </div>

      <div
        className={`${styles.menuContainer} ${
          menuState.isMenuOpen ? "translate-x-[0]" : "translate-x-[100%]"
        }`}
      >
        <div className={`${styles.menuLogoContainer}`}>
          <img className={styles.menuLogo} src="LogoWhite.webp" alt="Logo" />
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

        <ul className={styles.menuList}>
          <h2 className={styles.menuNavItem}>About</h2>
          <h2 className={styles.menuNavItem}>Reviews</h2>
          <h2 className={styles.menuNavItem}>Pricing</h2>
          <h2 className={styles.menuNavItem}>Contact Us</h2>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
