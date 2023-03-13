import React from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Aside = () => {
  let loc = useLocation().pathname;
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/logout",
    method: "POST",
    headers: headersList
  };
  const handleLogOut = async () => {
    axios.request(requestOptions).catch(() => {
      toast.error("عذرا حدث خطا حاول مره اخرى");
    });
    return <Navigate to="/login" />;
  };
  if (loc !== "/login") {
    return (
      <aside>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/main">الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to="/about">نبذه عنا</NavLink>
          </li>
          <li>
            <NavLink to="/services">قسم الخدمات</NavLink>
          </li>
          <li>
            <NavLink to="/clients">قسم العملاء</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">قسم المدونات</NavLink>
          </li>
          <li>
            <NavLink to="/contact">معلومات الاتصال</NavLink>
          </li>
          <li>
            <NavLink to="/account">معلومات الحساب</NavLink>
          </li>
          <li>
            <span onClick={handleLogOut}>تسجيل الخروج</span>
          </li>
        </ul>
      </aside>
    );
  }
};

export default Aside;
