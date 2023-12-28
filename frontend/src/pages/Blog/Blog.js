import React from "react";
import "./blog.css";
import Layout from "../../components/Layout/Layout";
import Blogs from "../../components/Blogs/Blogs";
import Section8 from "../../components/Home/Section8";

export default function Blog() {
  return (
    <Layout title={"Blogs-infraDev"}>
      <div className="blog-wrapper">
        <section className="bsection1" data-aos="fade-up">
          <div className="bs1-content">
            <h3>Blog</h3>
            <h2>The latest articles and news</h2>
            <p>
              Stay up-to-date with the latest industry news as our marketing
              teams finds new ways to re-purpose old CSS tricks articles.
            </p>
          </div>
        </section>

        {/* ------------Lines------------ */}
        <div className="lines ml-[2rem]" data-aos="fade-up">
          <span></span>
          <span></span>
        </div>

        {/* -------------Blog Section--------- */}
        <section className="section2-blog-wrapper" data-aos="fade-up">
          <Blogs />
        </section>

        {/* ---------- Section 3------------ */}
        <section
          className="blog-section3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
