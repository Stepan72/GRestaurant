"use client";
import { awards } from "@/constants/data";
import React from "react";

function AwardCard({ award: { imgUrl, title, subtitle } }) {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card-content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
}

export default AwardCard;
