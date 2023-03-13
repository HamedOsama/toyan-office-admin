import React, { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const auth = async () => {
      try {
        await axios.get("https://api.tawyanoffice.com/api/v1/admin/auth", {
          Headers: {
            Accept: "/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        });
        setAuth(_ => true);
        setLoading(_ => false);
      } catch (e) {
        setAuth(_ => false);
        setLoading(_ => false);
        console.log(e);
      }
    };
    auth();
  }, []);
  useEffect(
    () => {
      if (loading === false && auth === true) {
        navigate("/", { replace: true });
      }
    },
    [auth, loading, navigate]
  );
  if (loading === true) {
    return <p>loading------------</p>;
  } else {
    return auth === true ? <Outlet /> : <Navigate to="/login" />;
  }
};
export default PrivateRoutes;
