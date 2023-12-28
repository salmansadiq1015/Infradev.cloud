import React from "react";
import Layout from "../Layout/Layout";
import "./style.css";

export default function Page3() {
  return (
    <Layout title={"Phobia"}>
      <section className="work-page1-wrapper" data-aos="fade-up">
        <div className="page-section1" data-aos="fade-up">
          <h3 data-aos="fade-up">Case Study</h3>
          <h1 data-aos="fade-up">Overcome your fears, find your match</h1>
          <p data-aos="fade-up">
            Find love in the face of fear — Phobia is a dating app that matches
            users based on their mutual phobias so they can be scared together.
          </p>
        </div>
      </section>

      {/* ---------------Section2----------- */}
      <section className="page-section2" data-aos="fade-up">
        <div className="page-website">
          <div className="page-box" data-aos="fade-down">
            <span>Client</span>
            <span>Phobia</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Year</span>
            <span>2022</span>
          </div>
          <span></span>
          <div className="page-box" data-aos="fade-down">
            <span>Service</span>
            <span>App development</span>
          </div>
        </div>
        <img src="/page3.webp" alt="banner" />
      </section>

      <section className="page-section3">
        <h1 data-aos="fade-down">Overview</h1>
        <p data-aos="fade-up">
          Noticing incredibly high churn, the team at Phobia came to the
          conclusion that, instead of having a fundamentally flawed business
          idea, they needed to improve their onboarding process.
        </p>
        <p data-aos="fade-up">
          Previously users selected their phobias manually but this led to some
          users selecting things they weren’t actually afraid of to increase
          their matches.
        </p>
        <p data-aos="fade-up">
          To combat this, we developed a system that displays a slideshow of
          common phobias during onboarding. We then use malware to
          surreptitiously access their microphone and detect when they have
          audible reactions. We measure the pitch, volume and duration of their
          screams and feed that information to the matching algorithm.
        </p>
        <p>
          The next phase is a VR version of the onboarding flow where users are
          subjected to a series of scenarios that will determine their fears. We
          are currently developing the first scenario, working title: “Jumping
          out of a plane full of spiders”.
        </p>

        <h2 data-aos="fade-up">What we did</h2>
        <div className="page1-tags" data-aos="fade-up">
          <span>Android</span>
          <span>iOS</span>
          <span>Malware</span>
          <span>VR</span>
        </div>
        <div className="engineer">
          <img src="/team1.webp" alt="team" data-aos="fade-up" />
          <div className="eng-content">
            <p data-aos="fade-up">
              The team at Studio went above and beyond with our onboarding, even
              finding a way to access the user’s microphone without triggering
              one of those annoying permission dialogs.
            </p>
            <span data-aos="fade-up">Jenny Wilson, CPO of Phobia</span>
          </div>
        </div>
        <div className="web-percentage">
          <div className="per-box">
            <span></span>
            <div className="pagebox" data-aos="fade-up">
              <h3>23%</h3>
              <span>Churn rate</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>5X</h3>
              <span>Uninstalls</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>2.7</h3>
              <span>App store rating</span>
            </div>
          </div>
          <div className="per-box" data-aos="fade-up">
            <span></span>
            <div className="pagebox">
              <h3>9</h3>
              <span>Pending lawsuits</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
