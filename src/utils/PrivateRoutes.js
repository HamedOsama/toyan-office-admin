import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ t }) => {
  let auth = { token: t };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
