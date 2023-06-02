import React from "react";
import img from "./image/img1.svg";
import "./Contacts.css";
import vector4 from "./image/vector4.svg";
import vector5 from "./image/vector5.svg";
import map from "./image/карта.png";
import watch1 from "./image/watch1.svg";
import { Box, Typography } from "@mui/material";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@700&display=swap');
</style>;
const Contacts = () => {
  return (
    <Box>
      <Box>
        <img
          class="contact_img"
          width={1450}
          style={{ marginTop: "25px" }}
          src={img}
          alt="error"
        />
        <Typography
          className="contact_text"
          sx={{ width: "60%", marginLeft: "12%" }}
        >
          Специально для мужчин, страдающих от излишней жирности кожного покрова
          головы, а также ее чрезмерной чувствительности, сопровождающейся зудом
          и раздражениями косметологи известного итальянского бренда
          профессиональной косметики Barba Italiana создали средство, которое
          поможет избавится от этих неприятностей — воду морскую очищающую
          янтарную для кожи головы Barba Italiana Muran 02.
          <br />
          <br />
          Она обладает приятным освежающим ароматом, без труда наносится на кожу
          и быстро впитывается. Обогащенная экстрактом фукуса пузырчатого,
          гидрогенизированным касторовым маслом и другими активными компонентами
          прекрасно очищает и подсушивает эпидермис, способствует нормализации
          функций сальных желез, а также оказывае противовоспалительное,
          дезинфицирующие и успокаивающее действия, устраняя ощущение
          дискомфорта.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "10%" }}>
        <img style={{ marginLeft: "13%" }} src={vector4} alt="error" />
        <Typography sx={{ marginLeft: "10%" }} className="contact_h">
          Мы на карте
          <img
            style={{ marginLeft: "3%", marginBottom: "5px" }}
            src={vector5}
            alt="error"
          />
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box>
            <img
              class="contact_map"
              style={{ marginLeft: "21%", marginTop: "35px" }}
              src={map}
              alt="error"
            />
          </Box>
          <Box className="control_img">
            <Box>
              <img
                style={{
                  position: "absolute",
                  marginTop: "100px",
                  marginLeft: "270px",
                }}
                src={watch1}
                alt="error"
              />
            </Box>
            <img
              style={{
                position: "absolute",
                marginTop: "200px",
                marginLeft: "270px",
              }}
              src={watch1}
              alt="error"
            />
            <img
              style={{
                position: "absolute",
                marginTop: "300px",
                marginLeft: "270px",
              }}
              src={watch1}
              alt="error"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
