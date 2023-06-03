import React, { useEffect } from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import rec from "../../components/product/ProductList/img/Rectangle 22.svg";
import rec1 from "../../components/product/ProductList/img/Rectangle 44.svg";
import "./Ordering.css";
import Payment from "./Payment/Payment";
import { useCart } from "../contexts/CartContextProvider";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f0ead2",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const Ordering = () => {
  const { getCart, cart } = useCart();
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  const cartClear = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15%",
          marginTop: "150px",
        }}
      >
        <img width={100} height={60} src={rec} alt="rectangle" />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography className="ordering_title">Оформление заказа</Typography>
          <img
            style={{ display: "flex", marginTop: "30px", marginLeft: "15px" }}
            width={80}
            height={30}
            src={rec1}
            alt="rectangle"
          />
        </Box>
      </Box>
      <Box
        className="ordering_box_control"
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart?.products.map((elem) => (
            <CardActions key={elem.item.id} className="ordering_card">
              <CardMedia>
                <img
                  className="ordering_img"
                  width={350}
                  height={260}
                  src={elem.item.picture}
                  alt=""
                />
              </CardMedia>
              <Box>
                <CardContent className="ordering_text">
                  {elem.item.title} - {elem.item.description}
                </CardContent>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardContent className="count">
                    Количество: {elem.count}
                  </CardContent>
                  <CardContent className="ordering_price">
                    {elem.subPrice}₴
                  </CardContent>
                </Box>
              </Box>
            </CardActions>
          ))}
          <Typography
            className="ordering_total_price"
            sx={{
              fontSize: "35px",
              fontFamily: "Montserrat, san-serif",
              fontWeight: 700,
              marginLeft: "550px",
              marginTop: "50px",
            }}
          >
            Итого: {cart.totalPrice ? cart.totalPrice : null}₴
          </Typography>
        </Box>
        <Box sx={{ width: "60%" }}>
          <Box
            className="inp_control"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваше имя *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваша фамилия *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваш телефон *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваш e-mail *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Адрес доставки *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
          </Box>
          <Box>
            <FormControl sx={{ margin: "50px" }}>
              <FormLabel id="demo-radio-buttons-group-label">Оплата</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Прямой банковский перевод"
                  control={<Radio />}
                  label="Прямой банковский перевод"
                />
                <FormControlLabel
                  value="liqPay"
                  control={<Radio />}
                  label="LiqPay"
                />
              </RadioGroup>
            </FormControl>
            <Typography className="text_ordering">
              Введите свой адрес для просмотра параметров доставки.
            </Typography>
            <Payment />
            <Box>
              <Button
                onClick={() => {
                  handleOpen();
                  cartClear();
                }}
                className="btn_ordering"
              >
                Подвердить заказ
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box sx={{ border: "4px solid #6c584c" }}>
                    <Box sx={{ border: "4px solid #a98467" }}>
                      <Box sx={{ border: "4px solid #52796f" }}>
                        <Box sx={{ border: "4px solid #84a98c" }}>
                          <Box sx={{ border: "4px solid #adc178" }}>
                            <Box sx={{ border: "4px solid #dde5b6" }}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Общая сумма покупки составила: {cart.totalPrice}
                                ₴
                              </Typography>
                              <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                              >
                                Спасибо что выбираете нас!
                              </Typography>
                              <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                              >
                                С уважением линия косметики Muran ☺️🌸
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ordering;
