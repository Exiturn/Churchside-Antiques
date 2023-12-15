"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const Menu = () => {
  const [menuState, setMenuState] = useState({ isMenuOpen: false });
  const [active, setActive] = useState("");

  const navClick = (section) => {
    setActive(section);
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const toggleMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  return (
    <div>
      <div onClick={toggleMenu}>
        <AiOutlineMenu size={20} className="cursor-pointer" />
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
          <li className={styles.menuNavItem}>
            <a href={`#${active}`} onClick={() => navClick("About")}>
              About
            </a>
          </li>
          <li className={styles.menuNavItem}>
            <a href={`#${active}`} onClick={() => navClick("Reviews")}>
              Reviews
            </a>
          </li>
          <li className={styles.menuNavItem}>
            <a href={`#${active}`} onClick={() => navClick("Pricing")}>
              Pricing
            </a>
          </li>
          <li className={styles.menuNavItem}>
            <a href={`#${active}`} onClick={() => navClick("Contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
