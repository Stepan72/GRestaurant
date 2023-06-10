"use client";
import React from "react";
import { SubHeading } from "@/components";
import "./Chef.scss";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src="/assets/chef.png" alt="chef-img" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src="/assets/quote.png" alt="quote-img" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <p className="p__opensans">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src="/assets/sign.png" alt="sign-img" />
        </div>
      </div>
    </div>
  );
};

export default Chef;

///1:41:42
