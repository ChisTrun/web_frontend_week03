import * as React from "react";
import { paths } from "./path";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home";
import RegisterPage from "../../pages/Register";
import LoginPage from "../../pages/Login";
import ProfilePage from "../../pages/profile";

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='' element={<LoginPage />} />
        <Route path={paths.HOME} element={<HomePage />} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.PROFILE} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter >
  );
};
export default Router;
