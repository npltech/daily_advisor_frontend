import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated && !Cookies.get("accessToken")) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
