import { useState, useEffect } from "react";
import { Outlet, Navigate , redirect  } from "react-router-dom";
import axios from "axios";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  console.log(auth)
  useEffect(
    () => {
      const auth = async () => {
        try {
          let {
            data
          } = await axios.get(
            "https://api.tawyanoffice.com/api/v1/admin/auth",
            {
              Headers: {
                Accept: "/",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              }
            }
          );
          setAuth(_ => true);
          return redirect("/");
        } catch (e) {
          setAuth(_ => false);
          console.log(e);
        }
      };
      auth();
    },
    []
  );
  
  if(auth)
    return  <Outlet />
     else 
    return <Navigate to="/login"  />
};

export default PrivateRoutes;
