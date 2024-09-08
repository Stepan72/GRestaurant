"use client";
import React from "react";
import { SubHeading } from "@/components";
import "./Laurels.scss";
import { awards } from "@/constants/data";
import AwardCard from "@/components/AwardCard/AwardCard";
import Image from "next/image";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app_wrapper_logo">
      <Image src="/assets/logo.png" alt="logo" width={292} height={292} />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {awards.map((el) => (
          <AwardCard award={el} key={el.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <Image
        src="/assets/laurels.png"
        alt="laurels"
        width={1110}
        height={1382}
      />
    </div>
  </div>
);

export default Laurels;
