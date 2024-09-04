"use client";
import React from "react";
import { SubHeading } from "..";
import "./Newsletter.scss";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app_newsletter-heading">
      <SubHeading title="Newsletter" className="items-center" />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And Never Miss Our Latest Updates! </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email adress" />
      <button className="custom__button" type="button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
