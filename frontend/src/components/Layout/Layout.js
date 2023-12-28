import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

export default function Layout({
  children,
  title,
  description,
  author,
  keywords,
}) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      {/* ------------Lines------------ */}
      {/* <div className="lines ml-[2rem]" data-aos="fade-up">
        <span></span>
        <span></span>
      </div> */}
      <Footer />
    </div>
  );
}

// Defaults Props
Layout.defaultProps = {
  title: "Infra Dev",
  description:
    "Mern Stack Project with React JS, Node JS, Express JS, MongoDB, BootStrap , CSS3, HTML5, JavaScript, & Tailwind CSS ",
  keywords: "Infra Dev Dot Net , marketing",
  author: "INFRA DEV",
};
