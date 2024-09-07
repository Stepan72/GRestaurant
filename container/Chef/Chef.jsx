"use client";
import React from "react";
import { SubHeading } from "@/components";
import "./Chef.scss";
import Image from "next/image";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <Image
          src="/assets/chef.png"
          alt="chef-img"
          width={1080}
          height={1344}
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <Image
              src="/assets/quote.png"
              alt="quote-img"
              width={47}
              height={40}
            />
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
          <Image
            src="/assets/sign.png"
            alt="sign-img"
            width={481}
            height={186}
          />
        </div>
      </div>
    </div>
  );
};

export default Chef;
