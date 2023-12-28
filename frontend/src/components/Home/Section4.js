import React from "react";

export default function Section4() {
  return (
    <div className="homeSection4">
      <div className="card-container">
        <div className="service-card">
          <div className="image">
            <img src="/icon1.svg" alt="icon" />
          </div>
          <div className="service-date">
            <span>2023</span>
            <span>/</span>
            <span>Case study</span>
          </div>
          <h3>Skip the bank, borrow from those you trust</h3>
          <p>
            FamilyFund is a crowdfunding platform for friends and family.
            Allowing users to take personal loans from their network without a
            traditional financial institution.
          </p>
        </div>
        {/* 2 */}
        <div className="service-card">
          <div className="image">
            <img src="/icon2.svg" alt="icon" />
          </div>
          <div className="service-date">
            <span>2023</span>
            <span>/</span>
            <span>Case study</span>
          </div>
          <h3>Get a hodl of your health</h3>
          <p>
            Unseal is the first NFT platform where users can mint and trade NFTs
            of their own personal health records, allowing them to take control
            of their data.
          </p>
        </div>
        {/* 3 */}
        <div className="service-card">
          <div className="image">
            <img src="/icon3.svg" alt="icon" />
          </div>
          <div className="service-date">
            <span>2023</span>
            <span>/</span>
            <span>Case study</span>
          </div>
          <h3>Overcome your fears, find your match</h3>
          <p>
            Find love in the face of fear — Phobia is a dating app that matches
            users based on their mutual phobias so they can be scared together.
          </p>
        </div>
      </div>
    </div>
  );
}
