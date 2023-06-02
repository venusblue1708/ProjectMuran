import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryPageCard from "./CategoryPageCard";
import vector6 from "./image/vector6.svg";
import vector7 from "./image/vector7.svg";
import vector8 from "./image/vector8.svg";
import icon from "./image/icon.svg";
import CategoryPageCard1 from "./CategoryPageCard1";

const CategoryPage = () => {
  return (
    <Box>
      <Box className="main_category" sx={{ marginLeft: "170px" }}>
        <img
          style={{ marginTop: "40px", marginLeft: "25px" }}
          src={vector6}
          alt="error"
        />
        <Box sx={{ display: "flex" }}>
          <h3>
            Обшие категории{" "}
            <img
              style={{ marginBottom: "5px", marginLeft: "30px" }}
              src={vector7}
              alt=""
            />
          </h3>
          <img style={{ marginLeft: "40%" }} src={vector8} alt="" />
        </Box>
        <CategoryPageCard />
      </Box>
      <Box>
        <Box sx={{ display: "flex", marginTop: "80px" }}>
          <Box>
            <img
              className="vector_category"
              style={{ marginLeft: "220px", marginTop: "70px" }}
              src={icon}
              alt=""
            />
          </Box>
          <Box className="category_box" marginLeft={50}>
            <img style={{ marginLeft: "59px" }} src={vector6} alt="" />
            <h1 class="top_category">ТОП КАТЕГОРИЯ</h1>
            <h5>Косметики MURAN</h5>
            <img style={{ marginLeft: "225px" }} src={vector6} alt="" />
          </Box>
        </Box>
        <CategoryPageCard1 />
      </Box>
    </Box>
  );
};

export default CategoryPage;
