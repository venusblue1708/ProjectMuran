import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img3 from "./image/img3.svg";
import img4 from "./image/img4.svg";
import img5 from "./image/img5.svg";
import img6 from "./image/img6.svg";
import img7 from "./image/img7.svg";
import img8 from "./image/img8.svg";
import img9 from "./image/img9.svg";
import "./CategoryPage.css";

export default function CategoryPageCard() {
  return (
    <Box className="category" style={{ display: "flex", flexDirection: "row" }}>
      <Box
        className="category_control"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Card className="balancy" sx={{ display: "flex", width: "350px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                BALANCY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img src={img3} alt="" />
        </Card>
        <Card
          className="energy"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                ENERGY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img width={190} height={190} src={img7} alt="" />
        </Card>
        <Card
          className="healthy"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                HEALTHY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img width={190} height={150} src={img6} alt="" />
        </Card>
        <Card
          className="purify"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                PURIFY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img width={200} src={img8} alt="" />
        </Card>
        <Card
          className="serenity"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                SERENITY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img src={img9} alt="" />
        </Card>
        <Card
          className="serenity"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                SERENITY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img src={img9} alt="" />
        </Card>
      </Box>
      <Box
        className="card_one"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Card
          className="macMiller"
          sx={{ display: "flex", width: "420px", marginLeft: "43px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                SPICY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                СТАЙЛИНГ
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img4} alt="" />
          </Box>
        </Card>
        <Card
          className="card_purify"
          sx={{
            display: "flex",
            width: "350px",
            marginTop: "55px",
            marginLeft: "40px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                PURIFY
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img
            className="card_image"
            width={200}
            height={180}
            src={img5}
            alt=""
          />
        </Card>
      </Box>
    </Box>
  );
}
