import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotAboutPage/NotAbountPage";
import AdminPage from "../pages/AdminPage/AdminPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/*", element: <NotFoundPage />, id: 7 },
    { link: "/admin", element: <AdminPage />, id: 9 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
