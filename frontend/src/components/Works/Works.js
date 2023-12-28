import React from "react";
import "./works.css";
import { useNavigate } from "react-router-dom";

export default function Works() {
  const navigate = useNavigate();
  return (
    <div className="works-container1">
      <div className="works-wrap">
        <div
          className="works-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="works-left">
            <img src="/workicon1.svg" alt="icon1" />
            <h3>FamilyFund</h3>
            <span>Web development, CMS</span>
            <span>January 2023</span>
          </div>
          <div className="works-right">
            <h2>Skip the bank, borrow from those you trust</h2>
            <p>
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </p>
            <p>
              We developed a custom CMS to power their blog with and optimised
              their site to rank higher for the keywords “Gary Vee” and “Tony
              Robbins”.
            </p>
            <button onClick={() => navigate("/work/family-fund")}>
              Read case study
            </button>
            <p>
              "Working with Studio, we felt more like a partner than a customer.
              They really resonated with our mission to change the way people
              convince their parents to cash out their pensions."
            </p>
            <h3>Debra Fiscal, CEO of FamilyFund</h3>
          </div>
        </div>
        {/* ------------Lines------------ */}
        <div className="lines" data-aos="fade-up">
          <span></span>
          <span></span>
        </div>

        {/* -------box2----------- */}
        <div
          className="works-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="works-left">
            <img src="/workicon2.svg" alt="icon1" />
            <h3>Unseal</h3>
            <span>Blockchain development</span>
            <span>October 2022</span>
          </div>
          <div className="works-right">
            <h2>Get a hodl of your health</h2>
            <p>
              Unseal is the first NFT platform where users can mint and trade
              NFTs of their own personal health records, allowing them to take
              control of their data.
            </p>
            <p>
              We built out the blockchain infrastructure that supports Unseal.
              Unfortunately, we took a massive loss on this project when
              Unseal’s cryptocurrency, PlaceboCoin, went to zero.
            </p>
            <button onClick={() => navigate("/work/unseal")}>
              Read case study
            </button>
            <p>
              "Studio did an amazing job building out our core blockchain
              infrastructure and I’m sure once PlaceboCoin rallies they’ll be
              able to finish the project."
            </p>
            <h3>Emily Selman, Head of Engineering at Unseal</h3>
          </div>
        </div>
        {/* ------------Lines------------ */}
        <div className="lines" data-aos="fade-up">
          <span></span>
          <span></span>
        </div>

        {/* -------Box3-------- */}
        <div
          className="works-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="works-left">
            <img src="/workicons2.svg" alt="icon1" />
            <h3>Phobia</h3>
            <span>App development</span>
            <span>June 2022</span>
          </div>
          <div className="works-right">
            <h2>Overcome your fears, find your match</h2>
            <p>
              Find love in the face of fear — Phobia is a dating app that
              matches users based on their mutual phobias so they can be scared
              together.
            </p>
            <p>
              We worked with Phobia to develop a new onboarding flow. A user is
              shown pictures of common phobias and we use the microphone to
              detect which ones make them scream, feeding the results into the
              matching algorithm.
            </p>
            <button onClick={() => navigate("/work/phobia")}>
              Read case study
            </button>
            <p>
              The team at Studio went above and beyond with our onboarding, even
              finding a way to access the user’s microphone without triggering
              one of those annoying permission dialogs.
            </p>
            <h3>Jenny Wilson, CPO of Phobia</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
