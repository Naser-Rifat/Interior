import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

function AdminRoute({ children }) {
  const { isLoading, user, admin } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  return user?.email && admin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
export default AdminRoute;
