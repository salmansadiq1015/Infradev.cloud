import React from "react";
import "./work.css";
import Layout from "../../components/Layout/Layout";
import Works from "../../components/Works/Works";
import Section8 from "../../components/Home/Section8";
import Wsection4 from "../../components/Works/Wsection4";

export default function Work() {
  return (
    <Layout title={"Our Work infraDev"}>
      <div className="work-wrapper">
        <section
          className="work-section1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="ws1-content">
            <h3>Our work</h3>
            <h2>Proven solutions for real-world problems.</h2>
            <p>
              We believe in efficiency and maximizing our resources to provide
              the best value to our clients. The primary way we do that is by
              re-using the same five projects we’ve been developing for the past
              decade.
            </p>
          </div>
        </section>

        {/*-------------- Section 2----------- */}
        <section className="work-section2">
          <h3>Case studies</h3>
          {/* ------------Lines------------ */}
          <div className="lines" data-aos="fade-up">
            <span></span>
            <span></span>
          </div>
          {/* --------Content------- */}
          <Works />
        </section>
        {/* ------Section 3-------- */}
        <section className="work-section3">
          <div
            className="ws3-content"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h1>
              "We approached Studio because we loved their past work. They
              delivered something remarkably similar in record time."
            </h1>
            <div className="image">
              <img src="/workicon4.svg" alt="work-icon" />
            </div>
          </div>
        </section>

        {/* ------Section 4-------- */}
        <section className="work-section4">
          <Wsection4 />
        </section>

        {/* ------Section 5-------- */}
        <section
          className="work-section-5 mt-8"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
