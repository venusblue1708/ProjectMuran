import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { useProducts } from "../../contexts/AdminContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    volume: "",
    price: 0,
    picture: "",
    purpose: "",
    type: "",
  });

  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  console.log(product);
  return (
    <Box
      className="admin_blog"
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#d4a373" }} align="center">
        Admin page
      </h1>
      <TextField
        className="admin_input"
        label="Title"
        color="grey"
        name="title"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Descripton"
        color="grey"
        name="description"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Price"
        color="grey"
        name="price"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Picture"
        color="grey"
        name="picture"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Volume"
        color="grey"
        name="volume"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Purpose"
        color="grey"
        name="purpose"
        size="small"
        onChange={handleInp}
      />
      <TextField
        className="admin_input"
        label="Type"
        color="grey"
        name="type"
        size="small"
        onChange={handleInp}
      />
      <Button
        className="admin_btn"
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        size="large"
        sx={{
          border: "none",
          color: "#d4a373",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;
