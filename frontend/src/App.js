import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./components/Blogs/BlogDetails";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Progress from "./pages/Progress/Progress";
// import Protected from "./hooks/Protected";
import CreateBlog from "./pages/Admin/CreateBlog";
import CreateBlogs from "./components/Admin/CreateBlogs";
import UpdateBlog from "./components/Admin/UpdateBlog";
import AdminContact from "./pages/Admin/AdminContact";
import Subscription from "./pages/Admin/Subscription";
import Page1 from "./components/WorkDetail/Page1";
import Page2 from "./components/WorkDetail/Page2";
import Page3 from "./components/WorkDetail/Page3";
// import Swal from "sweetalert2";

function ScrollToTopOnPageChange() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTopOnPageChange />
        <Routes>
          {/* <Route
            path="/admin/:name"
            element={<Protected Component={CreateBlog} />}
          ></Route> */}
          <Route path="/admin/infradev" element={<CreateBlog />}></Route>
          <Route path="/admin/contacts" element={<AdminContact />}></Route>
          <Route path="/admin/subscription" element={<Subscription />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/blogs/detail/:id" element={<BlogDetails />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
          <Route path="/update-blog" element={<CreateBlogs />}></Route>
          <Route path="/create-blog" element={<UpdateBlog />}></Route>
          <Route path="/work/family-fund" element={<Page1 />}></Route>
          <Route path="/work/unseal" element={<Page2 />}></Route>
          <Route path="/work/phobia" element={<Page3 />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
