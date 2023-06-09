"use client";
import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src="/assets/G.png" alt="G-letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img
            src="/assets/spoon.png"
            alt="about_spoon"
            className="spoon__img"
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
          <img src="/assets/knife.png" alt="about_knife" />
        </div>
        <div className="app__aboutus-content-history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img
            src="/assets/spoon.png"
            alt="about_spoon"
            className="spoon__img"
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
