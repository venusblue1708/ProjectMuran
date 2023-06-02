import React from "react";
import OurStory from "./OurStory";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import profilePicture from "./images/profile_picture.svg";
import vector from "./images/Vector.svg";
import text from "./images/В магазин.svg";
import profilePicture2 from "./images/Mask Group (1).svg";
import vector2 from "./images/Rectangle 16.svg";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@600;700;900&family=Poppins&display=swap');
</style>;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box style={{ marginTop: "50px" }}>
        <Box
          className="home_page"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            marginTop: "100px",
            marginLeft: "200px",
            position: "absolute",
          }}
        >
          <img
            className="vector2"
            width={5}
            style={{ height: "90px", marginLeft: "54px" }}
            src={vector2}
            alt="vector2"
          />
          <h1 className="profile_title">ПРЕДСТАВИТЕЛЬ КОСМЕТИКИ MURAN</h1>
          <Button
            onClick={() => navigate("/products")}
            style={{ border: "1px solid #d9d9d9" }}
            className="btn_profile"
          >
            <img src={text} alt="" />
          </Button>
          <img
            style={{
              marginTop: "130px",
              marginLeft: "50px",
            }}
            src={vector}
            alt="vector"
            width={160}
          />
        </Box>
        <Box>
          <img
            className="profile_picture"
            width={955}
            src={profilePicture}
            alt="profilePicture"
          />
          {/* <video loop muted autoPlay width={955} className="profile_picture">
            <source src="https://muranhair.com/wp-content/uploads/2021/03/video.mp4" />
          </video> */}
        </Box>
      </Box>
      <Box
        className="homepage_control"
        style={{
          display: "flex",
          marginTop: "100px",
        }}
      >
        <img
          className="second_profile_picture"
          width={888}
          src={profilePicture2}
          alt="profile_picture2"
        />

        <h3
          style={{
            display: "flex",
            marginLeft: "17%",
            marginTop: "100px",
            backgroundColor: " #F2F2F2",
            height: "60px",
          }}
        >
          History
        </h3>

        <Box
          className="our_story_control"
          style={{
            display: "flex",
            position: "absolute",
            backgroundColor: "#ffffff",
            width: "55%",
            marginLeft: "30%",
            marginTop: "13%",
            height: "530px",
          }}
        >
          <OurStory />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
