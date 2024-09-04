"use client";
import React from "react";

const SubHeading = ({ title, className }) => (
  <div className={`mb-4 flex flex-col ${className}`}>
    <p className="p__cormorant">{title}</p>
    <img src="/assets/spoon.svg" alt="spoon-image" className="spoon__img" />
  </div>
);

export default SubHeading;
