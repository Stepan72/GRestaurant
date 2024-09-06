"use client";
import React from "react";
import "./AboutUs.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <Image src="/assets/G.png" alt="G-letter" width={390} height={415} />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className="headtext__cormorant">About Us</h1>
          <Image
            src="/assets/spoon.svg"
            alt="about_spoon"
            className="spoon__img"
            width={45}
            height={11}
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content-knife flex__center">
          <Image
            src="/assets/knife.png"
            alt="about_knife"
            width={132}
            height={1110}
          />
        </div>
        <div className="app__aboutus-content-history">
          <h1 className="headtext__cormorant">Our History</h1>
          <Image
            src="/assets/spoon.svg"
            alt="about_spoon"
            className="spoon__img"
            width={45}
            height={11}
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
