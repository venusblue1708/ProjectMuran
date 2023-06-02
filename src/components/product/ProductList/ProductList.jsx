import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";
import rec from "./img/Rectangle 22.svg";
import rec1 from "./img/Rectangle 44.svg";

import "./ProductList.css";
import { useProducts } from "../../contexts/AdminContextProvider";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@600;700;900&family=Poppins&display=swap');
</style>;

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  return (
    <Box className="product_list">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15%",
          marginTop: "130px",
        }}
      >
        <img width={100} height={60} src={rec} alt="rectangle" />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography className="product_list_title">Магазин</Typography>
          <img
            style={{ display: "flex", marginTop: "30px", marginLeft: "15px" }}
            width={80}
            height={30}
            src={rec1}
            className="rec1"
            alt="rectangle"
          />
        </Box>
      </Box>

      <Box className="card_product_list">
        {currentData().map((item) => (
          <ProductCard sx={{ display: "flex" }} item={item} key={item.id} />
        ))}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack sx={{ display: "flex", marginTop: "60px" }} spacing={2}>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "60px",
              marginLeft: "-180px",
            }}
            count={count}
            page={page}
            onChange={handleChange}
            shape="rounded"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductList;
