import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Aside = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const loc = useLocation().pathname;
  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        "https://api.tawyanoffice.com/api/v1/admin/logout",
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
      );
      if (response.status === 200) {
        setIsLoggedOut(true);
      }
    } catch (error) {
      toast.error("عذرا حدث خطأ، حاول مرة أخرى");
    }
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
        {isLoggedOut && <Navigate to="/login" />}
      </aside>
    );
  }
  return null;
};

export default Aside;
