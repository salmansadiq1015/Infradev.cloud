import React from "react";
import "./hsection.css";
import { hs2content } from "../../config/Hs2Content";

export default function Section2() {
  return (
    <div className="homeSection2" style={{ background: "#000" }}>
      <div
        className="s2-header"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h3 style={{ color: "#fff" }}>
          We’ve worked with hundreds of amazing people
        </h3>
        <span></span>
      </div>
      <div className="s2-content">
        {hs2content.map((item) => (
          <div className="s2-card" key={item.id}>
            <img src={item?.icon} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
