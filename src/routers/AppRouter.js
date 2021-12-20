import LoginScreen from "../components/login/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardRouters from "./DashBoardRouters";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
