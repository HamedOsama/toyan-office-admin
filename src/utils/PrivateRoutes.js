import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ t }) => {
  return t==true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
