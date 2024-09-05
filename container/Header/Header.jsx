"use client";
import React from "react";

import "./Header.scss";
import { SubHeading } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="app__header app__wrapper app__bg section__padding"
      id="home"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dine</h1>
        <p className="p__opensans my-8 mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <Image
          src="/assets/welcome.png"
          width={486}
          height={536}
          alt="welcome-image"
        />
      </div>
    </div>
  );
};

export default Header;
