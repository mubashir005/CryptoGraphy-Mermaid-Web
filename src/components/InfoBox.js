import React from "react";
import  "../styles/global.css"

const InfoBox = ({ info }) => {
  return (
    <div
      className="info-box"
      id="info-box"
      style={{
        display: info.title ? "block" : "none",
      }}
    >
      <h4>{info.title}</h4>
      <p>{info.text}</p>
      <p style={{ fontSize: "12px", color: "#6c757d" }}>
        <a href={info.link} style={{ color: "#007bff" }}>
          Click for more details
        </a>
      </p>
    </div>
  );
};

export default InfoBox;
