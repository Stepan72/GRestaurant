"use client";
import Image from "next/image";
import React from "react";

function AwardCard({ award: { imgUrl, title, subtitle } }) {
  return (
    <div className="app__laurels_awards-card">
      <Image src={imgUrl} alt="award" width={60} height={60} />
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
