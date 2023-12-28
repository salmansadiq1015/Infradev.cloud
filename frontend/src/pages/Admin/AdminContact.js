import React, { useEffect, useState } from "react";
import "./adminContact.css";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { MdContacts } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImBlogger2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminContact() {
  const [data, setData] = useState([]);
  const [serialNumber] = useState(1);
  console.log(data);
  const getContact = async () => {
    try {
      const { data } = await axios.get(`/api/v1/contact/get-contact`);
      setData(data?.contacts);
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
        `/api/v1/contact/delete-contact/${id}`
      );
      if (data?.success) {
        getContact();
        toast.success("Contact deleted successfully!", {
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
        <h1>All Users Contact</h1>
        <div className="contact-table">
          <table>
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Name </th>
                <th>Email </th>
                <th>Phone </th>
                <th>Company </th>
                <th>Budget </th>
                <th>Message </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((c, index) => (
                <tr key={c._id}>
                  <td data-label="Sr#">{serialNumber + index}</td>
                  <td data-label="Name">{c?.name}</td>
                  <td data-label="Email">{c?.email}</td>
                  <td data-label="Phone">{c?.phone}</td>
                  <td data-label="Company">{c?.company}</td>
                  <td data-label="Budget">{c?.budget}</td>
                  <td data-label="Message">{c?.message}</td>
                  <td data-label="Action">
                    <button onClick={() => handleDelete(c?._id)}>Delete</button>
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
