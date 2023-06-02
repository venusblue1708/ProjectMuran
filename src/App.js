import React from "react";
import Header from "./components/Header/Header";
import MainRoutes from "./components/routes/MainRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
