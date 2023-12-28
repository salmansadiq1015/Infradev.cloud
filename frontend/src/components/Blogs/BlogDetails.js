import React, { useEffect, useState } from "react";
import "./bdetails.css";
import Layout from "../Layout/Layout";
import Section8 from "../Home/Section8";
import { useParams } from "react-router-dom";
// import axios from "axios";
import moment from "moment";
// import ReactHtmlParser from "react-html-parser";
import fetchDataFromApi from "../../utils/api";
import Markdown from "react-markdown";

export default function BlogDetails() {
  const params = useParams();
  const [data, setData] = useState("");
  console.log("data", data);

  //   Get Single Blog
  // const getSingleBlog = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `/api/v1/blog/single-blog/${params?.id}`
  //     );
  //     setData(data?.blog);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSingleBlog();
  //   // eslint-disable-next-line
  // }, []);

  // Strapi Single Blog
  useEffect(() => {
    getBlog();

    // eslint-disable-next-line
  }, []);

  const getBlog = () => {
    fetchDataFromApi(`api/blogs?populate=*&[filters][id]=${params?.id}`).then(
      (res) => {
        console.log(res.data);
        setData(res.data[0].attributes);
      }
    );
  };

  return (
    <Layout title={"Blog Details"}>
      <div className="blog-details-wrapper">
        <div className="blog-detail-container">
          <div data-aos="fade-up" className="blogdetail-header">
            <span>{moment(data?.createdAt).format("MMMM D, YYYY")}</span>
            <h1>{data?.title}</h1>
            <p>
              {data?.name}, {data?.designation}
            </p>
          </div>
          <div className="blogdetail-content1" data-aos="fade-up">
            {/* {ReactHtmlParser(data?.description)} */}
            <Markdown>{data?.description}</Markdown>
          </div>
        </div>

        {/*-------------------- Section 2-------------- */}
        <section className="blog-detail-section2" data-aos="fade-up">
          <Section8 />
        </section>
      </div>
    </Layout>
  );
}
