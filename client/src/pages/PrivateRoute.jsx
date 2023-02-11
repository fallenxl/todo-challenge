import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user, redirectTo = "/auth" }) => {
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
