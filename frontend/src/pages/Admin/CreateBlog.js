import React, { useEffect, useState } from "react";
import "./style.css";
import Layout from "../../components/Layout/Layout";
import moment from "moment";
import axios from "axios";
import { IoAddCircleSharp } from "react-icons/io5";
import CreateBlogs from "../../components/Admin/CreateBlogs";
import { toast } from "react-toastify";
import UpdateBlog from "../../components/Admin/UpdateBlog";
import { MdContacts } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImBlogger2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function CreateBlog() {
  const [data, setData] = useState([]);
  const [addShow, setAddShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [updateId, setUpdateId] = useState("");

  //   Get ALl Blogs
  const getBlog = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog`);
      setData(data?.blog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
    //   eslint-disable-next-line
  }, []);

  //    ---------------Delete Blog---------------->
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        getBlog();
        toast.success("Blog deleted successfully!", {
          theme: "dark",
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", { theme: "colored" });
    }
  };

  // --------------Handle Update----------->
  const handleUpdate = (id) => {
    setUpdateId(id);
    setUpdateShow(true);
    // navigate("/update-blog");
  };

  return (
    <Layout title={"All-Blogs"}>
      <div className="all-blogs-container">
        <div className="admin-routes">
          <div className="route-btn">
            <div className="route1">
              <Link to="/admin/infradev">
                <ImBlogger2 title="Blogs" />
              </Link>
            </div>
            <div className="route2">
              <Link to="/admin/contacts">
                <MdContacts title="Contacts" />
              </Link>
            </div>
            <div className="route3">
              <Link to="/admin/subscription">
                <MdMarkEmailUnread title="Subscription" />
              </Link>
            </div>
          </div>
          <div className="add-blog">
            <IoAddCircleSharp
              onClick={() => setAddShow(true)}
              title="Add New Blog"
            />
          </div>
        </div>
        <h1>All Blogs</h1>
        <section className="all-blog-wrapper">
          {data?.map((blog) => (
            <>
              <div
                className="blog-container"
                data-aos="fade-up"
                key={blog?._id}
              >
                <div className="blog-left">
                  <span>{moment(blog?.createdAt).format("MMMM D, YYYY")}</span>
                  <div className="blog-auth">
                    <img
                      src={`/api/v1/blog/auth-image/${blog?._id}`}
                      alt="auth"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: ".4rem",
                      }}
                    />
                    <div className="auth-name">
                      <h3>{blog?.name}</h3>
                      <span>{blog?.designation}</span>
                    </div>
                  </div>
                </div>
                <div className="blog-right">
                  <div className="blog-right-content">
                    <h2>{blog?.title}</h2>

                    <div className="blog-right-auth">
                      <span>
                        {moment(blog?.createdAt).format("MMMM D, YYYY")}
                      </span>
                      <div className="blog-auth">
                        <img
                          src={`/api/v1/blog/auth-image/${blog?._id}`}
                          alt="auth"
                          style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            borderRadius: ".4rem",
                          }}
                        />
                        <div className="auth-name">
                          <h3>{blog?.name}</h3>
                          <span>{blog?.designation}</span>
                        </div>
                      </div>
                    </div>

                    <p>{blog?.shortDesc}</p>
                    <div className="buttons">
                      <button onClick={() => handleUpdate(blog?._id)}>
                        Update
                      </button>
                      <button onClick={() => handleDelete(blog?._id)}>
                        Delete
                      </button>
                    </div>
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
        </section>

        {/* Create Blog */}
        {addShow ? (
          <>
            <div className="create-blogs">
              <CreateBlogs setAddShow={setAddShow} getBlog={getBlog} />
            </div>
          </>
        ) : (
          ""
        )}

        {/* Update Blog */}
        {updateShow ? (
          <>
            <div className="create-blogs">
              <UpdateBlog
                setUpdateShow={setUpdateShow}
                getBlog={getBlog}
                updateId={updateId}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
