import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/login",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        localStorage.setItem("token", true);
      })
      .catch(err => {
        console.error(err);
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
          type="text"
          name="password"
          placeholder="Password"
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
