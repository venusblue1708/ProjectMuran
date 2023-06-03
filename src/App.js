import React from "react";
import Header from "./components/Header/Header";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import AdminContextProvider from "./components/contexts/AdminContextProvider";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import WishListContextProvider from "./components/contexts/WishListContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <WishListContextProvider>
          <CartContextProvider>
            <AdminContextProvider>
              <Header />
              <MainRoutes />
              <Footer />
            </AdminContextProvider>
          </CartContextProvider>
        </WishListContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
