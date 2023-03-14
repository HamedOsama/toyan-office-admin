import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;
const Login = () => {
  const [formData, setFormData] = useState({});
  const [isLoged, setIsLoged] = useState(false);
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/login",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        localStorage.setItem("token", true);
        setIsLoged(true);
      })
      .catch(err => {
        console.error(err);
        toast.error("Incorrect Email or Password");
      });
  };
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {isLoged && <Navigate to="/" />}
    </div>
  );
};

export default Login;
