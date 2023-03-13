import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ t }) => {
  console.log(t)
  let auth = { token: t };
  console.log(auth)
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
