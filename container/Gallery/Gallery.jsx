"use client";
import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "@/components";
import "./Gallery.scss";
import Image from "next/image";

const images = [
  "/assets/gallery02.png",
  "/assets/gallery03.png",
  "/assets/gallery01.png",
  "/assets/gallery04.png",
];

const Gallery = () => {
  const scrollRef = useRef();

  function scrollHandler(direction) {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center app__bg">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans mt-8" style={{ color: "#AAA" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {images.map((el, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={index}
              >
                <Image src={el} alt="gallery-img" width={321} height={447} />
                <BsInstagram className="gallery__image-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => {
              scrollHandler("left");
            }}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => {
              scrollHandler("right");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
