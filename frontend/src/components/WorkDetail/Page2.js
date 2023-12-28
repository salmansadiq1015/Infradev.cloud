import React from "react";
import Layout from "../Layout/Layout";
import "./style.css";

export default function Page2() {
  return (
    <Layout title={"Unseal"}>
      <section className="work-page1-wrapper" data-aos="fade-up">
        <div className="page-section1" data-aos="fade-up">
          <h3 data-aos="fade-up">Case Study</h3>
          <h1 data-aos="fade-up">Get a hodl of your health</h1>
          <p data-aos="fade-up">
            Unseal is the first NFT platform where users can mint and trade NFTs
            of their own personal health records, allowing them to take control
            of their data.
          </p>
        </div>
      </section>

      {/* ---------------Section2----------- */}
      <section className="page-section2" data-aos="fade-up">
        <div className="page-website">
          <div className="page-box" data-aos="fade-down">
            <span>Client</span>
            <span>Unseal</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Year</span>
            <span>2022</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Service</span>
            <span>Blockchain development</span>
          </div>
        </div>
        <img src="/page2.webp" alt="banner" />
      </section>

      <section className="page-section3">
        <h1 data-aos="fade-down">Overview</h1>
        <p data-aos="fade-up">
          Annoyed that his wife’s gynaecologist would not disclose the results
          of her pap smear, Unseal’s founder Kevin came up with the idea of
          using the block chain to store individual health records.
        </p>
        <p data-aos="fade-up">
          Unseal approached us early in their development, having just raised
          funds through an ICO of their cryptocurrency PlaceboCoin. Having never
          worked on a web3 product we decided to farm the project out to an
          agency in Kyiv and skim profits off the top. Despite frequent
          complaints about missile strikes and power outages, the Ukrainians
          delivered the brief ahead of schedule.
        </p>
        <p data-aos="fade-up">
          After reaching a high of $12k, PlaceboCoin went to zero in a matter of
          hours. Because we took payment in PlaceboCoin but our subcontractors
          insisted on being paid in USD we have taken a huge financial loss on
          this project.
        </p>

        <h2 data-aos="fade-up">What we did</h2>
        <div className="page1-tags" data-aos="fade-up">
          <span>Blockchain development</span>
          <span>Backend (Solidity)</span>
          <span>Smart contracts</span>
        </div>
        <div className="engineer">
          <img src="/team3.webp" alt="team" data-aos="fade-up" />
          <div className="eng-content">
            <p data-aos="fade-up">
              Studio did an amazing job building out our core blockchain
              infrastructure and I’m sure once PlaceboCoin rallies they’ll be
              able to finish the project.
            </p>
            <span data-aos="fade-up">
              Emily Selman, Head of Engineering at Unseal
            </span>
          </div>
        </div>
        <div className="web-percentage">
          <div className="per-box">
            <span></span>
            <div className="pagebox" data-aos="fade-up">
              <h3>34%</h3>
              <span>Fewer transactions</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>10%</h3>
              <span>Slower transactions</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>1000ms</h3>
              <span>Transaction latency</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>3</h3>
              <span>Active nodes</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
