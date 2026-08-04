import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated, hasRole } from "../utils/auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
