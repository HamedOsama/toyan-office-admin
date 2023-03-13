import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./utils/PrivateRoutes";
import HomepageHeader from "./components/HomepageHeader";

const App = () => {
  const [reqs, setReqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [apply, setApply] = useState([]);
  const [header, setHeader] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [aboutInfo, setAboutInfo] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  useEffect(() => {
    const sliderFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/slider", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setHeader(data.data);
    };
    sliderFetch();
    const clientsFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/client", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setClients(data.data);
    };
    clientsFetch();
    const blogsFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/blog", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setBlogs(data.data);
    };
    blogsFetch();
    const servicesFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/service", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setServices(data.data);
    };
    servicesFetch();
    const AboutFetch = async () => {
      let {
        data
      } = await axios.get(
        "https://api.tawyanoffice.com/api/v1/admin/information",
        {
          Headers: {
            Accept: "/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
      );
      setAboutInfo(data.data);
    };
    AboutFetch();
    const ContactFetch = async () => {
      let {
        data
      } = await axios.get(
        "https://api.tawyanoffice.com/api/v1/admin/contacts",
        {
          Headers: {
            Accept: "/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
      );
      setContacts(data.data);
    };
    ContactFetch();
    const requestsFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/request", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setReqs(data.body);
    };
    requestsFetch();
    const applyFetch = async () => {
      let {
        data
      } = await axios.get("https://api.tawyanoffice.com/api/v1/admin/apply", {
        Headers: {
          Accept: "/",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      });
      setApply(data.body);
    };
    applyFetch();
    const newsFetch = async () => {
      let {
        data
      } = await axios.get(
        "https://api.tawyanoffice.com/api/v1/admin/newsletter",
        {
          Headers: {
            Accept: "/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
      );
      setNewsletter(data.body);
    };
    newsFetch();
  }, []);
  return (
    <div className="App">
      <ToastContainer position="top-right" rtl={true} />
      <Aside />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/"
            element={<Home reqs={reqs} apply={apply} news={newsletter} />}
          />
          <Route path="/main" element={<HomepageHeader slides={header} />} />
          <Route path="/about" element={<About info={aboutInfo} />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/clients" element={<Clients clients={clients} />} />
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route
            path="/contact"
            element={<Contact contacts={contacts} id={contacts?._id} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
