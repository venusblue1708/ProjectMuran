import React from "react";
import { Link } from "react-router-dom";
import vector1 from "./image/vector1.svg";
import vector2 from "./image/vector2.svg";
import vector3 from "./image/vector3.svg";
import "./Footer.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400;700&display=swap');
</style>;
const Footer = () => {
  return (
    <div
      className="control_left"
      style={{ display: "flex", marginTop: "100px", margin: "220px" }}
    >
      <div>
        <h1 className="montserrat">
          MURAN <img style={{ marginBottom: "10px" }} src={vector1} alt="" />
        </h1>
        <h5 className="Nunito">Официальный представитель в Украине</h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "20px",
            marginTop: "28px",
          }}
        >
          <div style={{ marginRight: "35px" }}>
            <img src={vector2} alt="error" />
            <Link to="https://instagram.com/muran.official.ua?igshid=YmMyMTA2M2Y=b">
              <img
                style={{
                  display: "flex",
                  position: "absolute",
                  margin: "-53px",
                  marginLeft: "17px",
                }}
                width={28}
                src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
                alt="error"
              />
            </Link>
          </div>
          <div style={{ marginRight: "35px" }}>
            <img style={{ display: "flex" }} src={vector2} alt="error" />
            <Link to="https://www.youtube.com/channel/UCWJrIzoI4jZbBOdeJp9KlRQ">
              <img
                style={{
                  display: "flex",
                  position: "absolute",
                  margin: "-54px",
                  marginLeft: "20px",
                }}
                width={34}
                src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
                alt="error"
              />
            </Link>
          </div>
          <div>
            <img style={{ display: "flex" }} src={vector2} alt="error" />
            <Link to="https://www.facebook.com/Muran.official.ua">
              <img
                style={{
                  display: "flex",
                  position: "absolute",
                  margin: "-49px",
                  marginLeft: "20px",
                }}
                width={28}
                src="https://cdn-icons-png.flaticon.com/512/21/21155.png"
                alt="error"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="control_box">
        <h4 className="montserrat">Навигация по сайту</h4>
        <div style={{ display: "flex", marginTop: "-25px" }}>
          <Link style={{ textDecoration: "none" }} to="/products">
            <h5 style={{ marginRight: "60px" }} className="nunito">
              Продукция
            </h5>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/contacts">
            <h5 style={{ marginRight: "60px" }} className="nunito">
              Контакы
            </h5>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/delivery">
            <h5 style={{ marginRight: "50px" }} className="nunito">
              Доставка
            </h5>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <h5 className="nunito">Корзина</h5>
          </Link>
        </div>
        <h4 className="montserrat">Наши контакты</h4>
        <div style={{ display: "flex", marginTop: "-15px" }}>
          <h5 style={{ marginRight: "60px" }} className="nunito">
            T: 098 738 12 93
          </h5>
          <h5 style={{ marginRight: "60px" }} className="nunito">
            T: 098 738 12 93
          </h5>
          <h5 className="nunito">Украина, г. Харьков, пл. Конституции, 31</h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ display: "flex" }}
            className="vector3"
            width={800}
            src={vector3}
            alt="error"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
