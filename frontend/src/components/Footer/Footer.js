import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";
import { PiGearFill } from "react-icons/pi";

export default function Footer() {
  const [email, setEmail] = useState("");
  // handleNewsletter
  // const handleNewsletter = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `http://localhost:8080/api/v1/subscription//create-email`,
  //       { email }
  //     );
  //     if (data?.success) {
  //       toast.success(data?.message, { theme: "dark", position: "top-center" });
  //     } else {
  //       toast.error(data?.message, {
  //         theme: "colored",
  //         position: "top-center",
  //       });
  //     }
  //     setEmail("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const params = {
    headers: {
      Authorization:
        "bearer " +
        "90b018657d965bb28696cc08b943de3e3219f32da7680dfd81ef951b30af57738c9982b77c00927ff4cff5e89157255dc09b3eecde3dc53ba1a4ae00cd265d44474644c0beafb4922ac6d2993fa9ea4639f3f14454ef30a492fbeb16f246855e418959418222c914aadd8cd7d68d2b7450aba40dec7106a554858c50119ee16a",
    },
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/api/subscriptions",
          {
            data: {
              email,
            },
          },
          params
        )
        .then((response) => {
          console.log(response);
        });
      setEmail("");
      toast.success("Email send successfully!", {
        position: "top-center",
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-main" data-aos="fade-up">
        <div className="main-left">
          <div className="footer-left">
            <h3>Work</h3>
            <ul>
              <Link to="#">
                <li>FamilyFund</li>
              </Link>
              <Link to="#">
                <li>Unseal</li>
              </Link>{" "}
              <Link to="#">
                <li>Phobia</li>
              </Link>{" "}
              <Link to="/work">
                <li>See all →</li>
              </Link>
            </ul>
          </div>
          <div className="footer-main1">
            <h3>Company</h3>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/progress">
                <li>Progress</li>
              </Link>{" "}
              <Link to="/blogs">
                <li>Blog</li>
              </Link>{" "}
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="footer-main2">
            <h3>Connect</h3>
            <ul>
              <Link to="#">
                <li>Facebook</li>
              </Link>
              <Link to="#">
                <li>Instagram</li>
              </Link>
              <Link to="#">
                <li>LinkedIn</li>
              </Link>
              <Link to="#">
                <li>Twitter</li>
              </Link>
              <Link to="#">
                <li>GitHub</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h3>Sign up for our newsletter</h3>
          <p>
            Subscribe to get the latest design news, articles, resources and
            inspiration.
          </p>
          <form onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>{<BsArrowRight />}</button>
          </form>
        </div>
      </div>
      <div
        className="footer-bottom"
        data-aos="fade-up"
        style={{ position: "relative" }}
      >
        <div className="logo">
          <Link to="/">
            {/* <h1>Infra Dev</h1> */}
            <img src="icon1.png" alt="icons" width={75} height={75} />
          </Link>
        </div>
        <div className="copy-right">
          <h3>&copy; Infra Dev Dot Net. 2023</h3>
        </div>
      </div>
      <div className="gears-footer">
        <PiGearFill />
      </div>
    </div>
  );
}
