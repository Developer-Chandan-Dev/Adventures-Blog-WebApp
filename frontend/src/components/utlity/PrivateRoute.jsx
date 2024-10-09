import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state)=> state.user.user);
  

  // Check if the user is authenticated
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
