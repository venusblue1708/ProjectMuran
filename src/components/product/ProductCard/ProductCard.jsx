import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import badgeIcon from "./img/badgeIc.svg";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductCard.css";
import { useWishList } from "../../contexts/WishListContextProvider";
import { useProducts } from "../../contexts/AdminContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN1, ADMIN2, ADMIN3 } from "../../consts/const";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
</style>;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F2EFEB",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-around",
};
export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const { addProductToCard } = useCart();
  const {
    user: { email },
  } = useAuth();
  const { addProductToWishList, checkProductInWishList } = useWishList();
  return (
    <Box className="product_card">
      <Card
        sx={{
          maxWidth: 450,
          boxShadow: "none",
          margin: "40px",
        }}
      >
        <CardMedia
          className="card_media"
          sx={{
            borderBlock: "1px solid ",
            borderColor: "#EDEDED",
            width: "410px",
            height: "380px",
          }}
        >
          <Box
            className="icon_btn"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="dark"
              sx={{
                display: "flex",
                justifyContent: "end",

                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() => {
                addProductToWishList(item);
              }}
            >
              <FavoriteBorderIcon
                color={checkProductInWishList(item.id) ? "error" : ""}
              />
            </Button>
            <Button
              variant="dark"
              sx={{
                display: "flex",
                justifyContent: "end",

                "&:hover": { backgroundColor: "transparent" },
              }}
              //   onClick={() => navigate(`/details/${item.id}`)}
            >
              <RemoveRedEyeIcon />
            </Button>
          </Box>
          <Box>
            <img
              className="card_img"
              src={item.picture}
              component="img"
              width={300}
              height="280"
              style={{ margin: "50px", marginLeft: "50px", height: "250px" }}
              alt="silky"
            />
          </Box>
        </CardMedia>
        <CardContent className="card_list">
          <Box sx={{ display: "flex" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="cards_title"
              sx={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                marginLeft: "30px",
              }}
            >
              {item.title} - {item.description}
            </Typography>
            <Typography
              variant="body5"
              className="cards_price"
              sx={{
                fontSize: "14px",
                color: "#000000",
                marginLeft: "30px",
                color: "#006c73",
              }}
            >
              {item.price}₴
            </Typography>
          </Box>
        </CardContent>
        <Box
          className="control_btn"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => {
              handleOpen();
              //   addProductToCard(item);
            }}
            className="btn_card"
          >
            <img src={badgeIcon} width={140} height="50" alt="error" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button
                sx={{
                  fontFamily: "cursive",
                  color: "#202020",
                  backgroundColor: "#d6ccc2",
                  border: "1px solid #d9d9d9",
                }}
                onClick={() => navigate("/cart")}
              >
                Корзина
              </Button>
              <Button
                sx={{
                  fontFamily: "cursive",
                  color: "#202020",
                  backgroundColor: "#d6ccc2",
                  border: "1px solid #d9d9d9",
                }}
                onClick={() => navigate("/ordering")}
              >
                Оформить заказ
              </Button>
            </Box>
          </Modal>

          {email === ADMIN1 || email === ADMIN2 || email === ADMIN3 ? (
            <Box>
              <Button
                className="btn_card"
                sx={{
                  color: "#372821",
                  border: "1px solid #EDEDED",
                  fontSize: "10px",
                  width: "25px",
                  height: "40px",
                  margin: "6px",
                }}
                onClick={() => deleteProduct(item.id)}
                size="small, "
              >
                Удалить
              </Button>
              <Button
                className="btn_card"
                sx={{
                  color: "#372821",
                  border: "1px solid #EDEDED",
                  fontSize: "10px",
                  width: "25px",
                  height: "40px",
                  margin: "6px",
                }}
                onClick={() => navigate(`/edit/${item.id}`)}
                size="small"
              >
                Редак
              </Button>
            </Box>
          ) : null}
        </Box>
      </Card>
    </Box>
  );
}
