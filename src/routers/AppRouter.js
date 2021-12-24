import LoginScreen from "../components/login/LoginScreen";
import { HashRouter, Routes, Route } from "react-router-dom";
import DashBoardRouters from "./DashBoardRouters";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashBoardRouters />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
