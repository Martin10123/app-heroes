import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    dispatch({
      type: types.login,
      payload: {
        name: "Martin",
      },
    });

    navigate(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default LoginScreen;
