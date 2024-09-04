"use client";
import React from "react";
import { FooterOverlay, Newsletter } from "@/components";
import "./Footer.scss";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => (
  <div className="app__footer section__padding app__bg">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src="/assets/gericht.png" alt="footer_logo" />
        <p className="p__opensans">
          "The Best Way to Find Yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src="assets/spoon.svg"
          className="spoon__img mt-4"
          alt="footer_spoon"
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday: </p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Gericht. Made by Stepan Nimchuk. All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
