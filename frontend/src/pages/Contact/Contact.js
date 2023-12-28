import React, { useState } from "react";
import "./Contact.css";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");

  //   Handle Form
  // const handleForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `http://localhost:8080/api/v1/contact/create-contact`,
  //       {
  //         name,
  //         email,
  //         company,
  //         phone,
  //         message,
  //         budget,
  //       }
  //     );

  //     if (data?.success) {
  //       toast.success("Message send successfully!", {
  //         theme: "dark",
  //         position: "top-center",
  //       });
  //       setName("");
  //       setEmail("");
  //       setCompany("");
  //       setPhone("");
  //       setMessage("");
  //       setBudget("");
  //     } else {
  //       toast.success(data?.message, {
  //         theme: "colored",
  //         position: "top-center",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Post Contact Data in Strapi DATABASE

  const params = {
    headers: {
      Authorization:
        "bearer " +
        "90b018657d965bb28696cc08b943de3e3219f32da7680dfd81ef951b30af57738c9982b77c00927ff4cff5e89157255dc09b3eecde3dc53ba1a4ae00cd265d44474644c0beafb4922ac6d2993fa9ea4639f3f14454ef30a492fbeb16f246855e418959418222c914aadd8cd7d68d2b7450aba40dec7106a554858c50119ee16a",
    },
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "/api/contacts",
          {
            data: {
              name,
              email,
              company,
              phone,
              message,
              budget,
            },
          },
          params
        )
        .then((response) => {
          console.log(response);
        });

      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setMessage("");
      setBudget("");

      toast.success("Message send successfully!", {
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
    <Layout title={"Contact-InfraDev"}>
      <div className="contact-container">
        <div
          className="contact-header"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3>Contact us</h3>
          <h1>Let’s work together</h1>
          <p>We can’t wait to hear from you.</p>
        </div>
        <div className="contact-content">
          <div className="contact-left" data-aos="zoom-in-right">
            <h3>Our offices</h3>
            <p>
              Prefer doing things in person? We don’t but we have to list our
              addresses here for legal reasons.
            </p>
            <span></span>
            <div className="cleft-content">
              <div className="content-box">
                <h3>Copenhagen</h3>
                <span>1 Carlsberg Gate</span>
                <span>1 Carlsberg Gate</span>
              </div>
              <div className="content-box">
                <h3>Billund</h3>
                <span>24 Lego Allé</span>
                <span>7190, Billund, Denmark</span>
              </div>
            </div>
            <span></span>
            <h3>Email us</h3>
            <div className="cleft-content">
              <div className="content-box">
                <h3>Careers</h3>
                <span>careers@InfraDev.com</span>
              </div>
              <div className="content-box">
                <h3>Press</h3>
                <span>press@InfraDev.com</span>
              </div>
            </div>
            <span></span>
            <h3>Follow us</h3>
            <div className="contact-icons">
              <ul>
                <Link to="#">
                  <li>
                    <BsFacebook />
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <AiFillLinkedin />
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <FaSquareInstagram />
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <BsGithub />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="contact-Right" data-aos="zoom-in-left">
            <h3>Work inquiries</h3>
            <form onSubmit={handleForm}>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <span>Company</span>
              </div>
              <div className="inputBox">
                <input
                  type="number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span>Phone</span>
              </div>

              <div className="inputBox">
                <textarea
                  type="number"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span>Message</span>
              </div>
              <div className="Budget">
                <span>Budget</span>
                <div className="lables">
                  <label>
                    <input
                      type="radio"
                      value="$25K – $50K"
                      checked={budget === "$25K – $50K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $25K – $50K
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="$50K – $100K"
                      checked={budget === "$50K – $100K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $50K – $100K
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="$100K – $150K"
                      checked={budget === "$100K – $150K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $100K – $150K
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="More than $150K"
                      checked={budget === "More than $150K"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    More than $150K
                  </label>
                </div>
              </div>
              <div className="submit-button">
                <button type="submit">Let's work together</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
