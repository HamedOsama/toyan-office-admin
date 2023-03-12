import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Aside = () => {
  let loc = useLocation().pathname;
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
        </ul>
      </aside>
    );
  }
};

export default Aside;
