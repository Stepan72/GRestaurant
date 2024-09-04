"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#menu", title: "Menu" },
    { href: "#awards", title: "Awards" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Image
          src="/assets/gericht.png"
          width={210}
          height={60}
          alt="app-logo"
        />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((link) => (
          <li key={link.title} className="p__opensans">
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">
          Log In / Register
        </a>
        <div>
          <Link href="/" className="p__opensans">
            Book Table
          </Link>
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              {navLinks.map((link) => (
                <li key={link.title} className="p__opensans">
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
