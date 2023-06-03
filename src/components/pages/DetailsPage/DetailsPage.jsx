import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/AdminContextProvider";
import "./DetailsPage.css";
const DetailsPage = () => {
  const {
    getProductDetails,

    productDetails,
  } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <div>
      <Box>
        <div
          className="details-card"
          style={{
            display: "flex",
            justifyContent: "space-evenly",

            margin: "70px",

            alignItems: "center",
          }}
          key={productDetails.id}
        >
          <Box>
            <img
              class="details_img"
              style={{ border: "2px solid #EDEDED" }}
              width={500}
              src={productDetails.picture}
              alt=""
            />
          </Box>
          <Box style={{ marginLeft: "70px" }}>
            <h3 style={{ fontSize: "39px" }} className="details_title">
              {productDetails.title} - {productDetails.description}
            </h3>

            <Typography
              style={{ marginTop: "80px", fontSize: "20px" }}
              className="details_text"
            >
              Класификация: {productDetails.type}
            </Typography>
            <Typography
              style={{ fontSize: "20px", marginTop: "25px" }}
              className="details_text"
            >
              Назначение: {productDetails.purpose}
            </Typography>
            <Typography
              style={{ marginTop: "20px", fontSize: "19px" }}
              className="details_text"
            >
              Объем: {productDetails.volume}
            </Typography>
            <Typography
              style={{ marginTop: "5px", fontSize: "35px" }}
              className="details_text"
            >
              {productDetails.price} ₴
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default DetailsPage;
