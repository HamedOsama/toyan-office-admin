import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";

const Account = () => {
  const [formData, setFormData] = useState({});
  // const [isLoggedOut, setIsLoggedOut] = useState(false);
  // {isLoggedOut && <Navigate to="/login" />}
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
  // const handleLogOut = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://api.tawyanoffice.com/api/v1/admin/logout",
  //       {
  //         headers: {
  //           Accept: "/",
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //         }
  //       }
  //     );
  //     if (response.status === 200) {
  //       setIsLoggedOut(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleEdit = () => {
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
            <label htmlFor="password">New Password*</label>
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
