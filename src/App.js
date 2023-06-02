import React from "react";
import Header from "./components/Header/Header";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import AdminContextProvider from "./components/contexts/AdminContextProvider";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import WishListContextProvider from "./components/contexts/WishListContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <WishListContextProvider>
          <AdminContextProvider>
            <Header />
            <MainRoutes />
            <Footer />
          </AdminContextProvider>
        </WishListContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
