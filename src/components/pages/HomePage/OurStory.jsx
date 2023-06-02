import React from "react";
import text from "./images/В магазин.svg";
import rec from "./images/Rectangle 49.svg";
import { Box, Button, Typography } from "@mui/material";
import ModalVideo from "./ModalVideo";
import rec2 from "./images/Rectangle 34.svg";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@600;700;900&family=Poppins&display=swap');
</style>;

const OurStory = () => {
  const navigate = useNavigate();
  return (
    <Box className="our_story_blog">
      <Box>
        <img
          className="rectangle_story"
          style={{ position: "absolute", marginLeft: "30px", opacity: 0.33 }}
          src={rec}
          alt=""
        />
        <h2 className="our_story_title">НАША ИСТОРИЯ</h2>
        <img src="" alt="" />
      </Box>
      <Typography
        className="our_story_text"
        style={{ display: "flex", width: "80%", marginLeft: "16%" }}
      >
        Подводка высыхает за считанные секунды после нанесения, не скатывается и
        не отпечатывается на верхнем веке. В комплекте с подводкой вы найдете
        миниатюрную кисть, с помощью которой легко регулировать толщину и
        интенсивность стрелок. Beauty Glazed Eyeliner Gel — волшебная палочка в
        мире{" "}
      </Typography>
      <Box
        className="button_control"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => navigate("/products")}
          style={{
            marginLeft: "90px",
            width: "26%",
            marginTop: "40px",
            border: "1px solid #d9d9d9",
          }}
          className="btn_story"
        >
          <img src={text} alt="text" />
        </Button>
        <Box className="control">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ModalVideo />
            <img
              className="rectangle_story"
              style={{ marginLeft: "-90px", marginTop: "32px" }}
              src={rec2}
              alt="rec2"
            />
          </Box>
          <Typography className="modal_text">Краткий видео-обзор</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
