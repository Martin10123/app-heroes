import { useContext } from "react";
// import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
