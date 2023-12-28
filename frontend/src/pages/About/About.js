import React from "react";
import "./about.css";
import Layout from "../../components/Layout/Layout";
import Section8 from "../../components/Home/Section8";

import AboutBlog from "../../components/About/AboutBlog";

export default function About() {
  return (
    <Layout title={"About Us"}>
      <div className="about-wrapper">
        {/* Section 1 */}
        <section className="about-section1">
          <h3 data-aos="fade-up-left">About us</h3>
          <h1 data-aos="fade-up-left">Our strength is collaboration</h1>
          <p data-aos="fade-up-left">
            We believe that our strength lies in our collaborative approach,
            which puts our clients at the center of everything we do.
          </p>
          <p data-aos="fade-up-left">
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p data-aos="fade-up-left">
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
          <div className="about-count">
            <div className="about-box" data-aos="fade-up-right">
              <span></span>
              <div className="a-count">
                <h2>35</h2>
                <span>Underpaid employees</span>
              </div>
            </div>
            <div className="about-box" data-aos="fade-up-right">
              <span></span>
              <div className="a-count">
                <h2>59</h2>
                <span>Placated clients</span>
              </div>
            </div>
            <div className="about-box" data-aos="fade-up-right">
              <span></span>
              <div className="a-count">
                <h2>$22M</h2>
                <span>Invoices billed</span>
              </div>
            </div>
          </div>
        </section>

        {/* -------------Section 2------------ */}
        <section className="about-section2">
          <div className="about-section2-wrapper" data-aos="fade-up">
            <h3 data-aos="fade-up">Our culture</h3>
            <h1 data-aos="fade-up">
              Balance your passion with your passion for life.
            </h1>
            <span data-aos="fade-up">
              We are a group of like-minded people who share the same core
              values.
            </span>
            <div className="about-count mt-8">
              <div className="about-box" data-aos="fade-up">
                <span style={{ background: "#fff" }}></span>
                <div className="a-count">
                  <p>
                    <b>Loyalty.</b> Our team has been with us since the
                    beginning because none of them are allowed to have LinkedIn
                    profiles.
                  </p>
                </div>
              </div>
              <div className="about-box" data-aos="fade-up">
                <span style={{ background: "#fff" }}></span>
                <div className="a-count">
                  <p>
                    <b>Trust.</b> We don’t care when our team works just as long
                    as they are working every waking second.
                  </p>
                </div>
              </div>
              <div className="about-box" data-aos="fade-up">
                <span style={{ background: "#fff" }}></span>
                <div className="a-count">
                  <p>
                    <b>Compassion.</b> You never know what someone is going
                    through at home and we make sure to never find out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------Lines------------ */}
        <div className="lines ml-[2rem]" data-aos="fade-up">
          <span></span>
          <span></span>
        </div>

        {/* -------------Section 3--------- */}
        <section className="about-section3">
          <div className="leadership-wrapper" data-aos="fade-up">
            <h1>Leadership</h1>
            <div className="leader-images">
              <div className="images" data-aos="flip-left">
                <img src="/blogauth1.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-up">
                <img src="/blogauth2.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-right">
                <img src="/blogauth3.webp" alt="leader_Photo" />
              </div>
            </div>
          </div>
        </section>

        {/* ------------Lines------------ */}
        <div className="lines ml-[2rem] mt-[-1rem]" data-aos="fade-up">
          <span></span>
          <span></span>
        </div>

        {/* -------------Section 4--------- */}
        <section className="about-section4" style={{ marginTop: "2rem" }}>
          <div className="leadership-wrapper" data-aos="fade-up">
            <h1>Team</h1>
            <div className="leader-images">
              <div className="images" data-aos="flip-left">
                <img src="/team1.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-up">
                <img src="/team2.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-right">
                <img src="/team3.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-left">
                <img src="/team4.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-up">
                <img src="/team5.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-right">
                <img src="/team6.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-left">
                <img src="/team7.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-up">
                <img src="/team8.webp" alt="leader_Photo" />
              </div>
              <div className="images" data-aos="flip-right">
                <img src="/team9.webp" alt="leader_Photo" />
              </div>
            </div>
          </div>
        </section>

        {/* ----------------Section 5----------- */}
        <section className="about-section5" data-aos="fade-up">
          <div className="about-blogs">
            <div className="about-blog-content">
              <h2>From the blog</h2>
              <p>
                Our team of experienced designers and developers has just one
                thing on their mind; working on your ideas to draw a smile on
                the face of your users worldwide. From conducting Brand Sprints
                to UX Design.
              </p>
            </div>
            <div className="aboutblog-Content">
              <AboutBlog />
            </div>
          </div>
        </section>
        {/* ----------------Section 6----------- */}
        <section className="about-section6" data-aos="fade-up">
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
