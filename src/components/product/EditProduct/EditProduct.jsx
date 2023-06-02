import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../contexts/AdminContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);
  console.log(product);
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
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
        // backgroundImage:
        //   "url(https://i.pinimg.com/236x/cf/35/93/cf35937389a4993ca79f62fb2397c6ea.jpg)",
        // backgroundSize: "cover",
      }}
    >
      <h1>Изменить данные</h1>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.title || ""}
        sx={{ backgroundColor: "#997b66" }}
      />
      <TextField
        id="outlined-basic"
        label="Descripton"
        variant="outlined"
        name="description"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.description || ""}
        sx={{ backgroundColor: "#ffcb69" }}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.price || ""}
        sx={{ backgroundColor: "#9b9b7a" }}
      />
      <TextField
        id="outlined-basic"
        label="Purpose"
        variant="outlined"
        name="purpose"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.purpose || ""}
        sx={{ backgroundColor: "#d08c60" }}
      />
      <TextField
        id="outlined-basic"
        label="Volume"
        variant="outlined"
        name="volume"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.volume || ""}
        sx={{ backgroundColor: "#f1dca7" }}
      />
      <TextField
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.picture || ""}
        sx={{ backgroundColor: "#797d62" }}
      />
      <TextField
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        size="small"
        fullWidth
        onChange={handleInp}
        value={product.type || ""}
        sx={{ backgroundColor: "#d9ae94" }}
      />
      <Button
        onClick={() => {
          saveEditedProduct(product);
          navigate("/products");
        }}
        size="large"
        variant="outlined"
        sx={{
          border: "1px solid black",
          color: "white",
          backgroundColor: "#797d62",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        save changes
      </Button>
    </Box>
  );
};

export default EditProduct;
