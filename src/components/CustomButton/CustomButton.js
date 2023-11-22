import React from "react";
import "./CustomButton.scss";
export default function CustomButton({ iconUrl, imgAlt, btnText }) {
  return (
    <div className="CustomButtonStyle">
      <div className="iconWrapper">
        <img src={iconUrl} alt={imgAlt} />
      </div>
      <span>{btnText}</span>
    </div>
  );
}
