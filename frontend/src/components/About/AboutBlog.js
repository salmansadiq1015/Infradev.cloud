import React from "react";
import "./aboutblog.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function AboutBlog() {
  return (
    <div className="about-blog-wrapper">
      <div className="about-blog-box" data-aos="fade-down">
        <div className="about-blog-date">
          <span></span>
          <p>April 6, 2023</p>
        </div>
        <div className="about-blog-content1">
          <h3>The Future of Web Development: Our Predictions for 2023</h3>
          <p>
            Let’s explore the latest trends in web development, and regurgitate
            some predictions we read on Twitter for how they will shape the
            industry in the coming year.
          </p>
          <Link to="/blogs">
            Read more <BsArrowRight />
          </Link>
        </div>
      </div>
      {/* 2 */}
      <div className="about-blog-box" data-aos="fade-down">
        <div className="about-blog-date">
          <span></span>
          <p>February 18, 2023</p>
        </div>
        <div className="about-blog-content1">
          <h3>3 Lessons We Learned Going Back to the Office</h3>
          <p>
            Earlier this year we made the bold decision to make everyone come
            back to the office full-time after two years working from a dressing
            table in the corner of their bedroom.
          </p>
          <Link to="/blogs">
            Read more <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
