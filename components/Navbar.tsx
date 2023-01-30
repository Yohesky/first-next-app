import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles.menu__container}>
      {menuItems.map((item) => (
        <ActiveLink text={item.text} href={item.href}></ActiveLink>
      ))}
    </nav>
  );
};
