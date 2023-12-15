"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import Menu from "../navMenu/Menu";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={styles.navContainer}>
      <img className={styles.navImg} src="LogoWhite.webp" alt="Logo" />

      <ul className={styles.navList}>
        <li className={styles.navText}>
          <a href={`#${active}`} onClick={() => setActive("About")}>
            About
          </a>
        </li>
        <li className={styles.navText}>
          <a href={`#${active}`} onClick={() => setActive("Reviews")}>
            Reviews
          </a>
        </li>
        <li className={styles.navText}>
          <a href={`#${active}`} onClick={() => setActive("Pricing")}>
            Pricing
          </a>
        </li>
        <li className={styles.navText}>
          <a href={`#${active}`} onClick={() => setActive("Contact")}>
            Contact Us
          </a>
        </li>
      </ul>

      <div>
        {/* <p className={styles.navText}>Menu</p> */}
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
