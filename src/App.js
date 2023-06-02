import React from "react";
import Header from "./components/Header/Header";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import AdminContextProvider from "./components/contexts/AdminContextProvider";

const App = () => {
  return (
    <div>
      <AdminContextProvider>
        <Header />
        <MainRoutes />
        <Footer />
      </AdminContextProvider>
    </div>
  );
};

export default App;
