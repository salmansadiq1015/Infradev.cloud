import React from "react";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import Section2 from "../../components/Home/Section2";
import Section4 from "../../components/Home/Section4";
import Section7 from "../../components/Home/Section7";
import Section8 from "../../components/Home/Section8";
import { PiGearFill } from "react-icons/pi";

export default function Home() {
  return (
    <Layout title={"infradev.cloud"}>
      <div className="home-container">
        {/* -------Section 1---------- */}
        <section className="section1" data-aos="fade-up">
          <div className="gears-home">
            <PiGearFill />
          </div>
          <h1>Award-winning development studio based in Denmark.</h1>
          <p>
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </section>
        {/* ------------Section 2------------- */}
        <section className="Home-section2" data-aos="fade-up">
          <Section2 />
        </section>

        {/* ------------Section 3------------- */}
        <section className="Home-section3" data-aos="fade-up">
          <div className="hs3-content">
            <h1>Harnessing technology for a brighter future</h1>
            <p>
              We believe technology is the answer to the world’s greatest
              challenges. It’s also the cause, so we find ourselves in bit of a
              catch 22 situation.
            </p>
          </div>
        </section>

        {/* --------Section 4-------- */}
        <section className="Home-section4" data-aos="fade-up">
          <Section4 />
        </section>

        {/* ----------Section 5-------- */}
        <section className="Home-section5" data-aos="fade-up">
          <div className="s5-content">
            <h1>
              "The team at Studio went above and beyond with our onboarding,
              even finding a way to access the user’s microphone without
              triggering one of those annoying permission dialogs."
            </h1>
            <img src="/section5.svg" alt="s5icons" />
          </div>
        </section>

        {/* Section 6 */}
        <section className="Home-section6" data-aos="fade-up">
          <div className="s6-content">
            <h3>Services</h3>
            <h2>
              We help you identify, explore and respond to new opportunities.
            </h2>
            <p>
              As long as those opportunities involve giving us money to
              re-purpose old projects — we can come up with an endless number of
              those.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="Home-section7" data-aos="fade-up">
          <Section7 />
        </section>

        {/* Section 8 */}
        <section className="Home-section8" data-aos="fade-up">
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
