import React, { useEffect, useState } from "react";
import "./adminContact.css";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { MdContacts } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImBlogger2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Subscription() {
  const [data, setData] = useState([]);
  const [serialNumber] = useState(1);
  console.log(data);
  const getContact = async () => {
    try {
      const { data } = await axios.get(`/api/v1/subscription/get-email`);
      setData(data?.emails);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContact();

    // eslint-disable-next-line
  }, []);

  // Delete Contacts
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/subscription/delete-email/${id}`
      );
      if (data?.success) {
        getContact();
        toast.success("Subscription email deleted successfully!", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Contact-details"}>
      <div className="Admin-contacts-wrapper">
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
        <h1>Subscription Email</h1>
        <div className="contact-table">
          <table>
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Email </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((s, index) => (
                <tr key={s._id}>
                  <td data-label="Sr#">{serialNumber + index}</td>
                  <td data-label="Email">{s?.email}</td>
                  <td data-label="Action">
                    <button
                      onClick={() => handleDelete(s?._id)}
                      style={{ float: "center" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
