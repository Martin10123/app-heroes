import { useContext } from "react";
// import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.logged ? <Navigate to="/" /> : children;
};

export default PublicRoute;

// PublicRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
