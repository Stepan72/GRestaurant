"use client";
import React from "react";
import { SubHeading } from "@/components";
import Image from "next/image";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-12">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri : 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun : 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button mt-8" type="button">
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <Image src="/assets/findus.png" alt="findus" width={1334} height={1472} />
    </div>
  </div>
);

export default FindUs;
