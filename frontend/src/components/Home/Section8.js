import React from "react";
import "./hsection.css";
import { Link } from "react-router-dom";

export default function Section8() {
  return (
    <div className="homeSection-8">
      <div className="hs8-content">
        <h1>Tell us about your project</h1>
        <Link to="/contact">
          <button>Say Hey</button>
        </Link>
        <span></span>
        <h3>Our offices</h3>
        <div className="hs8-box">
          <div className="hs8-left">
            <h4>Copenhagen</h4>
            <span>1 Carlsberg Gate</span>
            <span>1260, København, Denmark</span>
          </div>
          <div className="hs8-left">
            <h4>Billund</h4>
            <span>24 Lego Allé</span>
            <span>7190, Billund, Denmark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
