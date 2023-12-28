import React from "react";
import "./works.css";
import { wsection } from "../../config/Wsection";

export default function Wsection4() {
  return (
    <div className="homeSection2">
      <div
        className="s2-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>You’re in good company</h3>
      </div>
      {/* ------------Lines------------ */}
      <div className="lines ml-[2rem]" data-aos="fade-up">
        <span></span>
        <span></span>
      </div>
      <div
        className="s2-content"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {wsection?.map((item) => (
          <div className="s2-card" key={item.id}>
            <img src={item?.icon} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
