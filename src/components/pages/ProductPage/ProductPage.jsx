import React from "react";
import { Grid } from "@mui/material";
import ProductList from "../../product/ProductList/ProductList";
import SideBar from "../../product/SideBar/SideBar";
import "./ProductPage.css";
const ProductPage = () => {
  return (
    <div>
      <Grid sx={{ display: "flex" }}>
        <Grid item md={3}>
          <SideBar />
        </Grid>
        <Grid className="grid" item md={8}>
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
