import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Logo from "./img/Logo.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useProducts } from "../contexts/AdminContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN1, ADMIN2, ADMIN3 } from "../consts/const";
import {
  getCountProductsInCart,
  getCountProductsInWishList,
} from "../functions/functions";
import { useWishList } from "../contexts/WishListContextProvider";
import { useCart } from "../contexts/CartContextProvider";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Noticia+Text:wght@400;700&display=swap');
</style>;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: ` calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const settings = [
  "Категории",
  "Продукции",
  "Контакты",
  "Доставка",
  "Добавить продукт",
];

export default function Header() {
  const [count, setCount] = React.useState(0);
  const [like, setLike] = React.useState(0);
  const { addProductToWishList } = useWishList();
  const { addProductToCard } = useCart();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");
  const { getProducts } = useProducts();
  React.useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);
  React.useEffect(() => {
    setLike(getCountProductsInWishList());
  }, [addProductToWishList]);
  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCard]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="all_navbar"
        position="static"
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Toolbar
          className="first_appbar"
          sx={{
            justifyContent: "space-around",
            marginLeft: "-100px",
            marginBottom: "10px",
          }}
        >
          <Box
            className="icon"
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 4 }}
              onClick={() => navigate("/wishList")}
            >
              <Badge badgeContent={like} color="error">
                <FavoriteBorderIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => navigate("/cart")}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 4 }}
              className="icon_button_cart"
            >
              <Badge badgeContent={count} color="warning">
                <ShoppingCartIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
            <Search className="icon_button">
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "black", borderBlockEnd: "1px solid black" }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </Search>
          </Box>
          <Typography
            className="logo"
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} width={65} height={75} alt="error" />
          </Typography>

          <Button className="icon_button" sx={{ color: "#474747" }}>
            <CallIcon />
            +38 099 947 19 23
          </Button>
        </Toolbar>

        <Toolbar
          className="second_appbar"
          sx={{
            fontSize: "20px",
            backgroundColor: "#F2EFEB",
            color: "#372821",
          }}
        >
          {/* adaptive navbar */}

          <Box className="menu_button" sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Категории</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Продукции</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Контакты</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Доставка</Typography>
              </MenuItem>
              {email === ADMIN1 || email === ADMIN2 || email === ADMIN3 ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Добавить продукт</Typography>
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
          {/* adaptive navbar */}
          <Box id="dropdown">
            <Typography
              className="second_typography"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "20px" }}
              onClick={() => navigate("/category")}
            >
              Категории
            </Typography>
            <Typography
              className="second_typography"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "20px" }}
              onClick={() => navigate("/products")}
            >
              Продукции
            </Typography>
            <Typography
              className="second_typography"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "20px" }}
              onClick={() => navigate("/contacts")}
            >
              Контакты
            </Typography>
            <Typography
              className="second_typography"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "20px" }}
              onClick={() => navigate("/delivery")}
            >
              Доставка
            </Typography>

            {email === ADMIN1 || email === ADMIN2 || email === ADMIN3 ? (
              <Typography
                className="second_typography"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontSize: "20px" }}
                onClick={() => navigate("/admin")}
              >
                Добавить продукт
              </Typography>
            ) : null}
          </Box>
          {email ? (
            <Typography onClick={handleLogout} className="second_typography">
              <LogoutIcon />
            </Typography>
          ) : (
            <Typography
              onClick={() => navigate("/auth")}
              className="second_typography"
            >
              <LoginIcon sx={{ width: "40px" }} />
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
