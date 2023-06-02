import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img10 from "./image/img10.svg";
import img11 from "./image/img11.svg";
import img12 from "./image/img12.svg";
import "./CategoryPage.css";
export default function CategoryPageCard1() {
  return (
    <Box className="category1" sx={{ display: "flex", margin: "20px" }}>
      <Box className="card2" sx={{ marginLeft: "150px" }}>
        <Card className="card1" sx={{ display: "flex", width: "400px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent
              sx={{ flex: "1 0 auto", marginLeft: "35px", marginTop: "35px" }}
            >
              <Typography component="div" variant="h5">
                SILKY
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img10} alt="" />
          </Box>
        </Card>
      </Box>
      <Box
        sx={{
          marginLeft: "90px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ display: "flex", width: "350px", marginTop: "50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img11} alt="" />
          </Box>
        </Card>
        <Card sx={{ display: "flex", width: "350px", marginTop: "50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img12} alt="" />
          </Box>
        </Card>
        <Card sx={{ display: "flex", width: "350px", marginTop: "50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img12} alt="" />
          </Box>
        </Card>
        <Card sx={{ display: "flex", width: "350px", marginTop: "50px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <img src={img12} alt="" />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
