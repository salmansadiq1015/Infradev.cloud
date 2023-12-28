import React, { useEffect, useState } from "react";
import "./blogs.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { Loader2 } from "lucide-react";
import moment from "moment";
import fetchDataFromApi from "./../../utils/api";

export default function Blogs() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // //   Get ALl Blogs
  // const getBlog = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.get(`/api/v1/blog/get-blog`);
  //     setData(data?.blog);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getBlog();
  //   //   eslint-disable-next-line
  // }, []);

  // Strapi Blogs

  useEffect(() => {
    getBlogs();

    // eslint-disable-next-line
  }, []);

  const getBlogs = () => {
    setIsLoading(true);
    fetchDataFromApi("api/blogs?populate=*").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <div
          className=" animate-pulse"
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Loader2 className="animate-spin h-6 w-6 text-zinc-900" />
          <h3 style={{ fontSize: "1.4rem", color: "#222", fontWeight: "600" }}>
            Loading...
          </h3>
        </div>
      ) : (
        <div className="blogs-wrapper1">
          {data?.map((blog) => (
            <>
              <div className="blog-container" data-aos="fade-up" key={blog?.id}>
                <div className="blog-left">
                  <span>
                    {moment(blog?.attributes?.createdAt).format("MMMM D, YYYY")}
                  </span>
                  <div className="blog-auth">
                    <img
                      src={`${blog.attributes.logo.data.attributes.url}`}
                      alt="auth"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: ".4rem",
                      }}
                    />
                    <div className="auth-name">
                      <h3>{blog?.attributes?.name}</h3>
                      <span>{blog?.attributes?.designation}</span>
                    </div>
                  </div>
                </div>
                <div className="blog-right">
                  <div className="blog-right-content">
                    <h2>{blog?.attributes?.title}</h2>

                    <div className="blog-right-auth">
                      <span>
                        {moment(blog?.attributes?.createdAt).format(
                          "MMMM D, YYYY"
                        )}
                      </span>
                      <div className="blog-auth">
                        <img
                          src={`${blog.attributes.logo.data.attributes.url}`}
                          alt="auth"
                          style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            borderRadius: ".4rem",
                          }}
                        />
                        <div className="auth-name">
                          <h3>{blog?.attributes?.name}</h3>
                          <span>{blog?.attributes?.designation}</span>
                        </div>
                      </div>
                    </div>

                    <p>{blog?.attributes?.shortDesc}</p>
                    <button
                      onClick={() => navigate(`/blogs/detail/${blog?.id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              {/* ------------Lines------------ */}
              <div className="lines ml-[2rem]" data-aos="fade-up">
                <span></span>
                <span></span>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}
