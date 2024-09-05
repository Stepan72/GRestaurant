"use client";
import Image from "next/image";
import React from "react";

const SubHeading = ({ title, className }) => (
  <div className={`mb-4 flex flex-col ${className}`}>
    <p className="p__cormorant">{title}</p>
    <Image
      src="/assets/spoon.svg"
      width={45}
      height={11}
      alt="spoon-image"
      className="spoon__img"
    />
  </div>
);

export default SubHeading;
