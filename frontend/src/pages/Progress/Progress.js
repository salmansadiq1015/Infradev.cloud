import React from "react";
import Layout from "../../components/Layout/Layout";
import "./progress.css";
import Section8 from "../../components/Home/Section8";

export default function Progress() {
  return (
    <Layout title={"Our Progress"}>
      <div className="progress-wrapper">
        {/* ---------Section------------ */}
        <section className="progress-section1">
          <div className="progress-section-content" data-aos="fade-up">
            <h3>Our process</h3>
            <h1>How we work</h1>
            <p data-aos="fade-up">
              We believe in efficiency and maximizing our resources to provide
              the best value to our clients. The primary way we do that is by
              re-using the same five projects we’ve been developing for the past
              decade.
            </p>
          </div>
        </section>

        {/* ----------------Section2------------- */}
        <section className="progress-sectio2">
          <div className="psection2-wrapper">
            {/* Box1 */}
            <div className="psection2-box" data-aos="fade-up">
              <div className="images" data-aos="fade-up">
                <img src="/progress1.webp" alt="progress-img1" />
              </div>
              <div className="psection2-content">
                <h3>01</h3>
                <h1>Discover</h1>
                <p data-aos="fade-up">
                  We work closely with our clients to understand their{" "}
                  <b>needs</b> and goals, embedding ourselves in their every day
                  operations to understand what makes their business tick.
                </p>
                <p data-aos="fade-up">
                  Our team of private investigators shadow the company
                  director’s for several weeks while our account managers focus
                  on going through their trash. Our senior security experts then
                  perform social engineering hacks to gain access to their{" "}
                  <b>business</b> accounts — handing that information over to
                  our forensic accounting team.
                </p>
                <p data-aos="fade-up">
                  Once the full audit is complete, we report back with a
                  comprehensive <b>plan</b> and, more importantly, a budget.
                </p>
                <h2>Included in this phase</h2>
                <div className="progress-tags" data-aos="fade-up">
                  <span>In-depth questionnaires</span>
                  <span>Feasibility studies</span>
                  <span>Blood samples</span>
                  <span>Employee surveys</span>
                  <span>Proofs-of-concept</span>
                  <span>Forensic audit</span>
                </div>
              </div>
            </div>

            {/* Box2 */}
            <div className="psection2-box" data-aos="fade-up">
              <div className="psection2-content">
                <h3>02</h3>
                <h1>Build</h1>
                <p data-aos="fade-up">
                  Based off of the discovery phase, we develop a comprehensive
                  roadmap for each product and start working towards delivery.
                  The roadmap is an intricately tangled mess of technical
                  nonsense designed to drag the project out as long as possible.
                </p>
                <p data-aos="fade-up">
                  Each client is assigned a key account manager to keep lines of
                  communication open and obscure the actual progress of the
                  project. They act as a buffer between the client’s incessant
                  nagging and the development team who are hard at work scouring
                  open source projects for code to re-purpose.
                </p>
                <p data-aos="fade-up">
                  Our account managers are trained to only reply to client
                  emails after 9pm, several days after the initial email. This
                  reinforces the general aura that we are very busy and
                  dissuades clients from asking for changes.
                </p>
                <div className="progress-tags1" data-aos="fade-up">
                  <span></span>
                  <div>
                    <p data-aos="fade-up">
                      "Studio were so regular with their progress updates we
                      almost began to think they were automated!"
                    </p>
                    <h3>Debra Fiscal, CEO of Unseal</h3>
                  </div>
                </div>
              </div>
              <div
                className="images"
                style={{
                  webkitClipPath:
                    "polygon(50% 0%, 61% 35%, 98% 34%, 76% 57%, 98% 99%, 50% 70%, 10% 98%, 26% 58%, 0 35%, 38% 34%)",
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 34%, 76% 57%, 98% 99%, 50% 70%, 10% 98%, 26% 58%, 0 35%, 38% 34%)",
                }}
                data-aos="fade-up"
              >
                <img src="/progress2.webp" alt="progress-img1" />
              </div>
            </div>

            {/* Box3 */}
            <div className="psection2-box" data-aos="fade-up">
              <div
                className="images"
                style={{
                  webkitClipPath:
                    "polygon(0% 15%, 40% 55%, 18% 0, 89% 6%, 59% 49%, 100% 15%, 100% 85%, 21% 63%, 85% 100%, 15% 100%, 49% 56%, 0% 85%)",
                  clipPath:
                    "polygon(0% 15%, 40% 55%, 18% 0, 89% 6%, 59% 49%, 100% 15%, 100% 85%, 21% 63%, 85% 100%, 15% 100%, 49% 56%, 0% 85%)",
                }}
                data-aos="fade-up"
              >
                <img src="/progress1.webp" alt="progress-img1" />
              </div>
              <div className="psection2-content">
                <h3>03</h3>
                <h1>Deliver</h1>
                <p data-aos="fade-up">
                  About halfway through the Build phase, we push each project
                  out by 6 weeks due to a change in <b>requirements</b>. This
                  allows us to increase the budget a final time before launch.
                </p>
                <p data-aos="fade-up">
                  Despite largely using pre-built components, most of the
                  <b>progress</b> on each project takes place in the final 24
                  hours. The development time allocated to each client is
                  actually spent making augmented reality demos that go viral on
                  Twitter.
                </p>
                <p data-aos="fade-up">
                  We ensure that the main pages of the site are{" "}
                  <b>fully functional</b>
                  at launch — the auxiliary pages will, of course, be lorem
                  ipusm shells which get updated as part of our exorbitant
                  <b>maintenance</b> retainer.
                </p>
                <h2>Included in this phase</h2>
                <div className="progress-phases">
                  <p data-aos="fade-up">
                    <b>Testing.</b> Our projects always have 100% test coverage,
                    which would be impressive if our tests weren’t as porous as
                    a sieve.
                  </p>
                  <span></span>
                  <p data-aos="fade-up">
                    <b>Infrastructure.</b> To ensure reliability we only use the
                    best Digital Ocean droplets that $4 a month can buy.
                  </p>
                  <span></span>

                  <p data-aos="fade-up">
                    <b>Support.</b> Because we hold the API keys for every
                    critical service your business uses, you can expect a
                    lifetime of support, and invoices, from us. Our values
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------Section3------------ */}
        <section className="progress-section3">
          <div className="progress-section-content" data-aos="fade-up">
            <h3>Our values</h3>
            <h1>Balancing reliability and innovation</h1>
            <p data-aos="fade-up">
              We strive to stay at the forefront of emerging trends and
              technologies, while completely ignoring them and forking that old
              Rails project we feel comfortable using. We stand by our core
              values to justify that decision.
            </p>
          </div>
          <div className="progress-values">
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Meticulous.</b> The first part of any partnership is getting
                our designer to put your logo in our template. The second step
                is getting them to do the colors.
              </p>
            </div>
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Efficient.</b> We pride ourselves on never missing a deadline
                which is easy because most of the work was done years ago
              </p>
            </div>
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Adaptable.</b> Every business has unique needs and our
                greatest challenge is shoe-horning those needs into something we
                already built.
              </p>
            </div>
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Honest.</b> We are transparent about all of our processes,
                banking on the simple fact our clients never actually read
                anything.
              </p>
            </div>
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Loyal.</b> We foster long-term relationships with our clients
                that go beyond just delivering a product, allowing us to invoice
                them for decades.
              </p>
            </div>
            <div className="values-box">
              <span></span>
              <p data-aos="fade-down">
                <b>Innovative.</b>The technological landscape is always evolving
                and so are we. We are constantly on the lookout for new open
                source projects to clone.
              </p>
            </div>
          </div>
        </section>

        {/* ----------Section4--------------- */}
        <section className="progress-section4" data-aos="fade-down">
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
