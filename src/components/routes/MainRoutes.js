import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotAboutPage/NotAbountPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import EditProduct from "../product/EditProduct/EditProduct";
import Auth from "../Auth/Auth";
import WishList from "../product/WishList/WishList";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/*", element: <NotFoundPage />, id: 7 },
    { link: "/admin", element: <AdminPage />, id: 9 },
    { link: "/products", element: <ProductPage />, id: 3 },
    { link: "/wishList", element: <WishList />, id: 8 },
    { link: "/edit/:id", element: <EditProduct />, id: 11 },
    { link: "/auth", element: <Auth />, id: 14 },
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
