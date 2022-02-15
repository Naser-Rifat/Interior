import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

function PrivateRoute({ children }) {
  const { isLoading, user, currentuser } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  return user.email || currentuser ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
export default PrivateRoute;
