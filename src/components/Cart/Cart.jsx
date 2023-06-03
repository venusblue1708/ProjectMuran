import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import text3 from "./img/Оформить заказ.svg";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@600;700;900&family=Poppins&display=swap');
</style>;
export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <Box
      className="cards_content"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card className="cart_cards" sx={{ width: 1000, marginTop: "100px" }}>
        <CardContent className="cart_title">Корзина</CardContent>
        <CardContent className="cart" sx={{ padding: "5rem" }}>
          {cart?.products.map((elem) => (
            <Box key={elem.item.id} sx={{ borderTop: "1px solid #C8C8C8" }}>
              <Box
                className="cart_cards_control"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  margin: "20px",
                }}
              >
                <img
                  className="image_cart"
                  style={{ border: "1px solid #EEEEEE" }}
                  width={180}
                  src={elem.item.picture}
                  alt="cart_image"
                />
                <CardContent className="cart_control_text">
                  <Typography className="cart_text">
                    {elem.item.title} - {elem.item.description}
                  </Typography>
                  <Typography className="cart_volume">
                    {elem.item.volume}
                  </Typography>
                  <CardContent sx={{ marginLeft: "-15px" }}>
                    <button
                      className="btn_cart"
                      onClick={() =>
                        changeProductCount(elem.count - 1, elem.item.id)
                      }
                    >
                      -
                    </button>
                    <button className="btn_cart">
                      {elem.count < 0 ? 0 : elem.count}
                    </button>
                    <button
                      className="btn_cart"
                      onClick={() =>
                        changeProductCount(elem.count + 1, elem.item.id)
                      }
                    >
                      +
                    </button>
                  </CardContent>
                </CardContent>
                <Typography className="cart_price">
                  {elem.count !== 0
                    ? elem.item.price * elem.count
                    : elem.subPrice}
                  ₴
                </Typography>
                <Button
                  onClick={() => deleteCartProduct(elem.item.id)}
                  variant="dark"
                  sx={{ height: "20%" }}
                >
                  <ClearIcon />
                </Button>
              </Box>
            </Box>
          ))}
          <Box sx={{ borderTop: "1px solid #C8C8C8" }}>
            <Box
              className="cart_price_control"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, san-serif",
                    fontWeight: 400,
                  }}
                >
                  Промокод:
                </Typography>
                <input type="text" className="cart_inp" />
              </Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "Montserrat, san-serif",
                  fontWeight: 400,
                  marginTop: "8px",
                }}
              >
                Итого:
              </Typography>
              <Typography
                className="cart_total_price"
                sx={{
                  fontSize: "35px",
                  fontFamily: "Montserrat, san-serif",
                  fontWeight: 700,
                }}
              >
                {cart?.totalPrice}₴
              </Typography>
            </Box>
            <Box
              className="cart_buttons"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "50px",
              }}
            >
              <Button
                onClick={() => navigate("/products")}
                className="cart_href"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Montserrat, san-serif",
                  fontWeight: 400,
                  color: "#202020",
                }}
              >
                Продолжить покупки
              </Button>
              <Button
                onClick={() => {
                  navigate("/ordering");
                }}
                className="cart_btn"
                style={{ border: "1px solid #d9d9d9" }}
              >
                <img src={text3} alt="Оформить заказ" />
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
