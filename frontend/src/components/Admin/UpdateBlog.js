import React, { useEffect, useRef, useState } from "react";
import "./create.css";
import { toast } from "react-toastify";
import axios from "axios";
import JoditEditor from "jodit-react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function UpdateBlog({ setUpdateShow, getBlog, updateId }) {
  const editor = useRef(null);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");

  //   Get Single Blog
  const getSingleBlog = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/single-blog/${updateId}`);
      setName(data?.blog?.name);
      setTitle(data?.blog?.title);
      setDesignation(data?.blog?.designation);
      setShortDesc(data?.blog?.shortDesc);
      setDescription(data?.blog?.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBlog();
    // eslint-disable-next-line
  }, []);

  // Update Blog
  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      const blogData = new FormData();
      blogData.append("name", name);
      blogData.append("logo", logo);
      blogData.append("title", title);
      blogData.append("shortDesc", shortDesc);
      blogData.append("designation", designation);
      blogData.append("description", description);
      const { data } = await axios.put(
        `/api/v1/blog/update-blog/${updateId}`,
        blogData
      );
      if (data?.success) {
        getBlog();
        toast.success("Blog updated successfully!", {
          theme: "colored",
          position: "top-center",
        });
        setUpdateShow(false);
      } else {
        toast.error("Add Profile image again!", {
          position: "top-center",
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  // Editor
  const config = {
    placeholder: "Blog Details...",
    readonly: false,
  };

  return (
    <div className="create-blog-wrapper1">
      <div className="form">
        <div className="closeblog">
          <AiFillCloseCircle onClick={() => setUpdateShow(false)} />
        </div>
        <h1>Update Blog</h1>
        <form onSubmit={updateBlog}>
          {/* Profile Image */}
          <div className="profile-photo">
            <input
              type="file"
              required
              id="profileImg"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
              style={{ display: "none" }}
            />
            <div className="profileImage">
              {logo ? (
                <img
                  src={URL.createObjectURL(logo)}
                  alt="profile"
                  className="img img-responsive"
                  style={{ width: "4rem", height: "4rem" }}
                />
              ) : (
                <img
                  src={`/api/v1/blog/auth-image/${updateId}`}
                  alt="profile"
                />
              )}
              <label
                htmlFor="profileImg"
                style={{
                  padding: ".4rem .6rem",
                  background: "#111827",
                  borderRadius: ".3rem",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: ".2rem .2rem .2rem rgba(0,0,0,.3)",
                }}
              >
                {logo ? "Change Image" : "Profile Image"}
              </label>
            </div>
          </div>

          {/* End Profile Image */}
          <input
            type="text"
            placeholder="Auth Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Auth Designation"
            required
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Write blog title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Blog shot description"
            required
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />
          <JoditEditor
            ref={editor}
            value={description}
            tabIndex={1}
            config={config}
            onBlur={(newContent) => setDescription(newContent)}
            onChange={(newContent) => setDescription(newContent)}
          />
          <div className="create-button">
            <button type="submit" onClick={updateBlog}>
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
