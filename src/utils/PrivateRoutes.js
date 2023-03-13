import { useState, useEffect } from "react";
import { Outlet, Navigate, redirect } from "react-router-dom";
import axios from "axios";

const PrivateRoutes = () => {
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
        return redirect('/');
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
      if (auth === true) {
        // Redirect to home page when authenticated
        <Navigate to="/" />;
      }
    },[auth]);
  if (loading === true) {
    return <p>loading------------</p>;
  } else {
    return auth === true ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
