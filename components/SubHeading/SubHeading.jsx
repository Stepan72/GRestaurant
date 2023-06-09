"use client";
import React from "react";

const SubHeading = ({ title }) => (
  <div className="mb-4">
    <p className="p__cormorant">{title}</p>
    <img src="/assets/spoon.png" alt="spoon-image" className="spoon__img" />
  </div>
);

export default SubHeading;
