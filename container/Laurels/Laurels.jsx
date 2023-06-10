"use client";
import React from "react";
import { SubHeading } from "@/components";
import "./Laurels.scss";
import { awards } from "@/constants/data";
import AwardCard from "@/components/AwardCard/AwardCard";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app_wrapper_logo">
      <img src="/assets/logo.png" alt="logo" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {awards.map((el, index) => {
          return <AwardCard award={el} key={el.title} />;
        })}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src="/assets/laurels.png" alt="laurels" />
    </div>
  </div>
);

export default Laurels;
