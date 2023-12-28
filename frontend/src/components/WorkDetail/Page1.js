import React from "react";
import Layout from "../Layout/Layout";
import "./style.css";

export default function Page1() {
  return (
    <Layout title={"FamilyFund"}>
      <section className="work-page1-wrapper" data-aos="fade-up">
        <div className="page-section1" data-aos="fade-up">
          <h3 data-aos="fade-up">Case Study</h3>
          <h1 data-aos="fade-up">Skip the bank, borrow from those you trust</h1>
          <p data-aos="fade-up">
            FamilyFund is a crowdfunding platform for friends and family.
            Allowing users to take personal loans from their network without a
            traditional financial institution.
          </p>
        </div>
      </section>

      {/* ---------------Section2----------- */}
      <section className="page-section2" data-aos="fade-up">
        <div className="page-website">
          <div className="page-box" data-aos="fade-down">
            <span>Client</span>
            <span>FamilyFund</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Year</span>
            <span>2023</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Service</span>
            <span>Web development, CMS</span>
          </div>
        </div>
        <img src="/page1.webp" alt="banner" />
      </section>

      <section className="page-section3">
        <h1 data-aos="fade-down">Overview</h1>
        <p data-aos="fade-up">
          Having written one of the most shared posts on medium.com (“How to
          cash out your Dad’s 401K without him knowing”) FamilyFund approached
          us looking to build out their own blog.
        </p>
        <p data-aos="fade-up">
          The blog would help drive new traffic to their site and serve as a
          resource-hub for users already trying to exploit their network for
          money. Because it was so important that they own their own content, we
          decided that an on-prem solution would be best.
        </p>
        <p data-aos="fade-up">
          We installed 24 Mac Minis bought from craigslist in the storage
          cupboard of their office. One machine would be used for the web server
          and another one for the build server. The other 22 were for
          redundancy, and to DDOS squarespace.com every few months to keep them
          on their toes.
        </p>
        <p data-aos="fade-up">
          To optimise their search traffic we used an innovative technique.
          Every post has a shadow post only visible to web crawlers that is some
          variation of “Gary Vee is looking to invest in new founders”. Like
          bees to honey.
        </p>
        <h2 data-aos="fade-up">What we did</h2>
        <div className="page1-tags" data-aos="fade-up">
          <span>Frontend (React.js, Next.js)</span>
          <span>Custom CMS</span>
          <span>SEO</span>
          <span>Infrastructure</span>
        </div>
        <div className="engineer">
          <img src="/team6.webp" alt="team" data-aos="fade-up" />
          <div className="eng-content">
            <p data-aos="fade-up">
              Working with Studio, we felt more like a partner than a customer.
              They really resonated with our mission to change the way people
              convince their parents to cash out their pensions.
            </p>
            <span data-aos="fade-up">Debra Fiscal, CEO of FamilyFund</span>
          </div>
        </div>
        <div className="web-percentage">
          <div className="per-box">
            <span></span>
            <div className="pagebox" data-aos="fade-up">
              <h3>25%</h3>
              <span>Less traffic</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>10x</h3>
              <span>Page load times</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>15%</h3>
              <span>Higher infra costs</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>$1.2M</h3>
              <span>Legal fees</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
