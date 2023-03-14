import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Account = () => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin",
    method: "PATCH",
    headers: headersList,
    data: formData
  };
  const handleEdit = async e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        toast.success("Account updated successfully");
      })
      .catch(() => {
        toast.error("Please try again");
      });
  };
  return (
    <main>
      <div className="wrapper">
        <div className="add-new">
          <h2>تعديل معلومات حسابك</h2>
          <form style={{ direction: "ltr" }} onSubmit={handleEdit}>
            <label htmlFor="email">New Email Address*</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              placeholder="Email"
              onChange={e => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <label htmlFor="password">
              New Password (must contain at least one capital/small letter,
              special character and number)*
            </label>
            <input
              type="password"
              required
              id="password"
              name="password"
              placeholder="Password"
              onChange={e => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <button type="submit" className="btn">
              Edit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Account;
