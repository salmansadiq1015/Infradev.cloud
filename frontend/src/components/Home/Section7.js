import React from "react";
import "./hsection.css";

export default function Section7() {
  return (
    <div className="homeSection-7">
      <div className="hs7Content-container">
        <div className="images">
          <img src="/laptop.webp" alt="laptop_image" />
        </div>
        <div className="hs7-content">
          <div className="hs7-box">
            <p>
              <b>Web development.</b> We specialise in crafting beautiful, high
              quality marketing pages. The rest of the website will be a shell
              that uses lorem ipsum everywhere.
            </p>
          </div>
          <span></span>
          <div className="hs7-box">
            <p>
              <b>Application development.</b> We have a team of skilled
              developers who are experts in the latest app frameworks, like
              Angular 1 and Google Web Toolkit.
            </p>
          </div>
          <span></span>
          <div className="hs7-box">
            <p>
              <b>E-commerce.</b> We are at the forefront of modern e-commerce
              development. Which mainly means adding your logo to the Shopify
              store template we’ve used for the past six years.
            </p>
          </div>
          <span></span>
          <div className="hs7-box">
            <p>
              <b>Custom content management.</b> At Studio we understand the
              importance of having a robust and customised CMS. That’s why we
              run all of our client projects out of a single, enormous Joomla
              instance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
