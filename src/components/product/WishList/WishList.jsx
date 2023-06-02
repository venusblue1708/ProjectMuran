import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import "./WishList.css";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../../contexts/WishListContextProvider";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@600;700;900&family=Poppins&display=swap');
</style>;
export default function WishList() {
  const navigate = useNavigate();
  const { getWishList, wishList, deleteWishListProduct } = useWishList();

  React.useEffect(() => {
    getWishList();
  }, []);
  console.log(wishList);

  return (
    <Box
      className="wish_list"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card className="wish_list_blog" sx={{ width: 1000, marginTop: "100px" }}>
        <CardContent className="wish_list_title">Избранное</CardContent>
        <CardContent sx={{ padding: "5rem" }}>
          {wishList?.products.map((elem) => (
            <Box key={elem.item.id} sx={{ borderTop: "1px solid #C8C8C8" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  margin: "20px",
                }}
              >
                <img
                  className="img_wish_list"
                  style={{ border: "1px solid #EEEEEE" }}
                  width={180}
                  src={elem.item.picture}
                  alt="cart_image"
                />
                <CardContent>
                  <Typography className="wish_list_text">
                    {elem.item.title} - {elem.item.description}
                  </Typography>
                  <Typography className="wish_list_volume">
                    {elem.item.volume}
                  </Typography>
                </CardContent>
                <Typography className="wish_list_price">
                  {elem.item.price}₴
                </Typography>
                <Button
                  onClick={() => deleteWishListProduct(elem.item.id)}
                  variant="dark"
                  sx={{ height: "20%" }}
                >
                  <ClearIcon />
                </Button>
              </Box>
            </Box>
          ))}
          <Box sx={{ borderTop: "1px solid #C8C8C8" }}>
            <Button
              onClick={() => navigate("/products")}
              className="btn_wish_list"
              sx={{
                fontSize: "16px",
                fontFamily: "Montserrat, san-serif",
                fontWeight: 400,
                color: "#202020",
              }}
            >
              Продолжить покупки
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
